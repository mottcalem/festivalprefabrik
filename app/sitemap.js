import data from '@/data/site.json';
import enData from '@/data/site.en.json';
import { absoluteUrl } from '@/lib/seo';

const staticPages = [
  ['', 'weekly', 1],
  ['/festival-prefabrik/kurumsal', 'monthly', 0.8],
  ['/festival-prefabrik/tarihce', 'monthly', 0.7],
  ['/modeller', 'weekly', 0.9],
  ['/projeler', 'weekly', 0.8],
  ['/iletisim', 'monthly', 0.8],
  ['/teklif', 'monthly', 0.8],
];

const englishPages = [
  ['/en', 'weekly', 1],
  ['/en/about', 'monthly', 0.8],
  ['/en/history', 'monthly', 0.7],
  ['/en/models', 'weekly', 0.9],
  ['/en/projects', 'weekly', 0.8],
  ['/en/contact', 'monthly', 0.8],
  ['/en/quote', 'monthly', 0.8],
];

export default function sitemap() {
  const lastModified = new Date();
  return [
    ...staticPages.map(([path, changeFrequency, priority]) => ({ url: absoluteUrl(path || '/'), lastModified, changeFrequency, priority })),
    ...englishPages.map(([path, changeFrequency, priority]) => ({ url: absoluteUrl(path), lastModified, changeFrequency, priority })),
    ...data.projects.map(project => ({ url: absoluteUrl(`/modeller/${project.slug}`), lastModified, changeFrequency: 'monthly', priority: 0.7 })),
    ...enData.projects.map(project => ({ url: absoluteUrl(`/en/models/${project.slug}`), lastModified, changeFrequency: 'monthly', priority: 0.7 })),
  ];
}
