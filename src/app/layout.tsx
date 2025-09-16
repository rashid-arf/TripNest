import type { Metadata } from 'next';
import '@/assets/styles/globals.scss';
import { Rubik, Jost, Satisfy } from 'next/font/google';
import { Footer } from '@/components/layout/Footer/Footer/Footer';
import { Providers } from '@/GlobalRedux/provider';

// Fonts setup
const rubik = Rubik({
  variable: '--font-rubik-sans',
  subsets: ['latin'],
});

const jost = Jost({
  variable: '--font-jost-mono',
  subsets: ['latin'],
});

const satisfy = Satisfy({
  weight: '400',
  variable: '--font-satisfy-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Team project',
  description: 'Description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${jost.variable} ${satisfy.variable}`}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
