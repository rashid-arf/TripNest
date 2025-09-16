import { FC } from 'react';
import styles from './PhoneNumber.module.scss';

type Props = {
  phoneInfo: string;
  className?: string;
};

export const PhoneNumber: FC<Props> = ({ phoneInfo, className }) => {
  return (
    <p>
      <a className={`${styles.accountBlockPhoneNumber} ${className}`} href={`tel:${phoneInfo}`}>
        {phoneInfo}
      </a>
    </p>
  );
};
