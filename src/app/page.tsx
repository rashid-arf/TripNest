'use client';
import { BannerSwiper } from '@/components/layout/BannerSwiper/BannerSwiper';
import { useEffect, useState } from 'react';
import {BannerSwiperService} from "@/components/common/services/banner-swiper-service";
import {TravelLocation} from "@/components/common/TravelLocation/TravelLocation";
import {TravelLocationService} from "@/components/common/services/travelLocation.services";
import {TourPackage} from "@/components/common/TourPackage/TourPackage";

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

  return (
      <main>
        <div>{bannerSwiperInfo && <BannerSwiper bannerSwiperInfo={bannerSwiperInfo} />}</div>
          {travelLocation && (<TravelLocation travelLocation={travelLocation} />)}
          {travelLocation && (<TourPackage travelLocation={travelLocation}/>)}
      </main>
  );
}