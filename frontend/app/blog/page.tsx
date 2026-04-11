import { Metadata } from 'next';
import { getAllPosts, getExcerpt, getFeaturedImage } from '@/lib/wordpress';
import PostCard from './components/PostCard';
import styles from './blog.module.css';

export const metadata: Metadata = {
  title: 'Blog | iLovePDFKit',
  description: 'Tips, guides, and updates about PDF conversion and document management',
  alternates: {
    canonical: 'https://ilovepdfkit.com/blog',
  },
  openGraph: {
    title: 'Blog | iLovePDFKit',
    description: 'Tips, guides, and updates about PDF conversion and document management',
    url: 'https://ilovepdfkit.com/blog',
    type: 'website',
  },
};

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>iLovePDFKit Blog</h1>
      <p className={styles.subtitle}>Tips, guides, and updates about PDF tools</p>
      
      {posts.length === 0 ? (
        <p className={styles.emptyState}>No posts available yet. Check back soon!</p>
      ) : (
        <div className={styles.postsGrid}>
          {posts.map(post => {
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
      )}
    </main>
  );
}
