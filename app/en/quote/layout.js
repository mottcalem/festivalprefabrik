import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({ title: 'Request a Free Quote', description: 'Request a free quote for your Festival Prefabrik project. Share your requirements and our specialists will contact you.', path: '/en/quote', trPath: '/teklif', enPath: '/en/quote', locale: 'en' });

export default function QuoteLayout({ children }) { return children; }
