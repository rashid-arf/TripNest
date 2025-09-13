'use client';
import {useEffect, useState} from 'react';
import {BannerSwiperService} from "@/components/common/services/banner-swiper-service";
import {TourPackageService} from "@/components/common/services/tourPackage.services";
import {BestTour} from "@/components/common/BestTour/BestTour";
import {SwiperItem} from "@/components/layout/BannerSwiper/BannerSwiper.types";
import {ActiveTour} from "@/components/common/ActiveTour/ActiveTour";
import {WhoWeAre} from "@/components/common/WhoWeAre/WhoWeAre";
import {TourSelect} from "@/components/common/TourSelect/TourSelect";
import {TourSelectItem} from "@/components/common/TourSelect/TourSelect.types";
import {TravelGuide} from "@/components/common/TravelGuide/TravelGuide";
import {TravelGuideService} from "@/components/common/services/travelGuide.services";
import {TravelGuideItem} from "@/components/common/TravelGuide/TravelGuide.types";
import {TravelActive} from "@/components/common/TravelArticle/TravelArticle";
import {TravelArticleItem} from "@/components/common/TravelArticle/TravelArticle.types";
import {TravelArticleService} from "@/components/common/services/travelArtivle.services";
import {Header} from "@/components/About/Header/Header";
import {AboutMain} from "@/components/About/AboutMain/AboutMain";
import {Newsletter} from "@/components/About/Newsletter/Newsletter";
import styles from '@/app/about/page.module.scss'


export default function Page() {
    const [bannerSwiperInfo, setBannerSwiperInfo] = useState<SwiperItem[] | null>(null);

    useEffect(() => {
        (async () => {
            const BannerSwiperInfoFromResponse = await BannerSwiperService.getBannerSwiperInfo();
            setBannerSwiperInfo(BannerSwiperInfoFromResponse);
        })();
    }, []);

    const [tourSelect, setTourSelect] = useState<TourSelectItem[] | null>(null);

    useEffect(() => {
        (async () => {
            const TourSelectFromResponse = await TourPackageService.getTourPackage();
            setTourSelect(TourSelectFromResponse);
        })();
    }, []);

    const [travelGuide, setTravelGuide] = useState<TravelGuideItem[] | null>(null);

    useEffect(() => {
        (async () => {
            const TravelGuideFromResponse = await TravelGuideService.getTravelGuide();
            setTravelGuide(TravelGuideFromResponse);
        })();
    }, []);

    const [travelArticle, setTravelArticle] = useState<TravelArticleItem[] | null>(null);

    useEffect(() => {
        (async () => {
            const TravelArticleFromResponse = await TravelArticleService.getTravelArticle();
            setTravelArticle(TravelArticleFromResponse);
        })();
    }, []);

    return (
        <main>
        <Header/>
<AboutMain/>
            {bannerSwiperInfo && bannerSwiperInfo.length > 0 && (
                <BestTour
                    tripAdvisorRating={bannerSwiperInfo[0].tripAdvisorRating}
                    tripAdvisorIcon={bannerSwiperInfo[0].tripAdvisorIcon}
                    iconAlt={bannerSwiperInfo[0].iconAlt}
                    tripAdvisorLogo={bannerSwiperInfo[0].tripAdvisorLogo}
                    tripAdvisorLogoAlt={bannerSwiperInfo[0].tripAdvisorLogoAlt}
                />
            )}
            <WhoWeAre/>
            {tourSelect && <TourSelect tourSelect={tourSelect}/>}
            <ActiveTour/>
            <div className={styles.travelGuideBlock}>
                {travelGuide && (<TravelGuide travelGuide={travelGuide}/>)}
            </div>
            {travelArticle && (<TravelActive travelArticle={travelArticle}/>)}
            <Newsletter/>
        </main>
    );
}