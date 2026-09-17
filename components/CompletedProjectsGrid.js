'use client';

import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const imageNumbers = [1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,24,25,26,27,28,29,30,31,32,33,34];
const images = imageNumbers.map(number => `/media/tamamlananprojeler/${number}.jpg`);

export default function CompletedProjectsGrid({ locale = 'tr' }) {
  const en = locale === 'en';
  const [selected, setSelected] = useState(null);
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

  return <><div className="completed-project-grid">
    {images.map((src, index) => <button className="completed-project-grid-card" type="button" onClick={() => setSelected(index)} aria-label={en ? `Enlarge completed project ${index + 1}` : `${index + 1}. tamamlanmış projeyi büyüt`} key={src}>
      <Image src={src} fill alt={en ? `Festival Prefabrik completed living space ${index + 1}` : `Festival Prefabrik tamamlanmış yaşam alanı ${index + 1}`} sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"/>
      <span>{String(index + 1).padStart(2, '0')}</span>
    </button>)}
  </div>
  {selected !== null && <div className="project-lightbox" role="dialog" aria-modal="true" aria-label={en ? 'Completed project image' : 'Tamamlanmış proje görseli'} onMouseDown={event => event.target === event.currentTarget && setSelected(null)}>
    <button className="lightbox-close" type="button" onClick={() => setSelected(null)} aria-label={en ? 'Close' : 'Kapat'}><XMarkIcon/></button>
    <button className="lightbox-arrow previous" type="button" onClick={showPrevious} aria-label={en ? 'Previous image' : 'Önceki görsel'}><ChevronLeftIcon/></button>
    <div className="lightbox-image"><Image src={images[selected]} fill priority alt={en ? `Festival Prefabrik completed living space ${selected + 1}` : `Festival Prefabrik tamamlanmış yaşam alanı ${selected + 1}`} sizes="95vw"/></div>
    <span className="lightbox-count">{selected + 1} / {images.length}</span>
    <button className="lightbox-arrow next" type="button" onClick={showNext} aria-label={en ? 'Next image' : 'Sonraki görsel'}><ChevronRightIcon/></button>
  </div>}</>;
}
