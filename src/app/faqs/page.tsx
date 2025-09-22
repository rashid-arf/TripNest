'use client';
import { HeaderPages } from '@/components/About/HeaderPages/HeaderPages';
import { NewsletterPages } from '@/components/About/NewsletterPages/NewsletterPages';
import { AboutMain } from '@/components/About/AboutMain/AboutMain';
import { Faqs } from '@/components/Faqs/Faqs';

export default function Page() {
  return (
    <main>
      <HeaderPages />
      <AboutMain title={'Faqs'} pageTitle={'Faqs'} />
      <Faqs />
      <NewsletterPages />
    </main>
  );
}
