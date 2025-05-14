import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tênis Nike Air Max SC Masculino',
  description: 'O Nike Air Max SC é a finalização perfeita para qualquer look',
  openGraph: {
    title: 'Nike Air Max SC',
    description: 'Descubra o conforto e o estilo do Nike Air Max SC.',
    // TODO: SET CORRECT URL
    url: 'http://localhost:3000/tenis',
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

export default function ProductPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans bg-white text-zinc-900">{children}</body>
    </html>
  );
}
