const defaultVideo = '/media/festival-model-reel.mp4';

export default function ModelVideo({ src = defaultVideo, youtubeId, locale = 'tr' }) {
  if (youtubeId) return <div className="model-video"><iframe src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&playsinline=1&rel=0&controls=0&disablekb=1&fs=0&iv_load_policy=3`} title={locale === 'en' ? 'Festival Prefabrik model video' : 'Festival Prefabrik model videosu'} allow="autoplay; encrypted-media"/></div>;
  return <div className="model-video">
    <video controls autoPlay muted loop playsInline preload="auto" poster="/media/festival-model-reel-poster.jpg" aria-label={locale === 'en' ? 'Festival Prefabrik promotional video' : 'Festival Prefabrik tanıtım videosu'}>
      <source src={src} type="video/mp4"/>
      <a href={src}>{locale === 'en' ? 'Watch video' : 'Videoyu izle'}</a>
    </video>
  </div>;
}
