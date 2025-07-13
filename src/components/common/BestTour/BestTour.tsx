import {FC} from "react";
import styles from './BestTour.module.scss'
import bagIcon from '@/assets/images/bagIcon.png';
import dateIcon from '@/assets/images/dateIcon.png';
import guideIcon from '@/assets/images/guideIcon.png';
import starIcon from '@/assets/images/starIcon.png';
import videoIcon from '@/assets/images/video-play.svg';
import couple from '@/assets/images/bestTourRight.png';
import happyTravel from '@/assets/images/happyTravel.png';
import success from '@/assets/images/success.png';
import review from '@/assets/images/review.png';
import travelGuide from '@/assets/images/travelGuide.png';
import {DefaultTitleLink} from "@/components/common/DefaultTitleLink/DefaultTitleLink";
import {DefaultTitleName} from "@/components/common/DefaultTitleName/DefaultTitleName";
import {DefaultButton} from "@/components/common/DefaultButton/DefaultButton";
import Image from "next/image";
import {RatingCircles} from "@/components/common/RatingTripAdvisor/RatingTripAdvisor";

type Props = {
    tripAdvisorIcon: string;
    iconAlt: string;
    tripAdvisorLogo: string;
    tripAdvisorLogoAlt: string;
    tripAdvisorRating: number;
};

export const BestTour: FC<Props> = ({
                                        tripAdvisorIcon,
                                        iconAlt,
                                        tripAdvisorRating,
                                    }) => {
    return (
        <div className={`content-width ${styles.bestTourContainer}`}>
            <div>
                <div className={styles.bestTourContent}>
                    <div className={styles.bestTourContentLeft}>
                        <DefaultTitleLink titleLinkText={"About Us"}/>
                        <DefaultTitleName titleName={"We provide the best tour facilities."}/>
                        <p className={styles.bestTourContentLeftText}>Etiam ac tortor id purus commodo vulputate.
                            Vestibulum
                            porttitor erat felis and sed vehicula tortor malesuada gravida. Mauris volutpat enim quis
                            pulv
                            gont congue. Suspendisse ullamcorper.</p>
                        <div className={styles.bestTourContentLeftLabel}>
                            <DefaultButton buttonText={<span>Safety First<br/> Always</span>} modifier={"bestTourGreen"}
                                           iconLeft={<Image src={bagIcon} alt="bagIcon" width={56} height={56}/>}/>
                            <DefaultButton buttonText={<span>Trusted Travel<br/> Guide</span>}
                                           modifier={"bestTourYellow"}
                                           iconLeft={<Image src={guideIcon} alt="guideIcon" width={56} height={56}/>}/>
                            <DefaultButton buttonText={<span>Expertise And<br/> Experience</span>}
                                           modifier={"bestTourYellow"}
                                           iconLeft={<Image src={starIcon} alt="starIcon" width={56} height={56}/>}/>
                            <DefaultButton buttonText={<span>Time and Stress<br/>Savings</span>}
                                           modifier={"bestTourGreen"}
                                           iconLeft={<Image src={dateIcon} alt="dateIcon" width={56} height={56}/>}/>
                        </div>
                        <div className={styles.bestTourContentLeftLink}>
                            <DefaultButton buttonText={"Find Out More"}/>
                            <DefaultButton buttonText={<span>Watch Tour</span>} modifier={"bestTourVideo"}
                                           iconLeft={<Image src={videoIcon} alt="videoIcon" width={51} height={51}/>}/>
                        </div>
                    </div>
                    <div>
                        <div className={styles.bestTourContentRight}>
                            <Image src={couple} alt={'couple'}/>
                            <div className={styles.bestTourContentRightLabel}>
                                <DefaultButton buttonText={<span>Years of<br/>experience</span>}
                                               modifier={"bestTourExperience"}
                                               iconLeft={<span className={styles.buttonNumber}>05</span>}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bestTourBottom}>
                    <DefaultButton
                        buttonText={<span>OK+<br/><span className={styles.buttonTextSmall}>Happy Traveler</span></span>}
                        modifier={"bestTourVideo"}
                        iconLeft={<Image src={happyTravel} alt="happyTravel" width={50} height={50}/>}/>
                    <hr className={styles.bestTourBottomVertical}/>
                    <DefaultButton
                        buttonText={<span>OK+<br/><span className={styles.buttonTextSmall}>Tours Success</span></span>}
                        modifier={"bestTourVideo"}
                        iconLeft={<Image src={success} alt="success" width={50} height={50}/>}/>
                    <hr className={styles.bestTourBottomVertical}/>
                    <DefaultButton buttonText={<span>0%<br/><span
                        className={styles.buttonTextSmall}>Positives Review</span></span>} modifier={"bestTourVideo"}
                                   iconLeft={<Image src={review} alt="review" width={50} height={50}/>}/>
                    <hr className={styles.bestTourBottomVertical}/>
                    <DefaultButton
                        buttonText={<span>0<br/><span className={styles.buttonTextSmall}>Travel Guide</span></span>}
                        modifier={"bestTourVideo"}
                        iconLeft={<Image src={travelGuide} alt="travelGuide" width={50} height={50}/>}/>
                </div>
                <div className={styles.bestTourBottomCaption}>
                    <p className={styles.bestTourBottomCaptionTitle}>Excellent!</p>
                    <div className={styles.bestTourRating}>
                        <RatingCircles rating={tripAdvisorRating}/>
                    </div>
                    <div
                        className={styles.bestTourRatingInfo}> {typeof tripAdvisorRating === 'number' ? tripAdvisorRating.toFixed(1) : '5.0'} Rating
                        out of <span className={styles.ratingNumber}>5.0</span> based on <span
                            className={styles.ratingReviewsNumber}>245354 reviews</span>
                    </div>
                    <div className={styles.bestTourAdvisorBlock}>
                        <Image className={styles.icon} src={tripAdvisorIcon} alt={iconAlt} width={24} height={24}/>
                        <div
                            className={styles.bestTourAdvisorBlockImage}
                        />

                    </div>

                    <div className={styles.planeMask}/>
                    <div className={styles.planetLeft}/>
                    <div className={styles.planetRight}/>

                </div>
            </div>

        </div>
    )
}