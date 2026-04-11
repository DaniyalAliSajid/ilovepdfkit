import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getFeaturedImage, getExcerpt } from '@/lib/wordpress';
import PostCard from '../../components/PostCard';
import styles from './category.module.css';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const categories = new Set<string>();
  
  posts.forEach(post => {
    const terms = post._embedded?.['wp:term']?.[0] || [];
    terms.forEach(term => {
      categories.add(term.slug);
    });
  });
  
  return Array.from(categories).map(slug => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const posts = await getAllPosts();
  const postWithCategory = posts.find(post => {
    const terms = post._embedded?.['wp:term']?.[0] || [];
    return terms.some(term => term.slug === params.slug);
  });

  if (!postWithCategory) {
    return { title: 'Category Not Found' };
  }

  const categoryTerm = postWithCategory._embedded?.['wp:term']?.[0]?.find(term => term.slug === params.slug);
  const categoryName = categoryTerm ? categoryTerm.name : params.slug;

  return {
    title: `${categoryName} Articles | iLovePDFKit`,
    description: `Browse all our articles in the ${categoryName} category.`,
    alternates: {
      canonical: `https://ilovepdfkit.com/blog/category/${params.slug}`,
    },
    openGraph: {
      title: `${categoryName} Articles | iLovePDFKit`,
      description: `Browse all our articles in the ${categoryName} category.`,
      url: `https://ilovepdfkit.com/blog/category/${params.slug}`,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const allPosts = await getAllPosts();
  
  let categoryName = params.slug;
  const categoryPosts = allPosts.filter(post => {
    const terms = post._embedded?.['wp:term']?.[0] || [];
    const term = terms.find(t => t.slug === params.slug);
    if (term) {
      categoryName = term.name;
      return true;
    }
    return false;
  });

  if (categoryPosts.length === 0) {
    notFound();
  }

  return (
    <main className={styles.container}>
      <div className={styles.categoryHeader}>
        <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>
        <h1 className={styles.title}>Category: {categoryName}</h1>
        <p className={styles.subtitle}>{categoryPosts.length} {categoryPosts.length === 1 ? 'article' : 'articles'} found</p>
      </div>
      
      <div className={styles.postsGrid}>
        {categoryPosts.map(post => {
          const image = getFeaturedImage(post);
          const excerpt = getExcerpt(post);
          
          return (
            <PostCard
              key={post.id}
              title={post.title.rendered}
              excerpt={excerpt}
              slug={post.slug}
              date={post.date}
              image={image}
            />
          );
        })}
      </div>
    </main>
  );
}
