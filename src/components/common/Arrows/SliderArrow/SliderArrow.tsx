import { FC } from 'react';
import styles from './SliderArrow.module.scss';
import clsx from 'clsx';

type Props = {
    arrowText: string;
    modifier?: 'PREV' | 'NEXT';
    onClick?: () => void;
};

export const SliderArrow: FC<Props> = ({ arrowText,  modifier, onClick }) => {
    return (
        <div className={styles.sliderArrowWrapper} onClick={onClick}>
            <div
                className={clsx(styles.arrow, modifier && styles[`prev--${modifier}`])}
            />
            <div className={styles.arrowText}>{arrowText}</div>
        </div>
    );
};