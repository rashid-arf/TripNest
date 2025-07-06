import { FC } from 'react';
import { SocialButtonTypes } from '@/components/common/SocialButton/SocialButton.types';
import styles from './SocialButton.module.scss';

type Props = {
  iconType: SocialButtonTypes;
  link: string;
  className?: string;
  classNameIcon?: string;
};

export const SocialButton: FC<Props> = ({ iconType, link, className, classNameIcon }) => {
  return (
    <a href={link} className={`${styles.link} ${className}`}>
      <div className={`${styles.icon} ${iconType} ${classNameIcon}`} />
    </a>
  );
};
