import {FC, ReactNode} from 'react';
import styles from './DefaultButton.module.scss';
import clsx from "clsx";


type Props = {
    buttonText?: ReactNode;
    bgColor?: string;
    modifier?: 'footer' | "button" | "slider" | "tourSlider" | "bestTourGreen";
    iconRight?: ReactNode; // 👉 додаємо іконку праворуч
    iconLeft?: ReactNode;
};

export const DefaultButton: FC<Props> = ({buttonText, bgColor, modifier, iconRight, iconLeft}) => {
    return (
        <button
            style={{backgroundColor: bgColor}}
            className={clsx(styles.button, modifier && styles[`button--${modifier}`])}
        >
            {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
            <span>{buttonText}</span>
            {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
        </button>
    );
};
