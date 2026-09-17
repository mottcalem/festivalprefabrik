import CompletedProjectsGrid from '@/components/CompletedProjectsGrid';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export const metadata = { title: 'Tamamlanan Projeler | Festival Prefabrik', description: 'Festival Prefabrik tamamlanan projelerini inceleyin.' };

export default function ProjectsPage() {
  return <main><SiteHeader/>
    <section className="projects-hero"><div className="wrap"><span className="section-kicker">Hayata geçirdiğimiz projeler</span><h1>Tamamlanan <em>Yaşam Alanları</em></h1><p>Festival Prefabrik’in farklı ihtiyaçlara göre hayata geçirdiği yaşam alanlarını inceleyin.</p></div></section>
    <section className="projects-gallery wrap"><CompletedProjectsGrid/></section>
    <SiteFooter/>
  </main>;
}
