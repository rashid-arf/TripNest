import { FC } from 'react';
import styles from './Faqs.module.scss';
import Image from 'next/image';
import MaskBanner from '@/assets/images/MaskBanner.png';
import { DefaultButton } from '@/components/common/DefaultButton/DefaultButton';

export const Faqs: FC = () => {
  return (
    <div className={styles.Faqs}>
      <div className={styles.FaqsBannerCard}>
        <div className={styles.FaqsBannerCardContent}>
          <div>
            <p className={styles.FaqsBannerCardContentTitle}>Savings worldwide</p>
            <p className={styles.FaqsBannerCardContentDiscount}>50% Off</p>
            <p className={styles.FaqsBannerCardContentText}> Your First Book</p>
          </div>
          <DefaultButton buttonText={'Book Now'} className={styles.FaqsBannerCardContentButton} />
        </div>
        <Image src={MaskBanner} alt="mask-banner" className={styles.FaqsBannerCardMask} />
      </div>
    </div>
  );
};
