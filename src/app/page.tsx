'use client';
import { BannerSwiper } from '@/components/layout/BannerSwiper/BannerSwiper';
import { useEffect, useState } from 'react';
import {BannerSwiperService} from "@/components/common/services/banner-swiper-service";
import {TravelLocation} from "@/components/common/TravelLocation/TravelLocation";
import {TravelLocationService} from "@/components/common/services/travelLocation.services";
import {TourPackage} from "@/components/common/TourPackage/TourPackage";
import {TourPackageService} from "@/components/common/services/tourPackage.services";

export default function Home() {
  const [bannerSwiperInfo, setBannerSwiperInfo] = useState(null);

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


  return (
      <main>
        <div>{bannerSwiperInfo && <BannerSwiper bannerSwiperInfo={bannerSwiperInfo} />}</div>
          {travelLocation && (<TravelLocation travelLocation={travelLocation} />)}
          {tourPackage && (<TourPackage tourPackage={tourPackage}/>)}
      </main>
  );
}