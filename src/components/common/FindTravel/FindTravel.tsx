import React, {FC} from 'react';
import styles from './FindTravel.module.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {SliderArrow} from "@/components/common/Arrows/SliderArrow/SliderArrow";
import {useRef} from 'react';
import {Swiper as SwiperType} from 'swiper';
import {DefaultTitleLink} from "@/components/common/DefaultTitleLink/DefaultTitleLink";
import {DefaultTitleName} from "@/components/common/DefaultTitleName/DefaultTitleName";
import {TripAdvisor} from "@/components/common/TripAdvisor/TripAdvisor";
import {SwiperItem} from "@/components/layout/BannerSwiper/BannerSwiper.types";

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
    bannerSwiperInfo: SwiperItem[];
}

export const FindTravel: FC<Props> = ({tourSelect, bannerSwiperInfo}) => {
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
        <div className={styles.FindTravelContainer}>
            <div className={styles.FindTravelContent}>
                <div className={styles.FindTravelContentLeft}>
                    <DefaultTitleLink titleLinkText={"Testimonial"} modifier={"Package"}/>
                    <DefaultTitleName titleName={"Find The Compliments From Our Travelers"} modifier={"white"}/>
                    <p className={styles.FindTravelContentLeftDescription}>Nunc volutpat sagittis cursus. Praesent sed
                        dolor pellentesque, consectetur velon sit amet,
                        pharetra ipsum. Fusce europ ultrices tortor. Praesent vehicula commodo purus at vulputate
                        one of the most popular tourist place.</p>
                    <p className={styles.FindTravelContentLeftCaption}>Review On</p>
                    <div className={styles.FindTravelContentLeftLabels}>
                        {bannerSwiperInfo?.[0] && (
                            <TripAdvisor
                                source="trustpilot"
                                icon={bannerSwiperInfo[0].trustPilotIcon}
                                iconAlt={bannerSwiperInfo[0].trustPilotIconAlt}
                                logo={bannerSwiperInfo[0].trustPilotLogo}
                                logoAlt={bannerSwiperInfo[0].trustPilotLogoAlt}
                                rating={bannerSwiperInfo[0].tripAdvisorRating}
                                modifier="FindTravels"
                            />
                        )}
                        {bannerSwiperInfo?.[0] && (
                            <TripAdvisor
                                source="tripadvisor"
                                icon={bannerSwiperInfo[0].tripAdvisorIcon}
                                iconAlt={bannerSwiperInfo[0].iconAlt}
                                logo={bannerSwiperInfo[0].tripAdvisorLogo}
                                logoAlt={bannerSwiperInfo[0].tripAdvisorLogoAlt}
                                rating={bannerSwiperInfo[0].tripAdvisorRating}
                                modifier="Banner"
                            />
                        )}
                    </div>

                </div>
                <div className={styles.FindTravelRightContent}>
                    <Swiper onSwiper={(swiper) => (swiperRef.current = swiper)} className={styles.FindTravelPhotos}
                            modules={[Navigation]} {...swiperProps}>
                        {tourSelect.map((item) => (
                            <SwiperSlide
                                key={item.id} className={styles.FindTravelSliders}>
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
            </div>
        </div>
    )
}


