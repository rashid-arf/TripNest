import { FC } from 'react';
import styles from './TourPageCard.module.scss'
import Image from 'next/image';


type Tour = {
  id: number;
  image: string;
  imageAlt: string;
  name: string;
  price: number;
  salePrice: number;
  location: string;
  duration: string;
};

type Props = {
  tour: Tour;
};

export const TourPageCard: FC<Props> = ({ tour }) => {
  return (
    <div className={styles.tourPageCardItem}>
      <div className={styles.tourPageCardItemPhotoItem}>
        <Image
          src={tour.image}
          alt={tour.imageAlt}
          width={376}
          height={260}
          className="rounded-lg"
        />
      </div>

      <h3 >{tour.name}</h3>
      <p >{tour.location} — {tour.duration}</p>
      <p>
        <span >${tour.price}</span>{' '}
        <span >${tour.salePrice}</span>
      </p>
    </div>
  );
};