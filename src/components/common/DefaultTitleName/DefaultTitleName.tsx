import { FC } from 'react';
import styles from './DefaultTitleName.module.scss';
import clsx from "clsx";

type Props = {
  titleName: string;
  modifier?: 'white' | 'black' | 'whiteZeroMargin';
};

export const DefaultTitleName: FC<Props> = ({ titleName, modifier }) => {
  return <div className={clsx(styles.titleName, modifier && styles[`title--${modifier}`]) }>{titleName}</div>;
};
