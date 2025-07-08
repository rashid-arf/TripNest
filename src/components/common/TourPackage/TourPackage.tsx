import React, { FC} from 'react';
import styles from './TourPackage.module.scss';
import Link from 'next/link';
import { DefaultTitleLink } from '@/components/common/DefaultTitleLink/DefaultTitleLink';
import { DefaultTitleName } from '@/components/common/DefaultTitleName/DefaultTitleName';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {DefaultButton} from "@/components/common/DefaultButton/DefaultButton";
import {SliderArrow} from "@/components/common/Arrows/SliderArrow/SliderArrow";
import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';



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


export const TourPackage: FC <Props> = ({travelLocation}) => {
    const swiperRef = useRef<SwiperType | null>(null);
    const swiperProps = {
        loop: true,
        autoplay: {
            delay: 1000,
        },
        slidesPerView: 4,
        pagination: false,
        spaceBetween: 24

    };

    return (
        <div className={styles.TourPackageContainer}>
            <Link href={'/about'} className={styles.TourPackageLink}>
                <DefaultTitleLink modifier={'Package'} titleLinkText={'Tour Package'}/>
            </Link>
            <DefaultTitleName modifier={'white'} titleName={'Thrilling Tour Plans'}/>
            <Swiper onSwiper={(swiper) => (swiperRef.current = swiper)} className={styles.TravelLocationPhotos} modules={[Navigation]} {...swiperProps}>
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

                        <SliderArrow
                            arrowText={'PREV'}
                            onClick={() => swiperRef.current?.slidePrev()} color={'white'}
                        />
                <DefaultButton buttonText={'View All Destination'} modifier={'slider'} />
                        <SliderArrow modifier="NEXT" arrowText="NEXT" onClick={() => swiperRef.current?.slideNext()} color={'white'} />
            </div>
        </div>
    )
}


