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
      <div className={styles.FaqsQuestions}>
        <h2 className={styles.FaqsQuestionsTitle}>General</h2>
        <div className={styles.FaqsQuestionsItem}>
          <h3 className={styles.FaqsQuestionsItemTitle}>
            01. How do I book a trip on your website?
          </h3>
          <p>-</p>
        </div>
        <hr />
        <p className={styles.FaqsQuestionsText}>
          Aptent taciti sociosqu ad litora torquent per conubia nostra, per inci only Integer purus
          onthis felis non aliquam.Mauris nec just vitae ann auctor tol euismod sit amet non ipsul
          growing this
        </p>
        <div className={styles.FaqsQuestionsItem}>
          <h3 className={styles.FaqsQuestionsItemTitle}>02. What payment methods do you accept?</h3>
          <p>+</p>
        </div>
        <hr />
        <div className={styles.FaqsQuestionsItem}>
          <h3 className={styles.FaqsQuestionsItemTitle}>
            03. Can I make changes to my reservation after booking?
          </h3>
          <p>+</p>
        </div>
        <hr />
        <div className={styles.FaqsQuestionsItem}>
          <h3 className={styles.FaqsQuestionsItemTitle}>04. What is your cancellation policy?</h3>
          <p>+</p>
        </div>
        <hr />
        <div className={styles.FaqsQuestionsItem}>
          <h3 className={styles.FaqsQuestionsItemTitle}>
            05. Do You Offer Group Booking Discounts?
          </h3>
          <p>+</p>
        </div>
        <hr />
      </div>
    </div>
  );
};
