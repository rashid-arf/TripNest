import { FC } from 'react';
import styles from './DefaultButton.module.scss';
import clsx from "clsx";

type Props = {
  buttonText: string;
  bgColor?: string;
  modifier?: 'footer' | "button" | "slider";
};

export const DefaultButton: FC<Props> = ({ buttonText, bgColor, modifier }) => {
  return (
    <button style={{ backgroundColor: bgColor }} className={clsx(styles.button, modifier && styles[`button--${modifier}`])}>
      {buttonText}
    </button>
  );
};
