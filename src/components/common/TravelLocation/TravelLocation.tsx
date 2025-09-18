import { FC } from 'react';
import styles from './TravelLocation.module.scss';
import Link from 'next/link';
import { DefaultTitleLink } from '@/components/common/DefaultTitleLink/DefaultTitleLink';
import { DefaultTitleName } from '@/components/common/DefaultTitleName/DefaultTitleName';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { DefaultButton } from '@/components/common/DefaultButton/DefaultButton';
import { SliderArrow } from '@/components/common/Arrows/SliderArrow/SliderArrow';
import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { LocationItem } from '@/components/common/TravelLocation/TravelLocation.types';

type Props = {
  travelLocation: LocationItem[];
};

export const TravelLocation: FC<Props> = ({ travelLocation }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const swiperProps = {
    loop: true,
    autoplay: {
      delay: 1000,
    },
    slidesPerView: 4,
    pagination: false,
    spaceBetween: 24,
  };

  return (
    <div className={styles.TravelLocationContainer}>
      <Link href={'/travel-location'} className={styles.TravelLocationLink}>
        <DefaultTitleLink titleLinkText={'Journey TripNext'} />
      </Link>
      <DefaultTitleName titleName={'Trendy Travel Locations'} />
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className={styles.TravelLocationPhotos}
        modules={[Navigation]}
        {...swiperProps}
      >
        {travelLocation.map((item) => (
          <SwiperSlide
            key={item.id}
            className={styles.TravelLocationPhotosItem}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className={styles.yellowMask}>
              <div className={styles.TravelLocationPhotosItem1Mask}>{item.tour}</div>
            </div>
            <div className={styles.titleMask}>
              <div className={styles.TravelLocationPhotosItemTitle}>
                <div className={styles.TravelLocationPhotosItemTitleTop}>{item.titleTop}</div>
                <div className={styles.TravelLocationPhotosItemTitleBottom}>{item.titleBottom}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.swiperTravelLocationButtonBox}>
        <div className={styles.swiperArrowBlock}>
          <SliderArrow
            arrowText={'PREV'}
            onClick={() => swiperRef.current?.slidePrev()}
            sliderArrow={''}
            circle={''}
            modifier={'PREV'}
            color={'green'}
          />
          <SliderArrow
            modifier="NEXT"
            arrowText="NEXT"
            onClick={() => swiperRef.current?.slideNext()}
            circle={''}
            color={'green'}
            sliderArrow={''}
          />
        </div>
        <Link href={'/destination'} className={styles.viewAllDestinationLink}>
          <DefaultButton buttonText={'View All Destination'} className={styles.sliderButton} />
        </Link>
      </div>
    </div>
  );
};
