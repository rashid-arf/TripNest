'use client';
import React, { FC, useEffect, useState } from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import logo from '@/assets/images/footer-logo.svg';
import phone from '@/assets/images/phone-footer.svg';
import mail from '@/assets/images/mail-footer.svg';
import map from '@/assets/images/location-footer.svg';
import visa from '@/assets/images/visa.svg';
import stripe from '@/assets/images/stripe.svg';
import paypal from '@/assets/images/paypal.svg';
import woo from '@/assets/images/woo.svg';
import skrill from '@/assets/images/skrill.svg';
import overlay from '@/assets/images/Overlay.svg';
import Link from 'next/link';
import { SocialButton } from '@/components/common/SocialButton/SocialButton';
import { PhoneNumber } from '@/components/common/PhoneNumber/PhoneNumber';
import { FooterMenu } from '@/components/layout/Footer/FooterMenu/FooterMenu';
import { DefaultButton } from '@/components/common/DefaultButton/DefaultButton';
import {HeaderMenuService} from "@/components/common/services/headerMenu.services";


export const Footer: FC = () => {
  const [footerMenu, setFooterMenu] = useState(null);

  useEffect(() => {
    (async () => {
      const menuFromResponse = await HeaderMenuService.getMenu();

      setFooterMenu(menuFromResponse);
    })();
  }, []);

  return (
    <footer className={styles.footerBg}>
      <div className="content-width">
        <div className={styles.footerContainer}>
          <div className={styles.footerContainerContent}>
            <div className={styles.footerContainerLogo}>
              <Link href={'/'}>
                <Image src={logo} alt="footer-logo" />
              </Link>
              <p className={styles.footerContainerHeading}>Want to Take Tour Packages?</p>
              <Link href={'/book-trip'} className={styles.buttonLink}>
                <DefaultButton buttonText={'Book a Trip'} className={styles.footerButton}/>
              </Link>
            </div>
            <div className={styles.footerContainerMenu}>
              <p className={styles.footerContainerMenuTitle}>Quick Link</p>
              {!footerMenu && <h1>Loading...</h1>}
              {footerMenu && <FooterMenu menu={footerMenu} />}
            </div>
            <div className={styles.footerContainerAddress}>
              <div className={styles.footerContainerAddressRow}>
                <div className={styles.footerContainerAddressIcons}>
                  <Image src={phone} alt="phone-footer" />
                  <p className={styles.footerContainerMenuTitle}>More Inquiry</p>
                </div>
                <PhoneNumber phoneInfo={'+990-737 621 432'} className={styles.footerPhone} />
              </div>
              <div className={styles.footerContainerAddressRow}>
                <div className={styles.footerContainerAddressIcons}>
                  <Image src={mail} alt="mail-footer" />
                  <p className={styles.footerContainerMenuTitle}>Send Mail</p>
                </div>
                <a className={styles.footerLink} href="mailto:info@example.com">
                  info@example.com
                </a>
              </div>
              <div className={styles.footerContainerAddressRow}>
                <div className={styles.footerContainerAddressIcons}>
                  <Image src={map} alt="location-footer" />
                  <p className={styles.footerContainerMenuTitle}>Address</p>
                </div>
                <p>House 168/170, Avenue 01, Mirpur DOHS, Dhaka Bangladesh</p>
              </div>
            </div>
            <div className={styles.footerContainerCards}>
              <div className={styles.footerContainerAddressIcons}>
                <p className={styles.footerContainerMenuTitle}>We Are Here</p>
              </div>
              <p>
                Quisque purus augue, facilisis andi neque idont accumsan fringilla massa. Vivamusol
                id nibhom condimentum.
              </p>
              <div className={styles.footerContainerAddressIcons}>
                <p className={styles.footerContainerMenuTitle}>Payment Partner</p>
              </div>
              <div className={styles.footerContainerCardsIcons}>
                <Image src={visa} alt="visa" className={styles.cardsItem} />
                <Image src={stripe} alt="stripe" className={styles.cardsItem} />
                <Image src={paypal} alt="paypal" className={styles.cardsItem} />
                <Image src={woo} alt="woo" className={styles.cardsItem} />
                <Image src={skrill} alt="skrill" className={styles.cardsItem} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerCopyright}>
          <div className={styles.footerCopyrightLeftPart}>
            <div className={styles.footerCopyrightSocial}>
              {' '}
              <SocialButton
                iconType="facebook"
                link="https://www.facebook.com/"
                className={styles.footerSocial}
                classNameIcon={styles.footerSocialIcon}
              />
              <SocialButton
                iconType="twitter"
                link="https://www.x.com/"
                className={styles.footerSocial}
                classNameIcon={styles.footerSocialIcon}
              />
              <SocialButton
                iconType="linkedin"
                link="https://www.linkedin.com/"
                className={styles.footerSocial}
                classNameIcon={styles.footerSocialIcon}
              />
              <SocialButton
                iconType="instagram"
                link="https://www.instagram.com/"
                className={styles.footerSocial}
                classNameIcon={styles.footerSocialIcon}
              />
            </div>
            <p className={styles.footerCopyrightContent}>
              &copy; Copyright 2024 BlackRise Theme | Design By{' '}
              <a className={styles.footerCopyrightItemsMail} href="mailto:info@Shawon3.com">
                @Shawon3
              </a>
            </p>
          </div>
          <div className={styles.footerCopyrightItems}>
            <Link href={'/blackRise'} className={styles.footerLink}>
              <p className={styles.footerCopyrightItemsActive}>BlackRise</p>
            </Link>
            <Link href={'/privacy-policy'} className={styles.footerLink}>
              <p className={styles.footerCopyrightItemsActive}>Privacy Policy</p>
            </Link>
            <Image src={overlay} alt="overlay" />
            <Link href={'/terms-condition'} className={styles.footerLink}>
              <p className={styles.footerCopyrightItemsActive}>Terms & Condition</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
