import React, { FC} from 'react';
import styles from './TravelLocation.module.scss';
import Link from 'next/link';
import { DefaultTitleLink } from '@/components/common/DefaultTitleLink/DefaultTitleLink';
import { DefaultTitleName } from '@/components/common/DefaultTitleName/DefaultTitleName';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {DefaultButton} from "@/components/common/DefaultButton/DefaultButton";

type LocationItem = {
    id: number;
    titleTop: string;
    titleBottom: string;
    tour: string;
    link: string;
    image: string;
    alt: string;
}

type Props = {
    travelLocation: LocationItem[];
}


export const TravelLocation: FC <Props> = ({travelLocation}) => {
    const swiperProps = {
        loop: true,
        autoplay: {
            delay: 1000,
        },
        slidesPerView: 4,
        pagination: false,
        spaceBetween: 24,
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
    };

    return (
        <div className={styles.TravelLocationContainer}>
            <Link href={'/about'} className={styles.TravelLocationLink}>
                <DefaultTitleLink titleLinkText={'Journey TripNext'}/>
            </Link>
            <DefaultTitleName titleName={'Trendy Travel Locations'}/>
            <Swiper className={styles.TravelLocationPhotos} modules={[Navigation]} {...swiperProps}>
                {travelLocation.map((item) => (
                    <SwiperSlide
                        key={item.id}
                        className={styles.TravelLocationPhotosItem}
                        style={{backgroundImage: `url(${item.image})`}}
                    >
                        <div className={styles.yellowMask}>
                            <div className={styles.TravelLocationPhotosItem1Mask}>{item.tour}</div>
                        </div>
                        <div className={styles.titleMask}>
                            <div className={styles.TravelLocationPhotosItemTitle}>
                                <div className={styles.TravelLocationPhotosItemTitleTop}>{item.titleTop}</div>
                                <div className={styles.TravelLocationPhotosItemTitleBottom}>{item.titleBottom}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
            <div className={styles.swiperTravelLocationButtonBox}>
                <div className={styles.swiperArrowBlock}>
                    <div className={styles.swiperArrowBlockItem}>
                        <div className={`button-prev ${styles.swiperTravelLocationButtonPrev}`}></div>
                        <div className={styles.swiperArrowBlockTitle}>PREV</div>
                    </div>
                    <div className={styles.swiperArrowBlockItem}>
                        <div className={styles.swiperArrowBlockTitle}>NEXT</div>
                        <div className={`button-next ${styles.swiperTravelLocationButtonNext}`}></div>
                    </div>
                </div>
<DefaultButton buttonText={'View All Destination'} modifier={'slider'}/>
            </div>
        </div>
    )
}


