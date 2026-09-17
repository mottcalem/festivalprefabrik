import CompletedProjectsGrid from '@/components/CompletedProjectsGrid';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export const metadata = { title: 'Completed Projects | Festival Prefabrik', description: 'Explore Festival Prefabrik completed projects.' };

export default function ProjectsPage() {
  return <main><SiteHeader locale="en"/>
    <section className="projects-hero"><div className="wrap"><span className="section-kicker">Projects brought to life</span><h1>Completed <em>Living Spaces</em></h1><p>Explore living spaces delivered by Festival Prefabrik for a range of needs.</p></div></section>
    <section className="projects-gallery wrap"><CompletedProjectsGrid locale="en"/></section>
    <SiteFooter locale="en"/>
  </main>;
}
