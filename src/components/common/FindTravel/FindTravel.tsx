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
import Image from "next/image";
import FindTravelMask from '@/assets/images/FindTravelMask.png'
import Goldstar from '@/assets/images/Goldstar.png'
import {TourSelectItem} from "@/components/common/TourSelect/TourSelect.types";



type Props = {
    tourSelect: TourSelectItem[];
    bannerSwiperInfo: SwiperItem[];
}

export const FindTravel: FC<Props> = ({tourSelect, bannerSwiperInfo, }) => {
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
                    <DefaultTitleName titleName={"Find The Compliments From Our Travelers"} modifier={"whiteZeroMargin"}/>
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
                                // без withBackground — фон не зʼявиться
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
                                modifier="FindTravels"
                                withBackground // тільки тут буде фон
                            />
                        )}
                    </div>

                </div>
                <div className={styles.FindTravelRightContent}>
                    <Swiper onSwiper={(swiper) => (swiperRef.current = swiper)}
                            modules={[Navigation]} {...swiperProps}>
                        {tourSelect.map((item) => (
                            <SwiperSlide
                                key={item.id}>
                                <div className={styles.FindTravelSlidersText}>
                                    <p>{item.description}</p>
                                    <Image src={Goldstar} alt="star" width={100} height={18} />
                                </div>
                                <div>
                                    <Image src={item.customerPhoto} alt='customerPhoto' width={42} height={42} className={styles.FindTravelSlidersCuspomerPhoto}/>
                                    <div>
                                        <p>{item.customer}</p>
                                        <p>{item.position}</p>
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
            </div>
            <Image src={FindTravelMask} alt={"FindTravelMask"} className={styles.FindTravelMask} width={206} height={328}/>
        </div>
    )
}


