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



type TourPackageItem = {
    id: number;
    greenLable: string;
    image: string;
    alt: string;

}

type Props = {
    tourPackage: TourPackageItem[];
}


export const TourPackage: FC <Props> = ({tourPackage}) => {
    const swiperRef = useRef<SwiperType | null>(null);
    const swiperProps = {
        loop: true,
        autoplay: {
            delay: 1000,
        },
        slidesPerView: 3,
        pagination: false,
        spaceBetween: 24

    };

    return (
        <div className={styles.TourPackageContainer}>
            <div className={styles.TourPackageContainerBg}></div>
            <Link href={'/tour-package'} className={styles.TourPackageLink}>
                <DefaultTitleLink modifier={'Package'} titleLinkText={'Tour Package'}/>
            </Link>
            <DefaultTitleName modifier={'white'} titleName={'Thrilling Tour Plans'}/>
            <Swiper onSwiper={(swiper) => (swiperRef.current = swiper)} className={styles.TourPackagePhotos} modules={[Navigation]} {...swiperProps}>
                {tourPackage.map((item) => (
                    <SwiperSlide
                        key={item.id} className={styles.TourPackageSliders}>
                        <div className={styles.TourPackagePhotosItem}
                             style={{backgroundImage: `url(${item.image})`}}>
                            <div className={styles.greenMask}>
                                <div className={styles.TourPackagePhotosItem1Mask}>{item.greenLable}</div>
                            </div>
                        </div>
<div className={styles.TourPackageSlidersInfo}>
    <div className={styles.TourPackageSlidersInfoRated}>

    </div>

</div>
                    </SwiperSlide>
                ))}

            </Swiper>
            <div className={styles.swiperTourPackageButtonBox}>

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


