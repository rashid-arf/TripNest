import {FC} from "react";
import styles from "./TourPageMain.module.scss";
import Image from "next/image";
import arrowAbout from '@/assets/images/arrow-about.png'
import Link from "next/link";

export const TourPageMain: FC=()=> {

    return (
        <div className={styles.tourMain}>
            <div className={styles.tourMainTitle}>Package Grid</div>
            <div className={styles.tourMainMenu}>
                <Link href={'/'} className={styles.tourMainMenuLink}>
                    <p className={styles.tourMainMenuItem}>Home</p>
                </Link>
                <Image src={arrowAbout} alt="arrow"/>
                <Link href={'/tour'} className={styles.tourMainMenuLink}>
                    <p className={styles.tourMainMenuItem}>Package Grid</p>
                </Link>
            </div>
        </div>
    )
}