import { CSSProperties, FC } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/footer-logo.svg';
import accountProfile from '@/assets/images/acount-profile.svg';
import itemIcons from '@/assets/images/item-icons.svg';
import styles from './TopMenu.module.scss';
import Link from 'next/link';
import { ActiveLink } from '@/components/common/ActiveLink/ActiveLink';
import {DefaultButton} from "@/components/common/DefaultButton/DefaultButton";

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

export const TopMenu: FC<Props> = ({ menu }) => {
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
                                                        style={{ '--menu-icon': `url(${menuItem.image})` } as CSSProperties}
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
                       <Link href={'/book-trip'} className={styles.buttonLink}>
                           <DefaultButton buttonText={'Book А Trip'}  modifier="button"/>
                       </Link>


                    </div>
                </div>
            </div>
        </header>
    );
};
