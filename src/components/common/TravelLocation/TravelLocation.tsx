import React, { FC } from 'react';
import styles from './TravelLocation.module.scss';
import Link from 'next/link';
import { DefaultTitleLink } from '@/components/common/DefaultTitleLink/DefaultTitleLink';
import { DefaultTitleName } from '@/components/common/DefaultTitleName/DefaultTitleName';

export const TravelLocation: FC = () => {
  return (
    <div className={styles.TravelLocationContainer}>
          <Link href={'/about'} className={styles.TravelLocationLink}>
            <DefaultTitleLink titleLinkText={'Journey TripNext'} />
          </Link>
          <DefaultTitleName titleName={'Trendy Travel Locations'} />
      </div>

  );
};
