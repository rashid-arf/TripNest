'use client';
import { HeaderPages } from '@/components/About/HeaderPages/HeaderPages';
import { NewsletterPages } from '@/components/About/NewsletterPages/NewsletterPages';
import { AboutMain } from '@/components/About/AboutMain/AboutMain';
import { Contact } from '@/components/Contact/Contact';

export default function Page() {
  return (
    <main>
      <HeaderPages />
      <AboutMain title={'Contact'} pageTitle={'Contact'} />
      <Contact />

      <NewsletterPages />
    </main>
  );
}
