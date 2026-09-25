import './globals.css';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { absoluteUrl, brandName, defaultOgImage } from '@/lib/seo';

export const metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: { default: 'Festival Prefabrik | Prefabrik ve Çelik Ev Çözümleri', template: '%s | Festival Prefabrik' },
  description: 'Prefabrik ev, çelik ev ve konteyner çözümleri. Türkiye geneline üretim ve montaj hizmeti sunuyoruz.',
  applicationName: brandName,
  icons: { icon: [{ url: '/favicon.png', type: 'image/png', sizes: '512x512' }], apple: [{ url: '/favicon.png', type: 'image/png', sizes: '512x512' }] },
  keywords: ['prefabrik ev', 'çelik ev', 'konteyner', 'bungalov', 'prefabrik yapı', 'Festival Prefabrik'],
  authors: [{ name: brandName }],
  creator: brandName,
  publisher: brandName,
  formatDetection: { telephone: true, email: true, address: true },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: { type: 'website', locale: 'tr_TR', url: absoluteUrl('/'), siteName: brandName, title: 'Festival Prefabrik | Prefabrik ve Çelik Ev Çözümleri', description: 'Türkiye geneline prefabrik, çelik ev ve konteyner çözümleri.', images: [{ url: defaultOgImage, width: 1200, height: 630, alt: brandName }] },
  twitter: { card: 'summary_large_image', title: 'Festival Prefabrik | Prefabrik ve Çelik Ev Çözümleri', description: 'Türkiye geneline prefabrik, çelik ev ve konteyner çözümleri.', images: [defaultOgImage] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      {/* Browser extensions such as Grammarly add body attributes before hydration. */}
      <body suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: brandName, url: absoluteUrl('/'), logo: absoluteUrl('/brand/festival-prefabrik-logo.png'), image: absoluteUrl(defaultOgImage), telephone: '+903565511100', email: 'info@festivalprefabrik.com', address: { '@type': 'PostalAddress', streetAddress: 'Çevre Yolu Cad., Bağlar Mah. No: 9', addressLocality: 'Niksar', addressRegion: 'Tokat', addressCountry: 'TR' }, areaServed: { '@type': 'Country', name: 'Türkiye' }, sameAs: [] }).replace(/</g, '\\u003c') }} />
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
