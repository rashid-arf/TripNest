import {FC} from "react";
import styles from "./AboutMain.module.scss";
import Image from "next/image";
import arrowAbout from '@/assets/images/arrow-about.png'
import Link from "next/link";

export const AboutMain: FC=()=> {

    return (
        <div className={styles.aboutMain}>
            <div className={styles.aboutMainTitle}>About</div>
            <div className={styles.aboutMainMenu}>
                <Link href={'/'} className={styles.aboutMainMenuLink}>
                    <p className={styles.aboutMainMenuItem}>Home</p>
                </Link>
                <Image src={arrowAbout} alt="arrow"/>
                <Link href={'/about'} className={styles.aboutMainMenuLink}>
                    <p className={styles.aboutMainMenuItem}>About</p>
                </Link>
            </div>
        </div>
    )
}