'use client';
import { HeaderPages } from '@/components/About/HeaderPages/HeaderPages';
import { NewsletterPages } from '@/components/About/NewsletterPages/NewsletterPages';
import { TourSliders } from '@/components/TourPage/TourSliders/TourSliders';
import { AboutMain } from '@/components/About/AboutMain/AboutMain';
import { Blog } from '@/components/Blog/Blog';
import { useEffect, useState } from 'react';
import { TravelArticleItem } from '@/components/common/TravelArticle/TravelArticle.types';
import { TravelArticleService } from '@/components/common/services/travelArtivle.services';

export default function Page() {
  const [travelArticle, setTravelArticle] = useState<TravelArticleItem[] | null>(null);

  useEffect(() => {
    (async () => {
      const TravelLocationFromResponse = await TravelArticleService.getTravelArticle();
      setTravelArticle(TravelLocationFromResponse);
    })();
  }, []);

  return (
    <main>
      <HeaderPages />
      <AboutMain title={'Blog'} pageTitle={'Blog Standard'} />
      {travelArticle && <Blog travelArticle={travelArticle} />}
      <TourSliders />
      <NewsletterPages />
    </main>
  );
}
