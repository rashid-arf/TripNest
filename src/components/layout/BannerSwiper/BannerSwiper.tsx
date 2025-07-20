import styles from './BannerSwiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { FC } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import phoneIcon from '@/assets/images/phone-icon.png';
import divider from '@/assets/images/vertical-divider.png';
import Link from 'next/link';
import { SwiperItem } from '@/components/layout/BannerSwiper/BannerSwiper.types';
import { TripAdvisor } from '@/components/common/TripAdvisor/TripAdvisor';
import { PaintedLabel } from '@/components/common/PaintedLabel/PaintedLabel';
import Image from 'next/image';
import {PhoneNumber} from "@/components/common/PhoneNumber/PhoneNumber";
import {BannerSearch} from "@/components/layout/BannerSearch/BannerSearch";

type Props = {
  bannerSwiperInfo: SwiperItem[];
};

export const BannerSwiper: FC<Props> = ({ bannerSwiperInfo }) => {
  const swiperProps = {
    loop: true,
    autoplay: {
      delay: 1000,
    },
    slidesPerView: 1,
    pagination: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  return (
    <div className={styles.swiperBlock}>
      <Swiper className={styles.swiper} modules={[Navigation]} {...swiperProps}>
        {bannerSwiperInfo.map((bannerSwiperInfo) => {
          return (
            <SwiperSlide className={styles.swiperSlide} key={bannerSwiperInfo.id}>
              <Image
                className={styles.bgImage}
                src={bannerSwiperInfo.bgImage}
                alt={bannerSwiperInfo.bgAlt}
                fill
              />
              <div className={styles.info}>
                <div className={styles.location}>
                  <Link href={'/spain'}>
                    <PaintedLabel
                      text="Spain"
                      icon={'assets/images/location-icon.svg'}
                      background={'assets/images/mask-group.svg'}
                      variant="location"
                    />
                  </Link>
                </div>

                <h2 className={styles.title}>{bannerSwiperInfo.title}</h2>
                <p className={styles.description}>{bannerSwiperInfo.description}</p>
                <div className={styles.bookRatingBlock}>
                  <div className={styles.accountBlockPhone}>
                    <Image src={phoneIcon} alt="phone-icon"/>
                    <Image src={divider} alt="vertical-divider"/>
                    <div>
                      <p className={styles.accountBlockPhoneTitle}>To More Inquiry</p>
                      <PhoneNumber phoneInfo={'+990-737 621 432'}/>
                    </div>
                  </div>
                  <TripAdvisor
                      source="tripadvisor"
                      icon={bannerSwiperInfo.tripAdvisorIcon}
                      iconAlt={bannerSwiperInfo.iconAlt}
                      logo={bannerSwiperInfo.tripAdvisorLogo}
                      logoAlt={bannerSwiperInfo.tripAdvisorLogoAlt}
                      rating={bannerSwiperInfo.tripAdvisorRating}
                      modifier="Banner"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={styles.swiperButtonBox}>
          <div>
            <div className={`swiper-button-prev ${styles.swiperButtonPrev}`}></div>
          </div>
          <div>
            <div className={`swiper-button-next ${styles.swiperButtonNext}`}></div>
          </div>
        </div>
      </Swiper>
      <BannerSearch/>
    </div>
  );
};
