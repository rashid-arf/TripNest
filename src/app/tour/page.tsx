'use client';
import {HeaderPages} from "@/components/About/HeaderPages/HeaderPages";
import {NewsletterPages} from "@/components/About/NewsletterPages/NewsletterPages";
import { TourPageMain } from '@/components/TourPage/TourPageMain/TourPageMain';
import { TourList } from '@/components/TourPage/TourList/TourList';
import { TourSliders } from '@/components/TourPage/TourSliders/TourSliders';


export default function Page() {



  return (
    <main>
      <HeaderPages/>
      <TourPageMain/>
<TourList/>
<TourSliders/>
           <NewsletterPages/>
    </main>
  );
}