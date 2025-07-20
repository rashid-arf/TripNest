'use client';
import {BannerSwiper} from '@/components/layout/BannerSwiper/BannerSwiper';
import {useEffect, useState} from 'react';
import {BannerSwiperService} from "@/components/common/services/banner-swiper-service";
import {TravelLocation} from "@/components/common/TravelLocation/TravelLocation";
import {TravelLocationService} from "@/components/common/services/travelLocation.services";
import {TourPackage} from "@/components/common/TourPackage/TourPackage";
import {TourPackageService} from "@/components/common/services/tourPackage.services";
import {BestTour} from "@/components/common/BestTour/BestTour";
import {SwiperItem} from "@/components/layout/BannerSwiper/BannerSwiper.types";
import {ActiveTour} from "@/components/common/ActiveTour/ActiveTour";
import {WhoWeAre} from "@/components/common/WhoWeAre/WhoWeAre";
import {TourSelect} from "@/components/common/TourSelect/TourSelect";
import {FindTravel} from "@/components/common/FindTravel/FindTravel";
import {LocationItem} from "@/components/common/TravelLocation/TravelLocation.types";
import {TourPackageItem} from "@/components/common/TourPackage/TourPackage.types";
import {TourSelectItem} from "@/components/common/TourSelect/TourSelect.types";
import {TravelGuide} from "@/components/common/TravelGuide/TravelGuide";
import {TravelGuideService} from "@/components/common/services/travelGuide.services";
import {TravelGuideItem} from "@/components/common/TravelGuide/TravelGuide.types";
import {VideoTour} from "@/components/common/VideoTour/VideoTour";
import {TravelActive} from "@/components/common/TravelArticle/TravelArticle";
import {TravelArticleItem} from "@/components/common/TravelArticle/TravelArticle.types";
import {TravelArticleService} from "@/components/common/services/travelArtivle.services";
import {Newsletter} from "@/components/common/Newsletter/Newsletter";


export default function Home() {
    const [bannerSwiperInfo, setBannerSwiperInfo] = useState<SwiperItem[] | null>(null);

    useEffect(() => {
        (async () => {
            const BannerSwiperInfoFromResponse = await BannerSwiperService.getBannerSwiperInfo();
            setBannerSwiperInfo(BannerSwiperInfoFromResponse);
        })();
    }, []);

    const [travelLocation, setTravelLocation] = useState<LocationItem[] | null>(null);

    useEffect(() => {
        (async () => {
            const TravelLocationFromResponse = await TravelLocationService.getTravelLocation();
            setTravelLocation(TravelLocationFromResponse);
        })();
    }, []);

    const [tourPackage, setTourPackage] = useState<TourPackageItem[] | null>(null);

    useEffect(() => {
        (async () => {
            const TourPackageFromResponse = await TourPackageService.getTourPackage();
            setTourPackage(TourPackageFromResponse);
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
            <div>{bannerSwiperInfo && <BannerSwiper bannerSwiperInfo={bannerSwiperInfo}/>}</div>
            {travelLocation && (<TravelLocation travelLocation={travelLocation}/>)}
            {tourPackage && (<TourPackage tourPackage={tourPackage}/>)}
            {bannerSwiperInfo && bannerSwiperInfo.length > 0 && (
                <BestTour
                    tripAdvisorRating={bannerSwiperInfo[0].tripAdvisorRating}
                    tripAdvisorIcon={bannerSwiperInfo[0].tripAdvisorIcon}
                    iconAlt={bannerSwiperInfo[0].iconAlt}
                    tripAdvisorLogo={bannerSwiperInfo[0].tripAdvisorLogo}
                    tripAdvisorLogoAlt={bannerSwiperInfo[0].tripAdvisorLogoAlt}
                />
            )}
            <ActiveTour/>
            <WhoWeAre/>
            {tourSelect && <TourSelect tourSelect={tourSelect}/>}
            {bannerSwiperInfo && tourSelect && (
                <FindTravel
                    tourSelect={tourSelect}
                    bannerSwiperInfo={bannerSwiperInfo}
                />
            )}
            {travelGuide && (<TravelGuide travelGuide={travelGuide}/>)}
            <VideoTour/>
            {travelArticle && (<TravelActive travelArticle={travelArticle}/>)}
            <Newsletter/>
        </main>
    );
}