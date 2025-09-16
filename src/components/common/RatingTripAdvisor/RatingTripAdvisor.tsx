import styles from './RatingTripAdvisor.module.scss';
import { CSSProperties, FC } from 'react';
import clsx from 'clsx';

type Props = {
  rating: number;
  modifier?: 'Banner' | 'FindTravels';
  source: 'tripadvisor' | 'trustpilot';
};

export const RatingCircles: FC<Props> = ({ rating, modifier, source }) => {
  const maskClass = source === 'trustpilot' ? styles.trustpilotMask : styles.tripadvisorMask;

  const circleWidth = 16;
  const maxWidth = 5 * circleWidth;
  const ratingWidth = (rating / 5) * maxWidth;

  return (
    <div
      className={clsx(styles.ratingCircles, modifier && styles[`mask--${modifier}`], maskClass)}
      style={{ '--rating-width': `${ratingWidth}px` } as CSSProperties}
    />
  );
};
