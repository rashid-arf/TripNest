import { FC } from 'react';
import styles from './DefaultTitleName.module.scss';

type Props = {
  titleName: string;
};

export const DefaultTitleName: FC<Props> = ({ titleName }) => {
  return <div className={styles.titleName}>{titleName}</div>;
};
