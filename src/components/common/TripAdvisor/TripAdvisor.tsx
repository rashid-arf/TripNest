import { FC } from 'react';
import styles from './TripAdvisor.module.scss';
import Image from 'next/image';
import { RatingCircles } from '@/components/common/RatingTripAdvisor/RatingTripAdvisor';
import Link from 'next/link';
import clsx from 'clsx';

type Props = {
  source: 'tripadvisor' | 'trustpilot';
  icon: string;
  iconAlt: string;
  logo: string;
  logoAlt: string;
  rating: number;
  modifier?: 'Banner' | 'FindTravels';
  withBackground?: boolean;
};

export const TripAdvisor: FC<Props> = ({
  rating,
  logo,
  logoAlt,
  icon,
  iconAlt,
  modifier = 'Banner',
  withBackground = false,
  source,
}) => {
  const isVertical = modifier === 'FindTravels';

  return (
    <Link style={{ textDecoration: 'none' }} href="/">
      <div
        className={clsx(
          styles.tripAdvisorBlock,
          modifier && styles[`mask--${modifier}`],
          withBackground && styles.withBackground // новий клас
        )}
      >
        {isVertical ? (
          // 🟩 Варіант у 2 лінії (логотип вгорі, рейтинг внизу)
          <>
            <div className={styles.tripAdvisorBlockRow}>
              <Image className={styles.icon} src={icon} alt={iconAlt} width={24} height={24} />
              <Image className={styles.logo} src={logo} alt={logoAlt} width={110} height={20} />
            </div>

            <div className={styles.ratingBlock}>
              <RatingCircles rating={rating} source={source} />
              <p className={styles.ratingInfo}>{rating.toFixed(1)} / 5.0</p>
            </div>
          </>
        ) : (
          // 🟦 Стандартний варіант (іконка + справа все інше)
          <>
            <Image className={styles.icon} src={icon} alt={iconAlt} width={46} height={46} />
            <div>
              <Image className={styles.logo} src={logo} alt={logoAlt} width={110} height={20} />
              <div className={styles.ratingBlock}>
                <RatingCircles rating={rating} source={source} />
                <p className={styles.ratingInfo}>{rating.toFixed(1)} / 5.0</p>
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};
