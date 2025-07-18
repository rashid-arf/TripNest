import React, { FC } from "react";
import { DefaultDiscount } from "@/components/common/DefaultDiscount/DefaultDiscount";
import styles from "./VideoTour.module.scss";
import { DefaultTitleLink } from "@/components/common/DefaultTitleLink/DefaultTitleLink";
import Image from "next/image";
import videoTourMask from '@/assets/images/videoTourMask.png';
import ItemDote from '@/assets/images/ItemСolon.png';
import { DefaultButton } from "@/components/common/DefaultButton/DefaultButton";
import planeIcon from "@/assets/images/plane.png";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules';


export const VideoTour: FC = () => {
    const swiperProps = {
        loop: true,
        autoplay: {
            delay: 1000,
        },
        slidesPerView: 1,
        pagination: false,
        navigation: {
            nextEl: 'buttonNext',
            prevEl: 'buttonPrev',
        },
    };

    return (
        <div className={styles.videoTourContent}>
            <Swiper modules={[Navigation]} {...swiperProps} className={styles.videoTourSlide}>
                <SwiperSlide className={styles.videoTourSlideItem}>
                    <div className={styles.videoWrapper}>
                        <iframe
                            src="https://www.youtube.com/embed/Scxs7L0vhZ4?autoplay=1&mute=1&loop=1&playlist=Scxs7L0vhZ4"
                            title="YouTube video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>

                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.videoTourSlideItem}>
                    <div className={styles.videoWrapper}>
                        <iframe
                            src="https://www.youtube.com/embed/Scxs7L0vhZ4?autoplay=1&mute=1&loop=1&playlist=Scxs7L0vhZ4"
                            title="YouTube video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>

                    </div>
                </SwiperSlide>
                <div className={styles.buttonNext}></div>
                <div className={styles.buttonPrev}></div>
            </Swiper>
            <div className={`content-width ${styles.videoTourCard}`}>
                <div className={styles.videoTourCardLeft}>
                    <DefaultTitleLink titleLinkText={"Honeymoon Tour"} modifier={"videoTour"}/>
                    <DefaultDiscount titleName={"Discover Great Deal"} discount={"50% Off"} modifier={"green-black"}/>
                </div>
                <div className={styles.videoTourCardRight}>
                    <p className={styles.videoTourCarRightTitle}>Offer Will Be End:</p>
                    <div className={styles.videoTourCardRightTime}>
                        <div className={styles.videoTourCardRightTimeItem}>
                            <p>490</p>
                            <p className={styles.videoTourCardRightTimeItemDescription}>Days</p>
                        </div>
                        <Image src={ItemDote} alt="ItemСolon"/>
                        <div className={styles.videoTourCardRightTimeItem}>
                            <p>9</p>
                            <p className={styles.videoTourCardRightTimeItemDescription}>Hours</p>
                        </div>
                        <Image src={ItemDote} alt="ItemСolon"/>
                        <div className={styles.videoTourCardRightTimeItem}>
                            <p>36</p>
                            <p className={styles.videoTourCardRightTimeItemDescription}>Minutes</p>
                        </div>
                        <Image src={ItemDote} alt="ItemСolon"/>
                        <div className={styles.videoTourCardRightTimeItem}>
                            <p>32</p>
                            <p className={styles.videoTourCardRightTimeItemDescription}>Seconds</p>
                        </div>
                    </div>
                </div>
            </div>
            <DefaultButton
                buttonText={"View This Trip"}
                modifier={"videoTour"}
                iconRight={<Image src={planeIcon} alt="plane" width={18} height={20}/>}
            />
            <Image src={videoTourMask} alt="videoTourMask" width={820} height={292}
                   className={styles.videoTourCardMask}/>
        </div>
    );
};
