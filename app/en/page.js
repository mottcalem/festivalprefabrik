import Image from 'next/image';
import { ArrowRightIcon, CheckIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import HeroSlider from '@/components/HeroSlider';
import CompletedProjectsCarousel from '@/components/CompletedProjectsCarousel';
import data from '@/data/site.en.json';

const categoryGroups = [
  { title: 'Prefabricated Houses', number: '01', description: 'Fast, efficient and flexible prefabricated building solutions.', categories: [
    { title: 'Single Storey', image: '/media/tek-kat-prefabrik/Festival_84m2.jpg', href: '/en/models?category=prefabricated-single-storey' },
    { title: 'Two Storey', image: '/media/cift-kat-prefabrik/Festival_2_Katli_118m2.jpg', href: '/en/models?category=prefabricated-two-storey' },
    { title: 'Container', image: '/media/festival-konteyner.jpeg', href: '/en/models?category=container' },
  ]},
  { title: 'Steel Houses', number: '02', description: 'Durable, modern and long-lasting steel building solutions.', categories: [
    { title: 'Single Storey', image: '/media/tamamlananprojeler/24.jpg', href: '/en/models?category=steel-single-storey' },
    { title: 'Two Storey', image: '/media/tamamlananprojeler/29.jpg', href: '/en/models?category=steel-two-storey' },
    { title: 'Bungalow', image: '/media/tamamlananprojeler/34.jpg', href: '/en/models?category=bungalow' },
  ]},
];

export const metadata = { title: 'Festival Prefabrik | Modern Prefabricated Houses', description: 'Modern prefabricated and steel house solutions, manufactured in Türkiye and delivered nationwide.' };

export default function EnglishHome() {
  return <main>
    <SiteHeader locale="en"/>
    <section className="hero">
      <HeroSlider label="Festival Prefabrik projects" locale="en"/>
      <div className="hero-shade"/><div className="hero-grid"/>
    </section>

    <section className="stats wrap">{[['20+','Years of experience'],['500+','Completed buildings'],['81','Cities delivered'],['10 years','Structural warranty']].map(([value,label],index)=><div key={label}><b>{value}</b><span>{label}</span>{index<3&&<i/>}</div>)}</section>

    <section className="intro wrap" id="categories"><div><span className="section-kicker">Structures for your lifestyle</span><h2>More than a building,<br/><em>a new beginning.</em></h2></div><p>Together, we plan the building best suited to your needs, budget and land—bringing aesthetics, durability and energy efficiency under one roof.</p></section>

    <section className="category-groups wrap">{categoryGroups.map(group=><article className="category-group" key={group.title}>
      <header className="category-group-head"><span>{group.number}</span><div><h3>{group.title}</h3><p>{group.description}</p></div></header>
      <div className="subcategory-grid">{group.categories.map(category=><a className="subcategory" href={category.href} key={category.title}><Image src={category.image} fill alt={`${group.title} ${category.title}`} sizes="(max-width: 800px) 100vw, 20vw"/><div className="subcategory-shade"/><div className="subcategory-copy"><h4>{category.title}</h4><span>Explore models <ChevronRightIcon/></span></div></a>)}</div>
    </article>)}</section>

    <CompletedProjectsCarousel locale="en"/>

    <section className="why" id="why"><div className="why-image"><Image src="https://www.festivalprefabrik.com/resim.asp?urun=222&w=1100&h=900&nrs=urun" fill alt="Steel house" sizes="50vw"/></div><div className="why-copy"><span className="section-kicker light">Why Festival Prefabrik?</span><h2>Living spaces<br/>built on trust.</h2><p>We manufacture your building for generations of safe and comfortable use.</p><div className="benefits">{[['Earthquake resistant','Engineered structural systems compliant with standards.'],['Fast production','Manufacturing and assembly completed in weeks.'],['Thermal insulation','Comfortable and energy-efficient in every season.'],['Transparent process','Clear communication from planning to delivery.']].map(([title,text])=><div key={title}><span><CheckIcon/></span><section><b>{title}</b><small>{text}</small></section></div>)}</div></div></section>

    <section className="process" id="process"><div className="wrap"><span className="section-kicker">Your home in four steps</span><h2>From concept to turnkey.</h2><div className="steps">{[['01','Discovery'],['02','Design'],['03','Production'],['04','Assembly & delivery']].map(([number,title],index)=><div key={number}><b>{number}</b><span>{title}</span>{index<3&&<ArrowRightIcon/>}</div>)}</div></div></section>

    <section className="cta" id="contact"><div className="wrap cta-inner"><div><span className="section-kicker light">Let’s discuss your project</span><h2>Let’s bring your dream<br/>building to life.</h2><p>Our team will listen to your needs and prepare a free preliminary proposal.</p></div><div className="contact-box"><span>Call us now</span><a href={`tel:${data.mobile.replaceAll(' ','')}`}>{data.mobile}</a><small>Weekdays 08:30 — 18:00</small><a className="white-btn" href="/en/quote">Request a quote <ArrowRightIcon/></a></div></div></section>
    <SiteFooter locale="en"/>
  </main>;
}
