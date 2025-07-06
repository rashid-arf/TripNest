import styles from './RatingTripAdvisor.module.scss';
import { CSSProperties, FC } from 'react';

type Props = {
  rating: number;
};

export const RatingCircles: FC<Props> = ({ rating }) => {
  const circleWidth = 16;
  const maxWidth = 5 * circleWidth;
  const ratingWidth = (rating / 5) * maxWidth;

  return (
    <div
      className={styles.ratingCircles}
      style={{ '--rating-width': `${ratingWidth}px` } as CSSProperties}
    />
  );
};
