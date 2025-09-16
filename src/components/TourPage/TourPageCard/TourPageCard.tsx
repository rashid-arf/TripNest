import React, { FC } from 'react';
import styles from './TourPageCard.module.scss';
import Image from 'next/image';
import locationPint from '@/assets/images/locationPint.png';
import { DefaultButton } from '@/components/common/DefaultButton/DefaultButton';
import planeIcon from '@/assets/images/plane.png';

type Tour = {
  id: number;
  image: string;
  imageAlt: string;
  name: string;
  price: number;
  salePrice: number;
  location: string;
  duration: string;
  routeLocations: string[];
  flags: {
    ultimate: boolean;
    affordable: boolean;
    elite: boolean;
  };
};

type Props = {
  tour: Tour;
};

export const TourPageCard: FC<Props> = ({ tour }) => {
  // визначаємо, який бейдж показати
  let flagLabel = '';
  if (tour.flags.ultimate) flagLabel = 'Ultimate';
  else if (tour.flags.affordable) flagLabel = 'Affordable';
  else if (tour.flags.elite) flagLabel = 'Elite';

  return (
    <div className={styles.tourPageCardItem}>
      {/* Фото */}
      <div className={styles.tourPageCardItemPhoto}>
        <Image
          src={tour.image}
          alt={tour.imageAlt}
          width={376}
          height={260}
          className="rounded-lg"
        />
      </div>

      {/* Заголовок */}
      <h3 className={styles.tourPageCardItemTitle}>{tour.name}</h3>

      {/* Локації (стрілочками) */}
      <div className={styles.tourPageCardItemRoutes}>
        {tour.routeLocations.map((place, index) => (
          <span key={index} className={styles.routeItem}>
            {place}
            {index < tour.routeLocations.length - 1 && (
              <span className={styles.routeArrow}> → </span>
            )}
          </span>
        ))}
      </div>
      <hr className={styles.cardLine} />
      {/* Ціни */}
      <div className={styles.tourPageCardItemPrice}>
        <div>
          <p className={styles.tourPageCardItemPriceTop}>Starting From:</p>
          <span className={styles.salePrice}>${tour.salePrice}</span>
          <span className={styles.oldPrice}>${tour.price}</span>
          <p className={styles.tourPageCardItemPriceBottom}>TAXES INCL/PERS</p>
        </div>
        <DefaultButton
          buttonText={'Book A Trip'}
          className={styles.tourPageButton}
          iconRight={<Image src={planeIcon} alt="plane" width={18} height={20} />}
        />
      </div>

      {/* Бейджики поверх фото */}
      <div className={styles.tourPageCardItemBadges}>
        <span className={styles.tourPageCardItemBadgesDuration}>{tour.duration}</span>
        <div className={styles.tourPageCardItemBadgesLocation}>
          <Image src={locationPint} alt="location" width={18} height={20} />
          <span className={styles.tourPageCardItemBadgesLocationTitle}>{tour.location}</span>
        </div>

        {flagLabel && (
          <span
            className={`${styles.flagBadge} ${
              tour.flags.ultimate
                ? styles.flagUltimate
                : tour.flags.affordable
                  ? styles.flagAffordable
                  : styles.flagElite
            }`}
          >
            {flagLabel}
          </span>
        )}
      </div>
    </div>
  );
};
