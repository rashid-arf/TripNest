import { FC } from 'react';
import styles from './AboutMain.module.scss';
import Image from 'next/image';
import arrowAbout from '@/assets/images/arrow-about.png';
import Link from 'next/link';

type Props = {
  title: string;
  pageTitle: string;
};

export const AboutMain: FC<Props> = ({ title, pageTitle }) => {
  return (
    <div className={styles.aboutMain}>
      <div className={styles.aboutMainTitle}>{title}</div>
      <div className={styles.aboutMainMenu}>
        <Link href={'/'} className={styles.aboutMainMenuLink}>
          <p className={styles.aboutMainMenuItem}>Home</p>
        </Link>
        <Image src={arrowAbout} alt="arrow" />
        <p className={styles.aboutMainMenuLink}>{pageTitle}</p>
      </div>
    </div>
  );
};
