import CompletedProjectsGrid from '@/components/CompletedProjectsGrid';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({ title: 'Tamamlanan Projeler', description: 'Festival Prefabrik tarafından hayata geçirilen tamamlanmış prefabrik ve çelik yapı projelerini inceleyin.', path: '/projeler', trPath: '/projeler', enPath: '/en/projects' });

export default function ProjectsPage() {
  return <main><SiteHeader/>
    <section className="projects-hero"><div className="wrap"><span className="section-kicker">Hayata geçirdiğimiz projeler</span><h1>Tamamlanan <em>Yaşam Alanları</em></h1><p>Festival Prefabrik’in farklı ihtiyaçlara göre hayata geçirdiği yaşam alanlarını inceleyin.</p></div></section>
    <section className="projects-gallery wrap"><CompletedProjectsGrid/></section>
    <SiteFooter/>
  </main>;
}
