'use client';

import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';

const imageNumbers = [1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,24,25,26,27,28,29,30,31,32,33,34];
const images = imageNumbers.map(number => `/media/tamamlananprojeler/${number}.jpg`);

export default function CompletedProjectsCarousel({ locale = 'tr' }) {
  const isEnglish = locale === 'en';
  const trackRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const moveCarousel = direction => trackRef.current?.scrollBy({ left: direction * trackRef.current.clientWidth * .8, behavior: 'smooth' });
  const showPrevious = () => setSelected(current => (current - 1 + images.length) % images.length);
  const showNext = () => setSelected(current => (current + 1) % images.length);

  useEffect(() => {
    if (selected === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = event => {
      if (event.key === 'Escape') setSelected(null);
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selected]);

  return <section className="completed-projects" aria-labelledby={`completed-projects-title-${locale}`}>
    <div className="wrap completed-projects-head">
      <div><span className="section-kicker">{isEnglish ? 'Projects brought to life' : 'Hayata geçirdiğimiz projeler'}</span><h2 id={`completed-projects-title-${locale}`}>{isEnglish ? <>Completed <em>Living Spaces</em></> : <>Tamamlanmış <em>Yaşam Alanları</em></>}</h2></div>
      <div className="carousel-controls">
        <button type="button" onClick={() => moveCarousel(-1)} aria-label={isEnglish ? 'Previous images' : 'Önceki görseller'}><ChevronLeftIcon/></button>
        <button type="button" onClick={() => moveCarousel(1)} aria-label={isEnglish ? 'Next images' : 'Sonraki görseller'}><ChevronRightIcon/></button>
      </div>
    </div>
    <div className="completed-track" ref={trackRef}>
      {images.map((src, index) => <button className="completed-card" type="button" onClick={() => setSelected(index)} aria-label={isEnglish ? `Enlarge completed project ${index + 1}` : `${index + 1}. tamamlanmış projeyi büyüt`} key={src}>
        <Image src={src} fill alt={isEnglish ? `Festival Prefabrik completed living space ${index + 1}` : `Festival Prefabrik tamamlanmış yaşam alanı ${index + 1}`} sizes="(max-width: 600px) 82vw, 420px"/>
        <span>{String(index + 1).padStart(2, '0')}</span>
      </button>)}
    </div>
    {selected !== null && <div className="project-lightbox" role="dialog" aria-modal="true" aria-label={isEnglish ? 'Completed project image' : 'Tamamlanmış proje görseli'} onMouseDown={event => event.target === event.currentTarget && setSelected(null)}>
      <button className="lightbox-close" type="button" onClick={() => setSelected(null)} aria-label={isEnglish ? 'Close' : 'Kapat'}><XMarkIcon/></button>
      <button className="lightbox-arrow previous" type="button" onClick={showPrevious} aria-label={isEnglish ? 'Previous image' : 'Önceki görsel'}><ChevronLeftIcon/></button>
      <div className="lightbox-image"><Image src={images[selected]} fill priority alt={isEnglish ? `Festival Prefabrik completed living space ${selected + 1}` : `Festival Prefabrik tamamlanmış yaşam alanı ${selected + 1}`} sizes="95vw"/></div>
      <span className="lightbox-count">{selected + 1} / {images.length}</span>
      <button className="lightbox-arrow next" type="button" onClick={showNext} aria-label={isEnglish ? 'Next image' : 'Sonraki görsel'}><ChevronRightIcon/></button>
    </div>}
  </section>;
}
