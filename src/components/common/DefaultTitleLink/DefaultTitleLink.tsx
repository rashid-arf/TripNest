import { FC } from 'react';
import styles from './DefaultTitleLink.module.scss';

type Props = {
  titleLinkText: string;
};

export const DefaultTitleLink: FC<Props> = ({ titleLinkText }) => {
  return (
    <div className={styles.titleLink}>
      <div className={styles.titleLinkButton}>{titleLinkText}</div>
    </div>
  );
};
