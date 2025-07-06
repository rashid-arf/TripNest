import { FC } from 'react';
import styles from './PaintedLabel.module.scss';
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';

type Props = {
  text: string;
  icon?: StaticImageData | string;
  background: StaticImageData | string;
  className?: string;
  textClassName?: string;
  variant?: 'location' | 'discount';
};

export const PaintedLabel: FC<Props> = ({
  text,
  icon,
  background,
  className,
  textClassName,
  variant = 'location',
}) => {
  return (
    <div className={clsx(styles.wrapper, styles[variant], className)}>
      <Image
        src={background}
        alt="background"
        className={styles.background}
        width={145}
        height={32}
      />
      <div className={styles.content}>
        {icon && <Image src={icon} alt="icon" width={18} height={20} />}
        <span className={clsx(styles.text, textClassName)}>{text}</span>
      </div>
    </div>
  );
};
