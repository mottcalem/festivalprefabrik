'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRightIcon, Bars3Icon, CheckIcon, ChevronRightIcon, MapPinIcon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline';
import data from '@/data/site.json';

const Logo = () => <a href="#" className="logo" aria-label="Festival Prefabrik ana sayfa"><Image className="brand-logo" src="/brand/festival-prefabrik-logo.png" width={514} height={152} alt="Festival Prefabrik" priority/></a>;

export default function Home() {
  const [menu, setMenu] = useState(false);
  return <main>
    <div className="topline"><span><MapPinIcon/> Niksar / Tokat</span><span>Türkiye'nin her yerine üretim ve montaj</span><a href={`tel:${data.mobile.replaceAll(' ','')}`}><PhoneIcon/> {data.mobile}</a></div>
    <header>
      <Logo/>
      <nav className={menu ? 'open' : ''}>
        <a href="#modeller">Modeller</a><a href="#neden">Neden Festival?</a><a href="#projeler">Projeler</a><a href="#surec">Süreç</a><a href="#iletisim">İletişim</a>
      </nav>
      <div className="lang-switch" aria-label="Dil seçimi"><a className="active" href="/"><img src="/brand/flag-tr.svg" alt=""/><span>TR</span></a><a href="/en"><img src="/brand/flag-gb.svg" alt=""/><span>EN</span></a></div>
      <a className="header-cta" href="/teklif">Ücretsiz teklif <ArrowRightIcon/></a>
      <button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Menüyü aç">{menu?<XMarkIcon/>:<Bars3Icon/>}</button>
    </header>

    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={data.hero.image} aria-label="Festival Prefabrik projeleri">
        <source src="/media/slider-festival.mp4?v=2" type="video/mp4"/>
      </video>
      <div className="hero-shade"/><div className="hero-grid"/>
      <div className="hero-copy wrap">
        <div className="eyebrow"><span/> {data.hero.eyebrow}</div>
        <h1>Yeni bir yaşam,<br/><em>düşündüğünüzden</em><br/>daha yakın.</h1>
        <p>{data.hero.description}</p>
        <div className="hero-actions"><a className="primary" href="#modeller">Modelleri keşfet <ArrowRightIcon/></a><a className="play" href="#surec"><span>▶</span> Nasıl üretiyoruz?</a></div>
      </div>
      <div className="hero-note"><b>01</b><span>Size özel tasarım<br/>Anahtar teslim çözüm</span></div>
    </section>

    <section className="stats wrap">{data.stats.map((s,i)=><div key={s.label}><b>{s.value}</b><span>{s.label}</span>{i<data.stats.length-1&&<i/>}</div>)}</section>

    <section className="intro wrap" id="modeller">
      <div><span className="section-kicker">Yaşamınıza uygun yapılar</span><h2>Sadece bir yapı değil,<br/><em>yeni bir başlangıç.</em></h2></div>
      <p>İhtiyacınıza, bütçenize ve arazinize en uygun yapıyı birlikte planlıyoruz. Her projede estetik, dayanıklılık ve enerji verimliliğini aynı çatı altında buluşturuyoruz.</p>
    </section>

    <section className="category-grid wrap">{data.categories.map((c,i)=><article className="category" key={c.title}>
      <Image src={c.image} fill alt={c.title} sizes="(max-width: 800px) 100vw, 33vw"/><div className="card-shade"/><span className="num">0{i+1}</span><div className="tag">{c.tag}</div>
      <div className="card-copy"><h3>{c.title}</h3><p>{c.text}</p><a href="#projeler">Modelleri incele <ChevronRightIcon/></a></div>
    </article>)}</section>

    <section className="why" id="neden"><div className="why-image"><Image src="https://www.festivalprefabrik.com/resim.asp?urun=222&w=1100&h=900&nrs=urun" fill alt="Çelik ev projesi" sizes="50vw"/></div><div className="why-copy">
      <span className="section-kicker light">Neden Festival Prefabrik?</span><h2>Güvenle yükselen<br/>yaşam alanları.</h2><p>Yapınızı sadece bugün için değil, nesiller boyu güvenle kullanmanız için üretiyoruz.</p>
      <div className="benefits">{[['Depreme dayanıklı','Mühendislik standartlarına uygun taşıyıcı sistem.'],['Hızlı üretim','Haftalar içinde üretim ve montaj avantajı.'],['Isı ve ses yalıtımı','Dört mevsim konforlu, enerji verimli yaşam.'],['Şeffaf süreç','Planlamadan teslimata her adımda bilgilendirme.']].map(([a,b])=><div key={a}><span><CheckIcon/></span><section><b>{a}</b><small>{b}</small></section></div>)}</div>
    </div></section>

    <section className="projects wrap" id="projeler"><div className="section-head"><div><span className="section-kicker">Öne çıkan modeller</span><h2>Hayalinize en yakın<br/><em>evi bulun.</em></h2></div><a href="/modeller">Tüm modeller <ArrowRightIcon/></a></div>
      <div className="project-grid">{data.projects.map(p=><article key={p.title}><a href={`/modeller/${p.slug}`}><div className="project-img"><Image src={p.image} fill alt={p.title} sizes="(max-width: 700px) 100vw, 25vw"/><span>Detayları gör <ArrowRightIcon/></span></div><div className="project-info"><h3>{p.title}</h3><p>{p.area} <i/> {p.rooms}</p></div></a></article>)}</div>
    </section>

    <section className="process" id="surec"><div className="wrap"><span className="section-kicker light">4 adımda yeni eviniz</span><h2>Fikirden anahtar teslime.</h2><div className="steps">{[['01','Keşif & ihtiyaç'],['02','Projelendirme'],['03','Üretim'],['04','Montaj & teslim']].map(([n,t],i)=><div key={n}><b>{n}</b><span>{t}</span>{i<3&&<ArrowRightIcon/>}</div>)}</div></div></section>

    <section className="cta" id="iletisim"><div className="cta-shape"/><div className="wrap cta-inner"><div><span className="section-kicker light">Projenizi konuşalım</span><h2>Hayalinizdeki yapıya<br/>birlikte hayat verelim.</h2><p>Uzman ekibimiz ihtiyaçlarınızı dinlesin, size özel ücretsiz ön çalışma hazırlasın.</p></div><div className="contact-box"><span>Bizi hemen arayın</span><a href={`tel:${data.mobile.replaceAll(' ','')}`}>{data.mobile}</a><small>Hafta içi 08:30 — 18:00</small><a className="white-btn" href="/teklif">Teklif formunu doldur <ArrowRightIcon/></a></div></div></section>

    <footer><div className="wrap footer-main"><div><Logo/><p>Modern, güvenli ve ulaşılabilir yaşam alanları üretiyoruz.</p></div><div><b>Hızlı erişim</b><a href="#modeller">Modeller</a><a href="#neden">Kurumsal</a><a href="#projeler">Projeler</a></div><div><b>İletişim</b><a href={`tel:${data.phone.replaceAll(' ','')}`}>{data.phone}</a><a href={`mailto:${data.email}`}>{data.email}</a><span>Niksar / Tokat</span></div></div><div className="copyright wrap"><span>© 2026 Festival Prefabrik. Tüm hakları saklıdır.</span><span>Güvenle tasarlandı.</span></div></footer>
  </main>
}
