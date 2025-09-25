'use client';

import styles from './Contact.module.scss';
import { FC } from 'react';
import Image from 'next/image';
import { DefaultButton } from '@/components/common/DefaultButton/DefaultButton';
import { Location } from '@/components/Contact/Location/Location';

const content = [
  {
    id: 1,
    Title: 'Phone',
    captionTop: '+990-737 621 432',
    captionBottom: '+990-737 621 432',
    Image: '/assets/images/phoneContact.png',
    alt: 'phoneContact',
  },
  {
    id: 2,
    Title: 'Email Now',
    captionTop: 'info@example.com',
    captionBottom: 'example@example.com',
    Image: '/assets/images/emailContact.png',
    alt: 'emailContact',
  },
  {
    id: 3,
    Title: 'Location',
    captionTop: '168/170, Avenue 01, Old York Drive Rich Mirpur DOHS, Bangladesh',
    Image: '/assets/images/locationContact.png',
    alt: 'locationContact',
  },
  {
    id: 4,
    Title: 'Opening Time',
    captionTop: '8:00Am - 10:Pm, Friday Close',
    Image: '/assets/images/locationContact.png',
    alt: 'timeContact',
  },
];

export const Contact: FC = () => {
  return (
    <>
      <div className={styles.Contact}>
        <div className={styles.ContactInfo}>
          {content.map((item) => (
            <div className={styles.ContactInfoItem} key={item.id}>
              <h3 className={styles.ContactInfoItemTitle}>{item.Title}</h3>
              <div className={styles.ContactInfoItemContent}>
                <Image src={item.Image} alt={item.alt} width={44} height={44} />
                <div className={styles.ContactInfoItemContentCaption}>
                  <p>{item.captionTop}</p>
                  <p>{item.captionBottom}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.ContactForm}>
          <h1 className={styles.ContactFormTitle}>Reach Us Anytime</h1>
          <div className={styles.ContactFormItem}>
            <p className={styles.ContactFormItemTitle}>Name*</p>
            <input placeholder={'Daniel Scoot'} className={styles.container} />
          </div>
          <div className={styles.ContactFormDoble}>
            <div className={styles.ContactFormItem}>
              <p className={styles.ContactFormItemTitle}>Phone*</p>
              <input placeholder={'Phone Number'} className={styles.container} />
            </div>
            <div className={styles.ContactFormItem}>
              <p className={styles.ContactFormItemTitle}>Email*</p>
              <input placeholder={'Email Us....'} className={styles.container} />
            </div>
          </div>
          <div className={styles.ContactFormItem}>
            <p className={styles.ContactFormItemTitle}>Write Your Massage*</p>
            <input className={styles.containerLast} />
          </div>
          <DefaultButton buttonText={'Submit Now'} className={styles.ContactFormButton} />
        </div>
      </div>
      <Location />
    </>
  );
};
