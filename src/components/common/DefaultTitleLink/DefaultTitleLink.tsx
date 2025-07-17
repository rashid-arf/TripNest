import { FC } from 'react';
import styles from './DefaultTitleLink.module.scss';
import clsx from "clsx";

type Props = {
  titleLinkText: string;
  modifier?: 'Jorney' | 'Package' | 'tourSelect' | 'videoTour';
};

export const DefaultTitleLink: FC<Props> = ({ titleLinkText, modifier }) => {
  return (
    <div className={clsx(styles.titleLink , modifier && styles[`mask--${modifier}`]) }>
      <div className={clsx(styles.titleLinkButton, modifier && styles[`title--${modifier}`])}>{titleLinkText}</div>
    </div>
  );
};
