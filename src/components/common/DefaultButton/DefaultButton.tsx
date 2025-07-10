import {FC, ReactNode} from 'react';
import styles from './DefaultButton.module.scss';
import clsx from "clsx";


type Props = {
  buttonText: string;
  bgColor?: string;
  modifier?: 'footer' | "button" | "slider" | "tourSlider";
  iconRight?: ReactNode; // 👉 додаємо іконку праворуч
};

export const DefaultButton: FC<Props> = ({ buttonText, bgColor, modifier, iconRight }) => {
  return (
      <button
          style={{ backgroundColor: bgColor }}
          className={clsx(styles.button, modifier && styles[`button--${modifier}`])}
      >
        <span>{buttonText}</span>
        {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
      </button>
  );
};
