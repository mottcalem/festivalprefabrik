const siteUrl = 'https://www.festivalprefabrik.com';
const brandName = 'Festival Prefabrik';
const defaultOgImage = '/media/slider.jpeg';

export function absoluteUrl(path = '/') {
  return new URL(path, siteUrl).toString();
}

export function pageMetadata({ title, description, path, trPath, enPath, locale = 'tr', image = defaultOgImage }) {
  const canonical = absoluteUrl(path);
  const languages = {};
  if (trPath) languages['tr-TR'] = absoluteUrl(trPath);
  if (enPath) languages['en-US'] = absoluteUrl(enPath);
  if (trPath) languages['x-default'] = absoluteUrl(trPath);

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : 'tr_TR',
      url: canonical,
      siteName: brandName,
      title: `${title} | ${brandName}`,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: brandName }],
    },
    twitter: { card: 'summary_large_image', title: `${title} | ${brandName}`, description, images: [image] },
  };
}

export { brandName, defaultOgImage, siteUrl };
