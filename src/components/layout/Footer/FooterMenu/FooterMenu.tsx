import React, { FC } from 'react';
import styles from './FooterMenu.module.scss';
import { ActiveLink } from '@/components/common/ActiveLink/ActiveLink';

type FooterMenuItem = {
  id: number;
  title: string;
  link: string;
};

type Props = {
  menu: FooterMenuItem[];
};

export const FooterMenu: FC<Props> = ({ menu }) => {
  return menu.map((menuItem) => {
    return (
      <div key={menuItem.id}>
        <ActiveLink
          href={menuItem.link}
          className={styles.footerContainerMenuItem}
          activeClassName={styles.selectedMenuItem}
        >
          {menuItem.title}
        </ActiveLink>
      </div>
    );
  });
};
