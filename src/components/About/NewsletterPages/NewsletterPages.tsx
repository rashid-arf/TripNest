'use client';
import { FC, useEffect, useState } from 'react';
import styles from './NewsletterPages.module.scss';
import Image from 'next/image';
import arrow from '@/assets/images/newsletter-arrow.svg';
import leftBanner from '@/assets/images/newsletter-left-banner.svg';
import rightBanner from '@/assets/images/newsletter-right-banner.svg';

export const NewsletterPages: FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (email.length <= 3 || emailRegex.test(email) === false) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }, [email]);

  return (
    <div className={styles.newsletterBackground}>
      <div className={styles.newsletterContainer}>
        <Image
          src={leftBanner}
          alt={'leftBanner'}
          className={styles.newsletterBackgroundLeftBanner}
        />
        <div className={styles.newsletterContent}>
          <p className={styles.newsletterContentTitle}>Join The Newsletter</p>
          <p className={styles.newsletterContentSubtitle}>To receive our best monthly deals</p>
          <div className={styles.newsletterContentEmailForm}>
            <input
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(event) => {
                const value = event.target.value;
                setEmail(value);
              }}
              className={styles.newsletterContentEmailFormInput}
            />
            {emailError && (
              <div className={styles.errorMessage}>Please enter a valid email address.</div>
            )}
            <button
              className={styles.newsletterContentEmailFormArrow}
              onClick={() => {
                if (!emailError) {
                  alert(`Email: ${email}`);
                }
              }}
            >
              <Image src={arrow} alt={'right-arrow'} />
            </button>
          </div>
        </div>
        <Image
          src={rightBanner}
          alt={'rightBanner'}
          className={styles.newsletterBackgroundRightBanner}
        />
      </div>
    </div>
  );
};
