'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function ModelGallery({ images, title, locale = 'tr' }) {
  const [active, setActive] = useState(0);
  const dialog = useRef(null);
  const opener = useRef(null);
  const touchStart = useRef(null);
  const english = locale === 'en';
  const move = direction => setActive(index => (index + direction + images.length) % images.length);
  const close = () => dialog.current.close();
  const arrows = () => images.length > 1 && <>
    <button className="gallery-arrow previous" type="button" onClick={() => move(-1)} aria-label={english ? 'Previous photo' : 'Önceki fotoğraf'}><ChevronLeftIcon/></button>
    <button className="gallery-arrow next" type="button" onClick={() => move(1)} aria-label={english ? 'Next photo' : 'Sonraki fotoğraf'}><ChevronRightIcon/></button>
  </>;
  return <div className="model-gallery" role="region" aria-roledescription="carousel" aria-label={english ? 'Model photos' : 'Model fotoğrafları'} onKeyDown={event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1); }
  }} onTouchStart={event => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={event => {
    if (touchStart.current !== null) { const distance = touchStart.current - event.changedTouches[0].clientX; if (Math.abs(distance) > 50) move(distance > 0 ? 1 : -1); }
    touchStart.current = null;
  }}>
    <div className="gallery-window">
      <div className="gallery-track" style={{ transform: `translateX(-${active * 100}%)` }}>
        {images.map((src, index) => <button key={src} ref={index === active ? opener : null} type="button" className="detail-image" tabIndex={index === active ? 0 : -1} aria-hidden={index !== active} aria-label={english ? 'Enlarge photo' : 'Görseli büyüt'} onClick={() => dialog.current.showModal()}>
          <Image src={src} width={1000} height={1250} priority={index === 0} alt={`${title} — ${index + 1}`} sizes="(max-width:800px) 100vw, 42vw"/>
        </button>)}
      </div>
    </div>
    {arrows()}
    <span className="gallery-count" aria-live="polite">{active + 1} / {images.length}</span>
    <dialog ref={dialog} className="model-lightbox" aria-label={title} onClose={() => opener.current?.focus()} onClick={event => { if (event.target === event.currentTarget) close(); }}>
      <button className="gallery-close" type="button" onClick={close} aria-label={english ? 'Close' : 'Kapat'}><XMarkIcon/></button>
      <Image src={images[active]} width={1000} height={1250} alt={`${title} — ${active + 1}`} sizes="95vw"/>
      {arrows()}
      <span className="gallery-count" aria-live="polite">{active + 1} / {images.length}</span>
    </dialog>
  </div>;
}
