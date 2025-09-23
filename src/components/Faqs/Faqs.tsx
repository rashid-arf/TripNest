'use client';

import { FC, useState } from 'react';
import styles from './Faqs.module.scss';
import Image from 'next/image';
import MaskBanner from '@/assets/images/MaskBanner.png';
import { DefaultButton } from '@/components/common/DefaultButton/DefaultButton';
import titleMask from '@/assets/images/titleMask.png';

const faqs = [
  {
    id: 1,
    question: '01. How do I book a trip on your website?',
    answer:
      'Aptent taciti sociosqu ad litora torquent per conubia nostra, per inci only Integer purus onthis felis non aliquam...',
  },
  {
    id: 2,
    question: '02. What payment methods do you accept?',
    answer: 'We accept Visa, MasterCard, PayPal and other common payment methods.',
  },
  {
    id: 3,
    question: '03. Can I make changes to my reservation after booking?',
    answer: 'Yes, you can change your reservation by contacting support at least 24h before.',
  },
  {
    id: 4,
    question: '04. What is your cancellation policy?',
    answer: 'Free cancellation up to 48h before departure.',
  },
];

const tips = [
  {
    id: 1,
    question: '01. What Is Your Payment Schedule And Process?',
    answer:
      'Aptent taciti sociosqu ad litora torquent per conubia nostra, per inci only Integer purus onthis felis non aliquam. Mauris nec just vitae ann auctor tol euismod sit amet non ipsul growing this',
  },
  {
    id: 2,
    question: '02. Are There Any Additional Fees Or Surcharges?',
    answer: 'We accept Visa, MasterCard, PayPal and other common payment methods.',
  },
  {
    id: 3,
    question: '03. Can I Transfer My Reservation To Another Person?',
    answer: 'Yes, you can change your reservation by contacting support at least 24h before.',
  },
  {
    id: 4,
    question: '04. Can I Request A Private Tour For My Group?',
    answer: 'Free cancellation up to 48h before departure.',
  },
  {
    id: 5,
    question: '05. Do You Offer Special Rates For Group Bookings?',
    answer: 'Free cancellation up to 48h before departure.',
  },
];

export const Faqs: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <div className={styles.Faqs}>
      {/* Банер */}
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

      {/* Питання */}
      <div className={styles.FaqsQuestions}>
        <div className={styles.FaqsQuestionsTop}>
          <h2 className={styles.FaqsQuestionsTopTitle}>General</h2>
          <Image src={titleMask} alt="title-mask" />
        </div>
        {faqs.map((faq) => (
          <div key={faq.id}>
            <div
              className={styles.FaqsQuestionsItem}
              onClick={() => toggleFaq(faq.id)}
              style={{ cursor: 'pointer' }}
            >
              <h3 className={styles.FaqsQuestionsItemTitle}>{faq.question}</h3>
              <p>{activeIndex === faq.id ? '-' : '+'}</p>
            </div>
            {activeIndex === faq.id && (
              <p
                className={`${styles.FaqsQuestionsText} ${
                  activeIndex === faq.id ? styles.isOpen : ''
                }`}
              >
                {faq.answer}
              </p>
            )}
            <hr />
          </div>
        ))}
        <div className={styles.FaqsQuestionsTopTips}>
          <h2 className={styles.FaqsQuestionsTopTitle}>Travel Tips</h2>
          <Image src={titleMask} alt="title-mask" />
        </div>
        {tips.map((faq) => (
          <div key={faq.id}>
            <div
              className={styles.FaqsQuestionsItem}
              onClick={() => toggleFaq(faq.id)}
              style={{ cursor: 'pointer' }}
            >
              <h3 className={styles.FaqsQuestionsItemTitle}>{faq.question}</h3>
              <p>{activeIndex === faq.id ? '-' : '+'}</p>
            </div>
            {activeIndex === faq.id && (
              <p
                className={`${styles.FaqsQuestionsText} ${
                  activeIndex === faq.id ? styles.isOpen : ''
                }`}
              >
                {faq.answer}
              </p>
            )}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
