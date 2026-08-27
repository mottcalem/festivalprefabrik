'use client';

import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const slides = [
  { src: '/media/slider.jpeg' },
  { src: '/media/slider2.jpeg' },
  { src: '/media/slider3.jpeg' },
];

export default function HeroSlider({ label = 'Festival Prefabrik projeleri', locale = 'tr' }) {
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
    <button className="hero-slider-arrow previous" type="button" onClick={showPrevious} aria-label={locale === 'en' ? 'Previous slide' : 'Önceki slayt'}><ChevronLeftIcon/></button>
    <button className="hero-slider-arrow next" type="button" onClick={showNext} aria-label={locale === 'en' ? 'Next slide' : 'Sonraki slayt'}><ChevronRightIcon/></button>
    <div className="hero-pagination" aria-label="Slider">
      {slides.map((slide, index) => <button type="button" className={index === activeSlide ? 'active' : ''} aria-label={locale === 'en' ? `Go to slide ${index + 1}` : `${index + 1}. slayta git`} aria-current={index === activeSlide ? 'true' : undefined} onClick={() => setActiveSlide(index)} key={slide.src}/>)}
    </div>
  </>;
}
