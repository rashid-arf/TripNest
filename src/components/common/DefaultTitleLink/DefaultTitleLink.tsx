import { FC } from 'react';
import styles from './DefaultTitleLink.module.scss';
import clsx from "clsx";

type Props = {
  titleLinkText: string;
  classNameMask?: string;
  className?: string;
};

export const DefaultTitleLink: FC<Props> = ({ titleLinkText, classNameMask= '', className='' }) => {
  return (
    <div className={clsx(styles.titleLink, classNameMask) }>
      <div className={clsx(styles.titleLinkButton, className)}>{titleLinkText}</div>
    </div>
  );
};
