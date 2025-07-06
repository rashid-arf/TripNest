'use client';
import { BannerSwiper } from '@/components/layout/BannerSwiper/BannerSwiper';
import { useEffect, useState } from 'react';
import {BannerSwiperService} from "@/components/common/services/banner-swiper-service";
import {TravelLocation} from "@/components/common/TravelLocation/TravelLocation";



export default function Home() {
  const [bannerSwiperInfo, setBannerSwiperInfo] = useState(null);

  useEffect(() => {
    (async () => {
      const BannerSwiperInfoFromResponse = await BannerSwiperService.getBannerSwiperInfo();
      setBannerSwiperInfo(BannerSwiperInfoFromResponse);
    })();
  }, []);
  return (
      <main>
        <div>{bannerSwiperInfo && <BannerSwiper bannerSwiperInfo={bannerSwiperInfo} />}</div>
<TravelLocation/>
      </main>
  );
}