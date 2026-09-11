const defaultVideo = '/media/festival-model-reel.mp4';

export default function ModelVideo({ src = defaultVideo, locale = 'tr' }) {
  return <div className="model-video">
    <video controls autoPlay muted loop playsInline preload="auto" poster="/media/festival-model-reel-poster.jpg" aria-label={locale === 'en' ? 'Festival Prefabrik promotional video' : 'Festival Prefabrik tanıtım videosu'}>
      <source src={src} type="video/mp4"/>
      <a href={src}>{locale === 'en' ? 'Watch video' : 'Videoyu izle'}</a>
    </video>
  </div>;
}
