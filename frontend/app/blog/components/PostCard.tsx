import Image from 'next/image';
import Link from 'next/link';
import styles from '../blog.module.css';

interface Props {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  image?: { url: string; alt: string } | null;
}

export default function PostCard({ title, excerpt, slug, date, image }: Props) {
  return (
    <article className={styles.postCard}>
      {image && (
        <Link href={`/blog/${slug}`} className={styles.postImageLink}>
          <Image 
            src={image.url} 
            alt={image.alt} 
            width={400} 
            height={225} 
            className={styles.postImage}
          />
        </Link>
      )}
      
      <div className={styles.postContent}>
        <h2 className={styles.postTitle}>
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h2>
        <p className={styles.excerpt}>{excerpt}</p>
        <time dateTime={date} className={styles.date}>
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </div>
    </article>
  );
}
