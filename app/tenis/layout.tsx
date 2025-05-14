import '../globals.css';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tênis Nike Air Max SC Masculino',
  description: 'O Nike Air Max SC é a finalização perfeita para qualquer look',
  openGraph: {
    title: 'Nike Air Max SC',
    description: 'Descubra o conforto e o estilo do Nike Air Max SC.',
    url: 'https://montink-test-mcnoj2osm-eduardo-nunes-s-projects.vercel.app/tenis',
    siteName: 'Nike Clone',
    images: [
      {
        url: 'https://imgnike-a.akamaihd.net/360x360/01122416A1.jpg',
        width: 1200,
        height: 630,
        alt: 'Nike Air Max SC',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nike Air Max SC',
    description: 'Descubra o conforto e o estilo do Nike Air Max SC.',
    images: ['https://imgnike-a.akamaihd.net/360x360/01122416A1.jpg'],
  },
};

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans bg-white text-zinc-900">{children}</body>
    </html>
  );
}
