import {FC} from "react";
import styles from './BestTour.module.scss'
import bagIcon from '@/assets/images/bagIcon.png';

import {DefaultTitleLink} from "@/components/common/DefaultTitleLink/DefaultTitleLink";
import {DefaultTitleName} from "@/components/common/DefaultTitleName/DefaultTitleName";
import {DefaultButton} from "@/components/common/DefaultButton/DefaultButton";
import Image from "next/image";

export const BestTour: FC = () => {
    return (
        <div className={`content-width ${styles.bestTourContainer}`}>
            <div className={styles.bestTourContent}>
                <div className={styles.bestTourContentLeft}>
                    <DefaultTitleLink titleLinkText={"About Us"}/>
                    <DefaultTitleName titleName={"We provide the best tour facilities."}/>
                    <p className={styles.bestTourContentLeftText}>Etiam ac tortor id purus commodo vulputate. Vestibulum
                        porttitor erat felis and sed vehicula tortor malesuada gravida. Mauris volutpat enim quis pulv
                        gont congue. Suspendisse ullamcorper.</p>
                    <div>
                        <DefaultButton buttonText={<span>Safety First<br/> Always</span>} modifier={"bestTourGreen"}
                                       iconLeft={<Image src={bagIcon} alt="bagIcon" width={56} height={56}/>}/>
                    </div>
                </div>
                <div>

                </div>
            </div>


            <div className={styles.planeMask}/>
            <div className={styles.planetLeft}/>
            <div className={styles.planetRight}/>
        </div>

    )
}