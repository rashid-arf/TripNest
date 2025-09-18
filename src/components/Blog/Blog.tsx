import React, { FC } from 'react';
import styles from './Blog.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import postArrow from '@/assets/images/post-arrow.png';
import fireIcon from '@/assets/images/fireIcon.png';
import clock from '@/assets/images/clock.png';
import chatIcon from '@/assets/images/chatIcon.png';
import { TravelArticleItem } from '@/components/common/TravelArticle/TravelArticle.types';

type Props = {
  travelArticle: TravelArticleItem[];
};

export const Blog: FC<Props> = ({ travelArticle }) => {
  return (
    <div className={`content-width ${styles.BlogContainer}`}>
      <div className={styles.BlogPhotos}>
        {travelArticle.map((item) => (
          <div key={item.id} className={styles.BlogSlideItem}>
            <Image src={item.image} alt={item.alt} width={856} height={428} />
            <div className={styles.BlogSlideItemDescription}>
              <div className={styles.BlogDescriptionTop}>
                <div className={styles.BlogDescriptionTopItem}>
                  <Image src={fireIcon} alt="fireIcon" width={12} height={16} />
                  <p className={styles.BlogDescriptionTopItemTitle}>{item.views}</p>
                </div>
                <div className={styles.BlogDescriptionTopLine}></div>
                <div className={styles.BlogDescriptionTopItem}>
                  <Image src={clock} alt="clock" width={16} height={16} />
                  <p className={styles.BlogDescriptionTopItemTitle}>1 Min Read</p>
                </div>
                <div className={styles.BlogDescriptionTopLine}></div>
                <div className={styles.BlogDescriptionTopItem}>
                  <Image src={chatIcon} alt="chatIcon" width={16} height={20} />
                  <p className={styles.BlogDescriptionTopItemTitle}> (0) Comment</p>
                </div>
              </div>
              <p className={styles.ItemDescriptionTitle}>{item.Title}</p>
              <p className={styles.BlogDescriptionTopItemTitle}>{item.TextBlog}</p>
              <div className={styles.ItemDescriptionBottom}>
                <Link href={'/blog-text'}>
                  <div className={styles.ItemDescriptionBottomPost}>
                    <p className={styles.ItemDescriptionBottomPostLeft}>View Post</p>
                    <Image src={postArrow} alt="postArrow" width={22} height={22} />
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.BlogSlideItemDate}>
              <p className={styles.BlogSlideItemDateTop}>{item.Date}</p>
              <p className={styles.BlogSlideItemDateBottom}>{item.Month}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.BlogFilters}>
        <div className={styles.BlogFiltersSearch}>
          <p>Search Here</p>
          <div>
            <input />
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};
