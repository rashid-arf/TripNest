import { FC } from 'react';
import styles from './Location.module.scss';

export const Location: FC = () => {
  return (
    <iframe
      className={styles.location}
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14561.21767599939!2d90.37924639899913!3d23.83497603648296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s168%2F170%2C%20Avenue%2001%2C%20Old%20York%20Drive%20Rich%20Mirpur%20DOHS%2C%20Bangladesh!5e1!3m2!1sru!2sua!4v1758831053489!5m2!1sru!2sua"
      width="800"
      height="600"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};
