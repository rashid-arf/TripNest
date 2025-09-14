'use client';
import {HeaderPages} from "@/components/About/HeaderPages/HeaderPages";
import {NewsletterPages} from "@/components/About/NewsletterPages/NewsletterPages";
import { TourPageMain } from '@/components/TourPage/TourPageMain/TourPageMain';
import { TourList } from '@/components/TourPage/TourList/TourList';

export default function Page() {



  return (
    <main>
      <HeaderPages/>
      <TourPageMain/>
<TourList/>
           <NewsletterPages/>
    </main>
  );
}