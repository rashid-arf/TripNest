'use client';

import styles from '@/components/Blog/BlogRecentPost/BlogRecentPost.module.scss';
import Image from 'next/image';
import React, { FC } from 'react';
import { TravelArticleItem } from '@/components/common/TravelArticle/TravelArticle.types';
import Link from 'next/link';

type Props = {
  travelArticle: TravelArticleItem[];
};

export const BlogRecentPost: FC<Props> = ({ travelArticle }) => {
  return (
    <div className={styles.BlogRecentPost}>
      <h3 className={styles.BlogRecentPostTitle}>Recent Post</h3>
      {travelArticle.slice(0, 3).map(
        (
          item // 👉 тільки перші 3
        ) => (
          <Link href={`/blog/${item.id}`} className={styles.BlogRecentPostItem} key={item.id}>
            <Image
              src={item.image}
              alt={item.alt}
              width={92}
              height={70}
              className={styles.BlogRecentPostItemImage}
            />
            <div className={styles.BlogRecentPostItemContent}>
              <span className={styles.BlogRecentPostItemContentDate}>
                {item.Date} {item.Month}, {item.Year}
              </span>
              <p className={styles.BlogRecentPostItemContentText}>{item.Title}</p>
            </div>
          </Link>
        )
      )}
    </div>
  );
};
