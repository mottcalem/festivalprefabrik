'use client';

import Image from 'next/image';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const slidesByLocale = {
  tr: [
    { src: '/media/slider.jpeg', eyebrow: 'Fabrika / Marka Gücü', title: 'Gücümüzü Üretimden, Geleceğimizi Büyüterek İnşa Ediyoruz.', accent: 'Geleceğimizi Büyüterek', description: '20 yıllık tecrübemiz, güçlü üretim altyapımız ve büyüyen hedeflerimizle Festival Prefabrik, yaşam alanlarının geleceğini kendi fabrikasında şekillendiriyor.' },
    { src: '/media/slider2.jpeg', eyebrow: 'Üretim / İmalat', title: 'Her Detay, Festival Prefabrik’te Üretilir.', accent: 'Festival Prefabrik’te', description: 'Tasarımdan üretime, yapı elemanlarından son dokunuşlara kadar tüm süreçleri kendi bünyemizde yönetiyor; kaliteyi baştan sona kendi kontrolümüz altında tutuyoruz.' },
    { src: '/media/slider3.jpeg', eyebrow: 'Tamamlanan Projeler / 20 Yıllık Tecrübe', title: '20 Yılda Binlerce Ev, Tek Çatı Altında Kocaman Bir Aile.', accent: 'Kocaman Bir Aile', description: '20 yıllık tecrübemizle binlerce aileye yaşam alanı kazandırdık; bugün binlerce evde, binlerce metrekarelik yaşamın mutluluğuna ortak olan büyük bir Festival ailesiyiz.' },
    { src: '/media/tamamlananprojeler/1.jpg', eyebrow: 'Ürün Ailesi / Çelik • Prefabrik • Bungalov', title: 'Hayaliniz Ne Olursa Olsun, Festival’de Bir Karşılığı Var.', accent: 'Festival’de Bir Karşılığı Var', description: 'Çelik evden prefabrik yapılara, bungalovlardan farklı yaşam çözümlerine uzanan geniş ürün ailemizle, her ihtiyaca ve her hayale uygun yaşam alanları tasarlıyoruz.' },
    { src: '/media/festival-slider3245.jpeg', eyebrow: 'Festival Prefabrik / Yaşam Alanları', title: 'Doğayla İç İçe, Hayalinizdeki Yaşam.', accent: 'Hayalinizdeki Yaşam', description: 'Doğanın huzurunu evinizin konforuyla buluşturan yaşam alanlarını Festival Prefabrik ile keşfedin.' },
  ],
  en: [
    { src: '/media/slider.jpeg', eyebrow: 'Factory / Brand Strength', title: 'Our Strength Comes from Production, Our Future from Growth.', accent: 'Our Future from Growth', description: 'With 20 years of experience, a strong production infrastructure and growing ambitions, Festival Prefabrik shapes the future of living spaces in its own factory.' },
    { src: '/media/slider2.jpeg', eyebrow: 'Production / Manufacturing', title: 'Every Detail Is Produced at Festival Prefabrik.', accent: 'Festival Prefabrik', description: 'From design and production to structural elements and finishing touches, we manage every stage in-house and keep quality under our control from start to finish.' },
    { src: '/media/slider3.jpeg', eyebrow: 'Completed Projects / 20 Years of Experience', title: 'Thousands of Homes in 20 Years, One Big Family Under One Roof.', accent: 'One Big Family', description: 'Over 20 years, we have created living spaces for thousands of families and become part of the happiness lived across thousands of homes.' },
    { src: '/media/tamamlananprojeler/1.jpg', eyebrow: 'Product Family / Steel • Prefabricated • Bungalow', title: 'Whatever You Imagine, Festival Has a Solution.', accent: 'Festival Has a Solution', description: 'From steel and prefabricated houses to bungalows and diverse living solutions, our broad product family offers a space for every need and every dream.' },
    { src: '/media/festival-slider3245.jpeg', eyebrow: 'Festival Prefabrik / Living Spaces', title: 'Close to Nature, Close to Your Dream Home.', accent: 'Your Dream Home', description: 'Discover living spaces that bring the peace of nature together with the comfort of home at Festival Prefabrik.' },
  ],
};

export default function HeroSlider({ label = 'Festival Prefabrik projeleri', locale = 'tr' }) {
  const slides = slidesByLocale[locale] || slidesByLocale.tr;
  const [activeSlide, setActiveSlide] = useState(0);
  const showPrevious = () => setActiveSlide(current => (current - 1 + slides.length) % slides.length);
  const showNext = () => setActiveSlide(current => (current + 1) % slides.length);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide(current => (current + 1) % slides.length), 7000);
    return () => window.clearInterval(timer);
  }, []);

  return <>
    <div className="hero-slider" aria-label={label} aria-roledescription="carousel">
      {slides.map((slide, index) => <div className={`hero-slide${index === activeSlide ? ' active' : ''}`} aria-hidden={index !== activeSlide} key={slide.src}>
        <Image className={`hero-media hero-media-${index}`} src={slide.src} fill priority={index === 0} alt="" sizes="100vw"/>
      </div>)}
    </div>
    <div className="hero-copy hero-slider-copy wrap" key={`${locale}-${activeSlide}`}>
      <div className="eyebrow"><span/> {slides[activeSlide].eyebrow}</div>
      <h1>{slides[activeSlide].title.split(slides[activeSlide].accent)[0]}<em>{slides[activeSlide].accent}</em>{slides[activeSlide].title.split(slides[activeSlide].accent)[1]}</h1>
      <p>{slides[activeSlide].description}</p>
      <div className="hero-actions"><a className="primary" href={locale === 'en' ? '#categories' : '#modeller'}>{locale === 'en' ? 'Explore models' : 'Modelleri keşfet'} <ArrowRightIcon/></a></div>
    </div>
    <div className="hero-note"><b>{String(activeSlide + 1).padStart(2, '0')}</b><span>{locale === 'en' ? <>Custom design<br/>Turnkey solutions</> : <>Size özel tasarım<br/>Anahtar teslim çözüm</>}</span></div>
    <button className="hero-slider-arrow previous" type="button" onClick={showPrevious} aria-label={locale === 'en' ? 'Previous slide' : 'Önceki slayt'}><ChevronLeftIcon/></button>
    <button className="hero-slider-arrow next" type="button" onClick={showNext} aria-label={locale === 'en' ? 'Next slide' : 'Sonraki slayt'}><ChevronRightIcon/></button>
    <div className="hero-pagination" aria-label="Slider">
      {slides.map((slide, index) => <button type="button" className={index === activeSlide ? 'active' : ''} aria-label={locale === 'en' ? `Go to slide ${index + 1}` : `${index + 1}. slayta git`} aria-current={index === activeSlide ? 'true' : undefined} onClick={() => setActiveSlide(index)} key={slide.src}/>)}
    </div>
  </>;
}
