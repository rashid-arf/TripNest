'use client';
import { HeaderPages } from '@/components/About/HeaderPages/HeaderPages';
import { NewsletterPages } from '@/components/About/NewsletterPages/NewsletterPages';
import { TourSliders } from '@/components/TourPage/TourSliders/TourSliders';
import { AboutMain } from '@/components/About/AboutMain/AboutMain';
import { Destination } from '@/components/Destination/Destination';
import { useEffect, useState } from 'react';
import { LocationItem } from '@/components/common/TravelLocation/TravelLocation.types';
import { TravelLocationService } from '@/components/common/services/travelLocation.services';

export default function Page() {
  const [travelLocation, setTravelLocation] = useState<LocationItem[] | null>(null);

  useEffect(() => {
    (async () => {
      const TravelLocationFromResponse = await TravelLocationService.getTravelLocation();
      setTravelLocation(TravelLocationFromResponse);
    })();
  }, []);

  return (
    <main>
      <HeaderPages />
      <AboutMain title={'Destination'} pageTitle={'Destination'} />
      {travelLocation && <Destination travelLocation={travelLocation} />}
      <TourSliders />
      <NewsletterPages />
    </main>
  );
}
