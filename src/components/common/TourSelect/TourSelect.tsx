import React, {CSSProperties, FC} from 'react';
import styles from './TourSelect.module.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {DefaultButton} from "@/components/common/DefaultButton/DefaultButton";
import {SliderArrow} from "@/components/common/Arrows/SliderArrow/SliderArrow";
import {useRef} from 'react';
import {Swiper as SwiperType} from 'swiper';
import Image from 'next/image';
import date from '@/assets/images/date.png';
import tourLocation from '@/assets/images/tour-location.png';
import flag from '@/assets/images/flag.png';
import planeIcon from '@/assets/images/plane.png';
import TourSelectBanner from '@/assets/images/TourSelectBanner.png'
import clsx from "clsx";
import {DefaultTitleLink} from "@/components/common/DefaultTitleLink/DefaultTitleLink";

type TourSelectItem = {
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
    tourSelect: TourSelectItem[];
}

export const TourSelect: FC<Props> = ({tourSelect}) => {
    const swiperRef = useRef<SwiperType | null>(null);
    const swiperProps = {
        loop: true,
        autoplay: {
            delay: 1000,
        },
        slidesPerView: 1,
        pagination: false,
        spaceBetween: 24
    };

    return (
        <div className={styles.TourSelectContainer}>
            <Swiper onSwiper={(swiper) => (swiperRef.current = swiper)} className={styles.TourSelectPhotos}
                    modules={[Navigation]} {...swiperProps}>
                {tourSelect.map((item) => (
                    <SwiperSlide
                        key={item.id} className={styles.TourSelectSliders}>
                        <div className={styles.TourSelectSlidersLeftPhoto}>
                            <Image src={TourSelectBanner} alt="TourSelectBanner" width={536} height={284}
                                   className={styles.tourSelectBanner}/>
                            <div className={styles.TourSelectSlidersLeftPhotoFilter}>
                                <div className={styles.TourSelectSlidersLeftPhotoContent}>
                                    <DefaultTitleLink titleLinkText={"Savings worldwide"} modifier={'tourSelect'}/>
                                    <p className={styles.TourSelectSlidersLeftPhotoDiscount}>20% Off</p>
                                    <p className={styles.TourSelectSlidersLeftPhotoDescription}>Discover Great Deal</p>
                                    <DefaultButton buttonText={"View This Trip"} modifier={"tourSelect"}/>
                                </div>

                            </div>
                        </div>
                        <div className={styles.TourSelectRightContent}>
                            <div className={styles.TourSelectPhotosItem}
                                 style={{backgroundImage: `url(${item.image})`}}>
                                <div className={styles.greenMask}>
                                    <div className={styles.TourSelectPhotosItem1Mask}>{item.greenLabel}</div>
                                </div>
                            </div>
                            <div className={styles.TourSelectSlidersInfo}>
                                <div className={styles.ratingRow}>
                                    <div
                                        className={clsx(
                                            styles.TourSelectSlidersInfoRated,
                                            item.ratingNumber > 0 && styles.activeRating
                                        )}
                                        style={{'--rated-image': `url(${item.rated})`} as CSSProperties}
                                    />
                                    <div>({item.ratingNumber})</div>
                                </div>
                                <div className={styles.TourSelectSlidersInfoTitle}>{item.title}</div>
                                <div className={styles.TourSelectSlidersInfoList}>
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
                                <hr className={styles.TourSelectHorizontalLine}/>
                                <div className={styles.TourSelectSlidersPrice}>
                                    <div className={styles.TourSelectSlidersPriceItem}>
                                        <p className={styles.TourSelectSlidersPriceItemTitle}>Starting From:</p>
                                        <div className={styles.TourSelectSlidersPriceItemDiscount}>
                                            <p className={styles.TourSelectSlidersPriceItemDiscountNew}>${item.newPrice}</p>
                                            <p className={styles.TourSelectSlidersPriceItemDiscountOld}>${item.oldPrice}</p>
                                        </div>

                                    </div>
                                    <DefaultButton buttonText={"Book A Trip"} modifier={"tourSlider"}
                                                   iconRight={<Image src={planeIcon} alt="plane" width={18}
                                                                     height={20}/>}/>
                                </div>
                            </div>

                        </div>

                    </SwiperSlide>
                ))}

            </Swiper>
            <div className={styles.swiperTourSelectButtonBox}>
                <SliderArrow
                    arrowText={'PREV'}
                    onClick={() => swiperRef.current?.slidePrev()} color={'green'}
                />
                <SliderArrow modifier="NEXT" arrowText="NEXT" onClick={() => swiperRef.current?.slideNext()}
                             color={'green'}/>
            </div>
        </div>
    )
}


