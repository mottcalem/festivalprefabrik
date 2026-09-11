import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import data from '@/data/site.json';

export const metadata={title:'Prefabrik Ev Modelleri | Festival Prefabrik',description:'Tek ve çift katlı prefabrik ev modellerimizi, planlarını ve teknik özelliklerini inceleyin.'};
export default async function Models({searchParams}){const {kategori}=await searchParams;const projects=kategori?data.projects.filter(p=>p.category===kategori):data.projects;return <main><SiteHeader/><section className="listing-hero"><div className="wrap"><span className="section-kicker">Festival Prefabrik modelleri</span><h1>Size uygun yaşam alanını<br/><em>birlikte bulalım.</em></h1><p>Farklı ihtiyaçlara göre planlanan, dayanıklı ve enerji verimli prefabrik ev modellerimizi keşfedin.</p></div></section><section className="models-list wrap">{projects.map(p=><article key={p.slug}><a href={`/modeller/${p.slug}`}><div className="model-cover"><Image src={p.image} fill alt={p.title} sizes="(max-width:700px) 100vw, 50vw"/><span>{p.code}</span></div><div className="model-row"><div><h2>{p.title}</h2><p>{p.area} · {p.floors}</p></div><i><ArrowRightIcon/></i></div></a></article>)}{projects.length===0&&<p>Bu kategoride henüz model bulunmuyor.</p>}</section><SiteFooter/></main>}
