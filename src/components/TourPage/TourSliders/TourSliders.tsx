import styles from './TourSliders.module.scss'
import arrowRight from '@/assets/images/arrowRight.png';
import { FC } from 'react';
import Image from 'next/image';


export const TourSliders: FC = () => {
  return (
    <div className={styles.TourSliders}>
      <div className={styles.TourSlidersItem}>01</div>
      <div className={styles.TourSlidersItem}>02</div>
      <div className={styles.TourSlidersArrow}>
       <Image src={arrowRight} alt='arrowRight'/>
      </div>
    </div>
  );
}