import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getFeaturedImage, getAuthor, getExcerpt, getAllPosts } from '@/lib/wordpress';
import AuthorBox from '../components/AuthorBox';
import styles from './post.module.css';

interface Props {
  params: { slug: string };
}

// ISR mapping for build time (similar to getStaticPaths)
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  const excerpt = getExcerpt(post);
  const image = getFeaturedImage(post);
  const canonical = `https://ilovepdfkit.com/blog/${post.slug}`;

  return {
    title: post.title.rendered,
    description: excerpt,
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: post.title.rendered,
      description: excerpt,
      url: canonical,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modified,
      images: image ? [{ url: image.url, alt: image.alt }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title.rendered,
      description: excerpt,
      images: image ? [image.url] : [],
    }
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const image = getFeaturedImage(post);
  const author = getAuthor(post);
  const excerpt = getExcerpt(post);
  const categories = post._embedded?.['wp:term']?.[0] || [];
  const canonical = `https://ilovepdfkit.com/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title.rendered,
    "description": excerpt,
    "datePublished": post.date,
    "dateModified": post.modified,
    "author": {
      "@type": "Person",
      "name": author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "iLovePDFKit",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ilovepdfkit.com/blog/logo.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonical
    },
    ...(image && {
      "image": {
        "@type": "ImageObject",
        "url": image.url
      }
    })
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ilovepdfkit.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://ilovepdfkit.com/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title.rendered, "item": canonical }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <article className={styles.post}>
        <header className={styles.postHeader}>
          <div className={styles.postCategories}>
            {categories.map(cat => (
              <Link key={cat.slug} href={`/blog/category/${cat.slug}`} className={styles.categoryTag}>
                {cat.name}
              </Link>
            ))}
          </div>
          <h1 className={styles.postTitle} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <div className={styles.postMeta}>
            <span className="author">By {author.name}</span>
            <span className={styles.separator}>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </header>

        {image && (
          <Image 
            src={image.url} 
            alt={image.alt} 
            width={1200} 
            height={630} 
            className={styles.featuredImage}
            sizes="(max-width: 800px) 100vw, 800px"
            priority
          />
        )}

        <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

        <AuthorBox name={author.name} avatar={author.avatar} />

        <div className={styles.conversionCta}>
          <h3>Ready to convert your PDFs?</h3>
          <p>Try our free, fast, and secure PDF conversion tools now!</p>
          <Link href="/#tools-section" className={styles.ctaButton}>Get Started →</Link>
        </div>
      </article>
    </>
  );
}
