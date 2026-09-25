import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({ title: 'Ücretsiz Teklif Al', description: 'Festival Prefabrik projeniz için ücretsiz fiyat teklifi alın. İhtiyaçlarınızı paylaşın, uzman ekibimiz size ulaşsın.', path: '/teklif', trPath: '/teklif', enPath: '/en/quote' });

export default function QuoteLayout({ children }) { return children; }
