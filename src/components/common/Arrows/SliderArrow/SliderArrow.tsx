import { FC } from 'react';
import styles from './SliderArrow.module.scss';
import clsx from 'clsx';

type Props = {
    arrowText: string;
    modifier?: 'PREV' | 'NEXT';
    onClick?: () => void;
    color?: 'green' | 'white';
};

export const SliderArrow: FC<Props> = ({ arrowText,  modifier, onClick, color='green' }) => {
    return (
        <div className={styles.sliderArrowWrapper} onClick={onClick}>
            <div
                className={clsx(styles.arrow, styles[`arrow--${color}`], modifier && styles[`prev--${modifier}`])}
            />
            <div className={clsx(styles.arrowText, styles[`title--${color}`], modifier && styles[`white--${modifier}`])}>{arrowText}</div>
        </div>
    );
};