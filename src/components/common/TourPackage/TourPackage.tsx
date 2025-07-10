import React, {CSSProperties, FC} from 'react';
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
import Image from 'next/image';
import date from '@/assets/images/date.png';
import tourLocation from '@/assets/images/tour-location.png';
import flag from '@/assets/images/flag.png';
import planeIcon from '@/assets/images/plane.png';




type TourPackageItem = {
    id: number;
    greenLabel: string;
    image: string;
    alt: string;
    rated: string;
    ratingNumber: number;
    title: string;
    date: string;
    location: string;
    countries: string;
    newPrice: number;
    oldPrice: number;
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
                                <div className={styles.TourPackagePhotosItem1Mask}>{item.greenLabel}</div>
                            </div>
                        </div>
<div className={styles.TourPackageSlidersInfo}>
    <div className={styles.ratingRow}>
        <div className={styles.TourPackageSlidersInfoRated}
             style={{'--rated-image': `url(${item.rated})`} as CSSProperties}>

        </div>
        <div>({item.ratingNumber})</div>
    </div>
    <div className={styles.TourPackageSlidersInfoTitle}>{item.title}</div>
    <div className={styles.TourPackageSlidersInfoList}>
        <div className={styles.listItem}>
            <Image src={date} alt="date"/>
            <div className={styles.listItemTitle}>{item.date}</div>
        </div>
        <div className={styles.listItem}>
            <Image src={tourLocation} alt="location"/>
            <div className={styles.listItemTitle}>{item.location}</div>
        </div>
        <div className={styles.listItem}>
            <Image src={flag} alt="flag"/>
            <div className={styles.listItemTitle}>{item.countries}</div>
        </div>
    </div>
</div>
                   <div className={styles.TourPackageSlidersPrice}>
                       <div className={styles.TourPackageSlidersPriceItem}>
                           <p className={styles.TourPackageSlidersPriceItemTitle}>Starting From:</p>
                           <div className={styles.TourPackageSlidersPriceItemDiscount}>
                               <p className={styles.TourPackageSlidersPriceItemDiscountNew}>${item.newPrice}</p>
                               <p className={styles.TourPackageSlidersPriceItemDiscountOld}>${item.oldPrice}</p>
                           </div>
                           <p className={styles.TourPackageSlidersPriceItemCapton}>TAXES INCL/PERS</p>
                       </div>
                      <DefaultButton buttonText={"Book A Trip"} modifier={"tourSlider"} iconRight={<Image src={planeIcon} alt="plane" width={24} height={24} />}/>
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


