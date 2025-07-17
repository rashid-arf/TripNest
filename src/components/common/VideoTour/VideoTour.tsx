import {FC} from "react";
import {DefaultDiscount} from "@/components/common/DefaultDiscount/DefaultDiscount";
import styles from "./VideoTour.module.scss";
import {DefaultTitleLink} from "@/components/common/DefaultTitleLink/DefaultTitleLink";
import Image from "next/image";
import videoTourMask from '@/assets/images/videoTourMask.png';


export const VideoTour: FC=() => {
    return (
        <div className={styles.videoTourContent}>

            <div className={`content-width ${styles.videoTourCard}`}>
                <div className={styles.videoTourCardLeft}>
                    <DefaultTitleLink titleLinkText={"Honeymoon Tour"} modifier={"videoTour"}/>
                    <DefaultDiscount titleName={"Discover Great Deal"} discount={"50% Off"}  modifier={"green-black"}/>
                </div>

                <div>
                    111111111
                </div>

            </div>

            <Image src={videoTourMask} alt="videoTourMask" width={820} height={292} className={styles.videoTourCardMask}/>
        </div>
    )
}