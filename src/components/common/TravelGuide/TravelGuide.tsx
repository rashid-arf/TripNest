import React, {FC} from 'react';
import styles from './TravelGuide.module.scss';
import Link from 'next/link';
import {DefaultTitleLink} from '@/components/common/DefaultTitleLink/DefaultTitleLink';
import {DefaultTitleName} from '@/components/common/DefaultTitleName/DefaultTitleName';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {SliderArrow} from "@/components/common/Arrows/SliderArrow/SliderArrow";
import {useRef} from 'react';
import {Swiper as SwiperType} from 'swiper';
import {TravelGuideItem} from "@/components/common/TravelGuide/TravelGuide.types";
import Image from "next/image";

type Props = {
    travelGuide: TravelGuideItem[];
}

export const TravelGuide: FC<Props> = ({travelGuide}) => {
    const swiperRef = useRef<SwiperType | null>(null);
    const swiperProps = {
        loop: true,
        autoplay: {
            delay: 1000,
        },
        slidesPerView: 4,
        pagination: false,
        spaceBetween: 24,

    };

    return (
        <div className={`content-width ${styles.TravelGuideContainer}`}>
            <Link href={'/travel-guide'} className={styles.TravelGuideLink}>
                <DefaultTitleLink titleLinkText={'Tour Guide'}/>
            </Link>
            <DefaultTitleName titleName={'Our Travel Guide'}/>
            <Swiper onSwiper={(swiper) => (swiperRef.current = swiper)} className={styles.TravelGuidePhotos}
                    modules={[Navigation]} {...swiperProps}>
                {travelGuide.map((item) => (
                    <SwiperSlide
                        key={item.id} className={styles.TravelGuideSlideItem}
                    >
                        <Image src={item.image} alt={item.alt} width={200} height={200}/>
                        <div className={styles.TravelGuideSlideItemDescription}><p>{item.guideName}</p>
                            <p className={styles.TravelGuideSlideItemDescriptionPosition}>{item.guidePosition}</p></div>
                    </SwiperSlide>
                ))}

            </Swiper>
            <div className={styles.swiperTravelGuideButtonBox}>
                <SliderArrow
                    arrowText={'PREV'}
                    onClick={() => swiperRef.current?.slidePrev()}
                />
                <SliderArrow modifier="NEXT" arrowText="NEXT" onClick={() => swiperRef.current?.slideNext()}/>
            </div>
        </div>
    )
}


