import { FC } from 'react';
import { LocationItem } from '@/components/common/TravelLocation/TravelLocation.types';
import styles from './Destination.module.scss';

type Props = {
  travelLocation: LocationItem[];
};

export const Destination: FC<Props> = ({ travelLocation }) => {
  return (
    <div className={styles.DestinationLocationPhotos}>
      {travelLocation.map((item) => (
        <div
          key={item.id}
          className={styles.DestinationLocationPhotosItem}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className={styles.yellowMask}>
            <div className={styles.DestinationLocationPhotosItem1Mask}>{item.tour}</div>
          </div>
          <div className={styles.titleMask}>
            <div className={styles.DestinationLocationPhotosItemTitle}>
              <div className={styles.DestinationLocationPhotosItemTitleTop}>{item.titleTop}</div>
              <div className={styles.DestinationLocationPhotosItemTitleBottom}>
                {item.titleBottom}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
