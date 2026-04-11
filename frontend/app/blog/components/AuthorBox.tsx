import Image from 'next/image';
import styles from '../blog.module.css'; // Let's create an authorBox style here

interface Props {
  name: string;
  avatar?: string;
  bio?: string;
}

export default function AuthorBox({ name, avatar, bio = "Expert in document conversion and digital workflows. Helping you make the most of iLovePDFKit tools." }: Props) {
  return (
    <div className={styles.authorBox}>
      <div className={styles.authorAvatar}>
        {avatar ? (
          <Image src={avatar} alt={name} width={80} height={80} className={styles.authorImg} />
        ) : (
          <div className={styles.avatarPlaceholder}>{name.charAt(0)}</div>
        )}
      </div>
      <div className={styles.authorInfo}>
        <p className={styles.writtenBy}>Written by</p>
        <h3 className={styles.authorName}>{name}</h3>
        <p className={styles.authorBio}>{bio}</p>
      </div>
    </div>
  );
}
