import { FC } from 'react';
import styles from './TripAdvisor.module.scss';
import Image from 'next/image';
import { RatingCircles } from '@/components/common/RatingTripAdvisor/RatingTripAdvisor';
import Link from 'next/link';

type Props = {
  tripAdvisorIcon: string;
  iconAlt: string;
  tripAdvisorLogo: string;
  tripAdvisorLogoAlt: string;
  tripAdvisorRating: number;
};

export const TripAdvisor: FC<Props> = ({
  tripAdvisorIcon,
  iconAlt,
  tripAdvisorLogo,
  tripAdvisorLogoAlt,
  tripAdvisorRating,
}) => {
  return (
    <Link style={{ textDecoration: 'none' }} href={'/'}>
      <div className={styles.tripAdvisorBlock}>
        <Image className={styles.icon} src={tripAdvisorIcon} alt={iconAlt} width={46} height={46} />
        <div>
          <Image
            className={styles.logo}
            src={tripAdvisorLogo}
            alt={tripAdvisorLogoAlt}
            width={110}
            height={20}
          />
          <div className={styles.ratingBlock}>
            <RatingCircles rating={tripAdvisorRating} />
            <p className={styles.ratingInfo}>{tripAdvisorRating.toFixed(1)} / 5.0</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
