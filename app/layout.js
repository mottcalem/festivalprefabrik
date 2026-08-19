import './globals.css';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export const metadata = {
  title: 'Festival Prefabrik | Hayalinizdeki Yapıya Hızlıca Kavuşun',
  description: 'Prefabrik ev, çelik ev ve konteyner çözümleri. Tokat ve çevresinde güvenilir, hızlı ve modern yaşam alanları.',
};

export default function RootLayout({ children }) {
  return <html lang="tr"><body>{children}<WhatsAppWidget/></body></html>;
}
