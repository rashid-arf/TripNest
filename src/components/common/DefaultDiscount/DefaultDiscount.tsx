import React, { FC } from 'react';
import styles from './DefaultDiscount.module.scss';
import clsx from 'clsx';

type Props = {
  titleName: string;
  discount: string;
  modifier?: 'yellow-white' | 'green-black';
};

export const DefaultDiscount: FC<Props> = ({ titleName, modifier, discount }) => {
  return (
    <div
      className={clsx(styles.defaultDiscount, modifier && styles[`defaultDiscount--${modifier}`])}
    >
      <p
        className={clsx(
          styles.defaultDiscountNumber,
          modifier && styles[`defaultDiscountNumber--${modifier}`]
        )}
      >
        {discount}
      </p>
      <p
        className={clsx(
          styles.defaultDiscountTitle,
          modifier && styles[`defaultDiscountTitle--${modifier}`]
        )}
      >
        {titleName}
      </p>
    </div>
  );
};
