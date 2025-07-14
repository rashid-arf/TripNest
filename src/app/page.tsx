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


export default function Home() {
    const [bannerSwiperInfo, setBannerSwiperInfo] = useState<SwiperItem[] | null>(null);

    useEffect(() => {
        (async () => {
            const BannerSwiperInfoFromResponse = await BannerSwiperService.getBannerSwiperInfo();
            setBannerSwiperInfo(BannerSwiperInfoFromResponse);
        })();
    }, []);

    const [travelLocation, setTravelLocation] = useState(null);

    useEffect(() => {
        (async () => {
            const TravelLocationFromResponse = await TravelLocationService.getTravelLocation();
            setTravelLocation(TravelLocationFromResponse);
        })();
    }, []);

    const [tourPackage, setTourPackage] = useState(null);

    useEffect(() => {
        (async () => {
            const TourPackageFromResponse = await TourPackageService.getTourPackage();
            setTourPackage(TourPackageFromResponse);
        })();
    }, []);

    const [tourSelect, setTourSelect] = useState(null);

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
            {bannerSwiperInfo && bannerSwiperInfo.length > 0 && (
                <ActiveTour
                    tripAdvisorRating ={bannerSwiperInfo[0].tripAdvisorRating}
                    tripAdvisorIcon={bannerSwiperInfo[0].tripAdvisorIcon}
                    iconAlt={bannerSwiperInfo[0].iconAlt}
                    tripAdvisorLogo={bannerSwiperInfo[0].tripAdvisorLogo}
                    tripAdvisorLogoAlt={bannerSwiperInfo[0].tripAdvisorLogoAlt}
                />
            )}
            <WhoWeAre/>
            {tourSelect && <TourSelect tourSelect={tourSelect}/>}
        </main>
    );
}