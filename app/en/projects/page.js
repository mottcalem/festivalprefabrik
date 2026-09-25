import CompletedProjectsGrid from '@/components/CompletedProjectsGrid';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({ title: 'Completed Projects', description: 'Explore completed prefabricated and steel building projects delivered by Festival Prefabrik.', path: '/en/projects', trPath: '/projeler', enPath: '/en/projects', locale: 'en' });

export default function ProjectsPage() {
  return <main><SiteHeader locale="en"/>
    <section className="projects-hero"><div className="wrap"><span className="section-kicker">Projects brought to life</span><h1>Completed <em>Living Spaces</em></h1><p>Explore living spaces delivered by Festival Prefabrik for a range of needs.</p></div></section>
    <section className="projects-gallery wrap"><CompletedProjectsGrid locale="en"/></section>
    <SiteFooter locale="en"/>
  </main>;
}
