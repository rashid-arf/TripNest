'use client';
import { HeaderPages } from '@/components/About/HeaderPages/HeaderPages';
import { NewsletterPages } from '@/components/About/NewsletterPages/NewsletterPages';
import { TourList } from '@/components/TourPage/TourList/TourList';
import { TourSliders } from '@/components/TourPage/TourSliders/TourSliders';
import { AboutMain } from '@/components/About/AboutMain/AboutMain';

export default function Page() {
  return (
    <main>
      <HeaderPages />
      <AboutMain title={'Package Grid'} pageTitle={'Package Grid'} />
      <TourList />
      <TourSliders />
      <NewsletterPages />
    </main>
  );
}
