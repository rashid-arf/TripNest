import React, { FC } from 'react';
import styles from './TravelArticle.module.scss';
import Link from 'next/link';
import { DefaultTitleLink } from '@/components/common/DefaultTitleLink/DefaultTitleLink';
import { DefaultTitleName } from '@/components/common/DefaultTitleName/DefaultTitleName';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { TravelArticleItem } from '@/components/common/TravelArticle/TravelArticle.types';
import postArrow from '@/assets/images/post-arrow.png';
import fireIcon from '@/assets/images/fireIcon.png';

type Props = {
  travelArticle: TravelArticleItem[];
};

export const TravelActive: FC<Props> = ({ travelArticle }) => {
  const swiperProps = {
    loop: true,
    autoplay: {
      delay: 1000,
    },
    slidesPerView: 2,
    pagination: false,
    spaceBetween: 24,
  };

  return (
    <div className={`content-width ${styles.TravelArticleContainer}`}>
      <Link href={'/travel-article'} className={styles.TravelArticleLink}>
        <DefaultTitleLink titleLinkText={'Article'} />
      </Link>
      <DefaultTitleName titleName={'Travel Article Enthusiast'} />
      <Swiper className={styles.TravelArticlePhotos} modules={[Navigation]} {...swiperProps}>
        {travelArticle.map((item) => (
          <SwiperSlide key={item.id} className={styles.TravelArticleSlideItem}>
            <Image src={item.image} alt={item.alt} width={648} height={324} />
            <div className={styles.TravelArticleSlideItemDescription}>
              <div className={styles.ItemDescriptionTop}>
                <p>
                  By <span className={styles.ItemDescriptionTopByName}>{item.ByName}</span>
                </p>
                <div className={styles.ItemDescriptionTopDot}></div>
                <p>{item.TourType}</p>
              </div>
              <p className={styles.ItemDescriptionTitle}>{item.Title}</p>
              <div className={styles.ItemDescriptionBottom}>
                <Link href={'/view-post'}>
                  <div className={styles.ItemDescriptionBottomPost}>
                    <p className={styles.ItemDescriptionBottomPostLeft}>View Post</p>
                    <Image src={postArrow} alt="postArrow" width={22} height={22} />
                  </div>
                </Link>
                <div className={styles.ItemDescriptionBottomPostRight}>
                  <Image src={fireIcon} alt="fireIcon" width={10} height={12} />
                  <p className={styles.ItemDescriptionBottomPostRightText}>1 Min Read</p>
                </div>
              </div>
            </div>
            <div className={styles.TravelArticleSlideItemDate}>
              <p className={styles.TravelArticleSlideItemDateTop}>{item.Date}</p>
              <p className={styles.TravelArticleSlideItemDateBottom}>{item.Month}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.swiperTravelGuideButtonBox}></div>
    </div>
  );
};
