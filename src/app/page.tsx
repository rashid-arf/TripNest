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


type LocationItem = {
    id: number;
    titleTop: string;
    titleBottom: string;
    tour: string;
    link: string;
    image: string;
    alt: string;
    rating: number; // <== додаємо рейтинг
}

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

        </main>
    );
}