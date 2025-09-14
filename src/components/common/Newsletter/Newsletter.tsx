import React, {FC, useEffect, useState} from "react";
import styles from './Newsletter.module.scss'
import PhoneIcon from '@/assets/images/newsletter-phone.png';
import MailIcon from '@/assets/images/newsletter-mail.png';
import {DefaultTitleName} from "@/components/common/DefaultTitleName/DefaultTitleName";
import {DefaultButton} from "@/components/common/DefaultButton/DefaultButton";
import Image from "next/image";
import {PhoneNumber} from "@/components/common/PhoneNumber/PhoneNumber";
import arrow from '@/assets/images/newsletter-arrow.svg';
import newsletterMask1 from '@/assets/images/newsletter-mask1.png';
import newsletterMask2 from '@/assets/images/newsletter-mask2.png';


export const Newsletter: FC = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    useEffect(() => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        setEmailError(email.length <= 3 || !emailRegex.test(email));
    }, [email]);

    return (
        <div className={styles.newsletterContainer}>
            <Image src={newsletterMask1} alt="newsletterMask1" className={styles.newsletterContentMask1}/>
            <div className={styles.newsletterItem}>
                <DefaultButton
                    buttonText={
                        <span>
      <span className={styles.newsletterItemTitle}>More Inquiry</span><br/>
                            <PhoneNumber phoneInfo={'+990-737 621 432'} className={styles.newsletterItemDescription}/>
    </span>}
                    className={styles.newsletterButton}
                    iconLeft={<Image src={PhoneIcon} alt="Phone" width={70} height={70}/>}
                />
            </div>
            <div className={styles.newsletterContent}>
                <DefaultTitleName titleName={"Join The NewsletterPages"} modifier={"white"}/>
                <p className={styles.newsletterContentSubtitle}>To receive our best monthly deals</p>
                <div className={styles.newsletterContentEmailForm}>
                    <input
                        type="email"
                        placeholder="Enter your email address..."
                        value={email}
                        onChange={(event) => {
                            const value = event.target.value;
                            setEmail(value);
                        }}
                        className={styles.newsletterContentEmailFormInput}
                    />
                    {emailError && (
                        <div className={styles.newsletterEmailErrorMessage}>Please enter a valid email address.</div>
                    )}
                    <button
                        className={styles.newsletterContentEmailFormArrow}
                        onClick={() => {
                            if (!emailError) {
                                alert(`Email: ${email}`);
                            }
                        }}
                    >
                        <Image src={arrow} alt={'right-arrow'}/>
                    </button>
                </div>
            </div>
            <div className={styles.newsletterItem}>
                <DefaultButton
                    buttonText={
                        <span>
      <span className={styles.newsletterMailTitle}>Send Mail</span><br/>
      <a className={styles.newsletterMailLink} href="mailto:info@example.com">
                  info@example.com
                </a>
    </span>}
                    className={styles.newsletterButton}
                    iconLeft={<Image src={MailIcon} alt="MailIcon" width={70} height={70}/>}
                />
            </div>
            <Image src={newsletterMask2} alt="newsletterMask2" className={styles.newsletterContentMask2}/>
        </div>


    )
}