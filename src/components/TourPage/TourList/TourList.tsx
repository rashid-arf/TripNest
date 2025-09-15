'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/GlobalRedux/store';
import { TourPageCard } from '@/components/TourPage/TourPageCard/TourPageCard';
import { TourItem } from '@/GlobalRedux/features/tour/tourItemTypes';
import styles from './TourList.module.scss';

export const TourList = () => {
  const tours = useSelector((state: RootState) => state.tour.tours);

  if (!tours || tours.length === 0) {
    return <div>Loading tours...</div>;
  }

  return (
          <div className={styles.tourListWrapper}>
        {tours.map((tour: TourItem) => (
          <TourPageCard key={tour.id} tour={{
            ...tour, location: Array.isArray(tour.location) ? tour.location.join(", ") : tour.location,
          }} />
        ))}
      </div>
  )
    ;
};

