import {FC, ReactNode} from 'react';
import styles from './DefaultButton.module.scss';
import clsx from "clsx";


type Props = {
    buttonText?: ReactNode;
    bgColor?: string;
    modifier?: 'footer' | "button" | "slider" | "tourSlider" | "bestTourGreen" | "bestTourYellow" | "bestTourVideo" | "bestTourExperience" | "activeTourList" | "activeTourTab" | "whoWeAreLabel" | "tourSelect";
    iconRight?: ReactNode; // 👉 додаємо іконку праворуч
    iconLeft?: ReactNode;
    isActive?: boolean;
    onClick?: () => void;
};

export const DefaultButton: FC<Props> = ({buttonText, bgColor, modifier, iconRight, iconLeft,  isActive, onClick}) => {
    return (
        <button
            style={{backgroundColor: bgColor}}
            className={clsx(
                styles.button,
                modifier && styles[`button--${modifier}`],
                isActive && styles['button--active'] // <-- додай клас для активної кнопки
            )}
            onClick={onClick}
        >
            {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
            <span>{buttonText}</span>
            {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
        </button>
    );
};
