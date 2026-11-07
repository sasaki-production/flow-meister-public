import styles from './News.module.css';
import PageFirstView from '@/components/layout/PageFirstView';
import TwoColumn from '@/components/layout/TwoColumn';
import Link from 'next/link';
import NewsCard from '@/components/ui/NewsCard';
import { stripHtmlTags } from '@/utils/string';
import { formatDate } from '@/utils/date';
import { getPosts, getTotalPages } from '@/lib/wordpress';
import Breadcrumb from '@/components/layout/Breadcrumb';
import type { Metadata } from 'next';
import { defaultOpenGraph, siteName } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'お知らせ',
  description: 'お知らせ一覧ページです。',

  openGraph: {
    ...defaultOpenGraph,
    title: `お知らせ | ${siteName} `,
    url: '/news/',
  },
};

export default async function News() {
  const perPage = 9;
  const currentPage = 1;
  const posts = await getPosts(perPage);
  const totalPages = await getTotalPages(perPage);
  const breadcrumbItems = [
    {
      href: '/',
      text: 'ホーム',
    },
    {
      href: '/news/',
      text: 'お知らせ',
    },
  ];

  return (
    <>
      <PageFirstView subText="News" mainText="お知らせ" textAlign="isCenter" />
      <TwoColumn>
        <div className={styles.news}>
          <p className={styles.title}>すべての記事</p>
          <div className={styles.cards}>
            {Array.isArray(posts) &&
              posts.map((post: any) => {
                // オプショナルチェイニングで安全に取得
                const featuredImage =
                  post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
                  '/no-image.jpg';
                const categories =
                  post._embedded?.['wp:term']?.[0]?.map((category: any) => ({
                    id: category.id,
                    name: category.name,
                  })) || [];

                return (
                  <div className={styles.card} key={post.id}>
                    <NewsCard
                      src={featuredImage}
                      id={post.id}
                      title={post.title.rendered}
                      excerpt={stripHtmlTags(post.excerpt.rendered)}
                      date={formatDate(post.date)}
                      categories={categories}
                    />
                  </div>
                );
              })}
          </div>
          {/* ページネーション */}
          <div className={styles.pagination}>
            <div className={styles.numbers}>
              {[...Array(totalPages)].map((_, i) => {
                const pageNumber = i + 1;
                return (
                  <Link
                    key={pageNumber}
                    className={`${styles.number} ${currentPage === pageNumber && styles.isCurrent}`}
                    href={`/news/page/${pageNumber}/`}
                  >
                    {pageNumber}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </TwoColumn>
      <Breadcrumb items={breadcrumbItems} />
    </>
  );
}
