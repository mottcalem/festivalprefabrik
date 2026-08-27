import Image from 'next/image';
import { ArrowRightIcon, CheckIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import data from '@/data/site.json';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import HeroSlider from '@/components/HeroSlider';
import CompletedProjectsCarousel from '@/components/CompletedProjectsCarousel';

const categoryGroups = [
  {
    title: 'Prefabrik Ev',
    number: '01',
    description: 'Hızlı, verimli ve ihtiyaca göre şekillenen prefabrik çözümler.',
    categories: [
      { title: 'Tek Kat', image: '/media/tamamlananprojeler/1.jpg', href: '/modeller?kategori=prefabrik-tek-kat' },
      { title: 'Çift Kat', image: '/media/tamamlananprojeler/10.jpg', href: '/modeller?kategori=prefabrik-cift-kat' },
      { title: 'Konteyner', image: '/media/tamamlananprojeler/18.jpg', href: '/modeller?kategori=konteyner' },
    ],
  },
  {
    title: 'Çelik Ev',
    number: '02',
    description: 'Dayanıklı, modern ve uzun ömürlü çelik yapı çözümleri.',
    categories: [
      { title: 'Tek Kat', image: '/media/tamamlananprojeler/24.jpg', href: '/modeller?kategori=celik-tek-kat' },
      { title: 'Çift Kat', image: '/media/tamamlananprojeler/29.jpg', href: '/modeller?kategori=celik-cift-kat' },
      { title: 'Bungalov', image: '/media/tamamlananprojeler/34.jpg', href: '/modeller?kategori=bungalov' },
    ],
  },
];

export default function Home() {
  return <main>
    <SiteHeader/>

    <section className="hero">
      <HeroSlider/>
      <div className="hero-shade"/><div className="hero-grid"/>
      <div className="hero-copy wrap">
        <div className="eyebrow"><span/> {data.hero.eyebrow}</div>
        <h1>Yeni bir yaşam,<br/><em>düşündüğünüzden</em><br/>daha yakın.</h1>
        <p>{data.hero.description}</p>
        <div className="hero-actions"><a className="primary" href="#modeller">Modelleri keşfet <ArrowRightIcon/></a></div>
      </div>
      <div className="hero-note"><b>01</b><span>Size özel tasarım<br/>Anahtar teslim çözüm</span></div>
    </section>

    <section className="stats wrap">{data.stats.map((s,i)=><div key={s.label}><b>{s.value}</b><span>{s.label}</span>{i<data.stats.length-1&&<i/>}</div>)}</section>

    <section className="intro wrap" id="modeller">
      <div><span className="section-kicker">Yaşamınıza uygun yapılar</span><h2>Sadece bir yapı değil,<br/><em>yeni bir başlangıç.</em></h2></div>
      <p>İhtiyacınıza, bütçenize ve arazinize en uygun yapıyı birlikte planlıyoruz. Her projede estetik, dayanıklılık ve enerji verimliliğini aynı çatı altında buluşturuyoruz.</p>
    </section>

    <section className="category-groups wrap">{categoryGroups.map(group => <article className="category-group" key={group.title}>
      <header className="category-group-head"><span>{group.number}</span><div><h3>{group.title}</h3><p>{group.description}</p></div></header>
      <div className="subcategory-grid">{group.categories.map(category => <a className="subcategory" href={category.href} key={category.title}>
        <Image src={category.image} fill alt={`${group.title} ${category.title}`} sizes="(max-width: 800px) 100vw, 20vw"/>
        <div className="subcategory-shade"/><div className="subcategory-copy"><h4>{category.title}</h4><span>Modelleri incele <ChevronRightIcon/></span></div>
      </a>)}</div>
    </article>)}</section>

    <CompletedProjectsCarousel/>

    <section className="why" id="neden"><div className="why-image"><Image src="https://www.festivalprefabrik.com/resim.asp?urun=222&w=1100&h=900&nrs=urun" fill alt="Çelik ev projesi" sizes="50vw"/></div><div className="why-copy">
      <span className="section-kicker light">Neden Festival Prefabrik?</span><h2>Güvenle yükselen<br/>yaşam alanları.</h2><p>Yapınızı sadece bugün için değil, nesiller boyu güvenle kullanmanız için üretiyoruz.</p>
      <div className="benefits">{[['Depreme dayanıklı','Mühendislik standartlarına uygun taşıyıcı sistem.'],['Hızlı üretim','Haftalar içinde üretim ve montaj avantajı.'],['Isı ve ses yalıtımı','Dört mevsim konforlu, enerji verimli yaşam.'],['Şeffaf süreç','Planlamadan teslimata her adımda bilgilendirme.']].map(([a,b])=><div key={a}><span><CheckIcon/></span><section><b>{a}</b><small>{b}</small></section></div>)}</div>
    </div></section>

    <section className="process" id="surec"><div className="wrap"><span className="section-kicker light">4 adımda yeni eviniz</span><h2>Fikirden anahtar teslime.</h2><div className="steps">{[['01','Keşif & ihtiyaç'],['02','Projelendirme'],['03','Üretim'],['04','Montaj & teslim']].map(([n,t],i)=><div key={n}><b>{n}</b><span>{t}</span>{i<3&&<ArrowRightIcon/>}</div>)}</div></div></section>

    <section className="cta" id="iletisim"><div className="cta-shape"/><div className="wrap cta-inner"><div><span className="section-kicker light">Projenizi konuşalım</span><h2>Hayalinizdeki yapıya<br/>birlikte hayat verelim.</h2><p>Uzman ekibimiz ihtiyaçlarınızı dinlesin, size özel ücretsiz ön çalışma hazırlasın.</p></div><div className="contact-box"><span>Bizi hemen arayın</span><a href={`tel:${data.mobile.replaceAll(' ','')}`}>{data.mobile}</a><small>Hafta içi 08:30 — 18:00</small><a className="white-btn" href="/teklif">Teklif formunu doldur <ArrowRightIcon/></a></div></div></section>

    <SiteFooter/>
  </main>
}
