import { CSSProperties, FC } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import accountProfile from '@/assets/images/acount-profile-black.svg';
import itemIcons from '@/assets/images/item-icons-black.svg';
import phoneIcon from '@/assets/images/phone-icon.svg';
import divider from '@/assets/images/vertical-divider.svg';
import styles from './TopMenuPages.module.scss';
import Link from 'next/link';
import { PhoneNumber } from '@/components/common/PhoneNumber/PhoneNumber';
import { ActiveLink } from '@/components/common/ActiveLink/ActiveLink';

type MenuItem = {
  id: number;
  title: string;
  link: string;
  image?: string;
  alt: string;
};

type Props = {
  menu: MenuItem[];
};

export const TopMenuPages: FC<Props> = ({ menu }) => {
  return (
    <header>
      <div className={styles.topMenuWidth}>
        <div className={styles.topMenu}>
          <div>
            <Link href={'/'}>
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div className={styles.menu}>
            {menu.map((menuItem) => {
              return (
                <div key={menuItem.id}>
                  <ActiveLink href={menuItem.link} activeClassName={styles.menuItemPlusActive}>
                    <div className={styles.menuItemPlus}>
                      <div className={styles.menuItemSelect}>{menuItem.title}</div>
                      <div>
                        {menuItem.image && (
                          <div
                            className={styles.menuItemPlusImage}
                            style={
                              {
                                '--menu-icon': `url(${menuItem.image})`,
                              } as CSSProperties
                            }
                          />
                        )}
                      </div>
                    </div>
                  </ActiveLink>
                </div>
              );
            })}
          </div>
          <div className={styles.accountBlock}>
            <div className={styles.accountBlockIcons}>
              <Image src={accountProfile} alt="acount-profile" />
              <Image src={itemIcons} alt="item-icons" />
            </div>
            <div className={styles.accountBlockPhone}>
              <Image src={phoneIcon} alt="phone-icon" />
              <Image src={divider} alt="vertical-divider" />
              <div>
                <p className={styles.accountBlockPhoneTitle}>To More Inquiry</p>
                {/*<PhoneNumber phoneInfo={'+990-737 621 432'} />*/}
                <PhoneNumber phoneInfo={'+990-737 621 432'} className={styles.TopMenuPagesPhone} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
