'use client';
import styles from './Contact.module.scss';

import { FC } from 'react';

export const Contact: FC = () => {
  return (
    <div className={styles.Contact}>
      <div className={styles.ContactInfo}>
        <div className={styles.ContactInfoItem}></div>
      </div>
      <div></div>
    </div>
  );
};
