import ModelGallery from '@/components/ModelGallery';
import ModelVideo from '@/components/ModelVideo';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, HomeModernIcon } from '@heroicons/react/24/outline';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import data from '@/data/site.json';
import enData from '@/data/site.en.json';
import modelVideos from '@/data/modelVideos';
import {pageMetadata} from '@/lib/seo';

export function generateStaticParams(){return data.projects.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}){const {slug}=await params;const p=data.projects.find(x=>x.slug===slug);const enProject=enData.projects.find(x=>x.trSlug===p?.slug);return p?pageMetadata({title:p.title,description:p.description,path:`/modeller/${p.slug}`,trPath:`/modeller/${p.slug}`,enPath:enProject?`/en/models/${enProject.slug}`:undefined,image:p.image}):{}}
export default async function ModelDetail({params}){const {slug}=await params;const p=data.projects.find(x=>x.slug===slug);if(!p)notFound();const others=data.projects.filter(x=>x.slug!==slug&&x.category===p.category).slice(0,3);return <main><SiteHeader/>
  <section className="detail-top wrap"><a className="back" href="/modeller"><ArrowLeftIcon/> Tüm modeller</a><div className="detail-title"><div><span className="section-kicker">{p.code} · {p.floors}</span><h1>{p.title}</h1></div><p>{p.description}</p></div></section>
  <section className="detail-visual wrap"><ModelGallery key={p.slug} images={[...new Set([...(p.images?.length ? p.images : [p.image]), p.plan].filter(Boolean))]} title={p.title} locale="tr"/><aside className="model-summary"><span>Model özeti</span>{[['Model alanı',p.area],['Oda planı',p.rooms],['Banyo',p.bathrooms],['Kat',p.floors],['Tahmini teslim',p.delivery]].filter(([,v])=>v).map(([k,v])=><div className={v === p.area ? "summary-area" : "summary-row"} key={k}><small>{k}</small><b>{v}</b></div>)}<a href={`/teklif?model=${encodeURIComponent(p.title)}`}>Bu model için teklif al <ArrowRightIcon/></a></aside><ModelVideo src={p.video} youtubeId={modelVideos[p.code]} locale="tr"/></section>
  <section className="detail-content wrap"><div><span className="section-kicker">Model hakkında</span><h2>Kompakt plan,<br/><em>yüksek yaşam kalitesi.</em></h2><p>{p.description} Proje, arazi koşullarına ve kullanıcı ihtiyaçlarına göre cephe, oda yerleşimi ve malzeme seçenekleriyle özelleştirilebilir.</p><div className="detail-note"><HomeModernIcon/><span><b>Size özel uyarlanabilir</b><small>Plan ve dış cephe tercihleri ihtiyaçlarınıza göre revize edilir.</small></span></div></div></section>
  <section className="detail-cta" id="teklif"><div className="wrap"><div><span className="section-kicker light">Ücretsiz ön çalışma</span><h2>{p.title} için<br/>size özel fiyat alın.</h2></div><div><p>Araziniz ve beklentileriniz hakkında birkaç bilgi paylaşın, uzman ekibimiz sizinle iletişime geçsin.</p><a href={`/teklif?model=${encodeURIComponent(p.title)}`}>Teklif formunu doldur <ArrowRightIcon/></a></div></div></section>
  <section className="related wrap"><div className="section-head"><div><span className="section-kicker">Diğer modeller</span><h2>Alternatifleri inceleyin.</h2></div><a href="/modeller">Tüm modeller <ArrowRightIcon/></a></div><div className="related-grid">{others.map(x=><a href={`/modeller/${x.slug}`} key={x.slug}><div><Image src={x.image} fill alt={x.title} sizes="33vw"/></div><h3>{x.title}</h3><p>{x.area} · {x.floors}</p></a>)}</div></section><SiteFooter/>
  </main>}
