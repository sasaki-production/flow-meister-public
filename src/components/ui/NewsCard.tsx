import Link from 'next/link';
import styles from './NewsCard.module.css';
import Image from 'next/image';

type NewsCardProps = {
  src: string;
  id: number;
  title: string;
  excerpt: string;
  date: string;
  categories: {
    id: number;
    name: string;
  }[];
};

export default function NewsCard({
  src,
  id,
  title,
  excerpt,
  date,
  categories,
}: NewsCardProps) {
  return (
    <div className={styles.card}>
      <Link href={`/news/${id}/`} className={styles.image}>
        <Image
          className={styles.thumbnail}
          src={src}
          alt=""
          width="1024"
          height="576"
        />
      </Link>
      <div className={styles.body}>
        <a href={`/news/${id}/`} className={styles.title}>
          {title}
        </a>
        <p className={styles.excerpt}>{excerpt}</p>
        <p className={styles.date}>{date}</p>
        <div className={styles.categories}>
          {categories.map((category, index) => {
            return (
              <Link
                // category.id が無い、または NaN の場合に index を使う
                key={category.id || index}
                className={styles.category}
                href={`/news/category/${category.id}`}
              >
                {/* カテゴリ名の表示部分 */}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
