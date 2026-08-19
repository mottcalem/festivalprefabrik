import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, HomeModernIcon } from '@heroicons/react/24/outline';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import data from '@/data/site.json';

export function generateStaticParams(){return data.projects.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}){const {slug}=await params;const p=data.projects.find(x=>x.slug===slug);return p?{title:`${p.title} | Festival Prefabrik`,description:p.description}:{}}
export default async function ModelDetail({params}){const {slug}=await params;const p=data.projects.find(x=>x.slug===slug);if(!p)notFound();const others=data.projects.filter(x=>x.slug!==slug).slice(0,3);return <main><SiteHeader/>
  <section className="detail-top wrap"><a className="back" href="/modeller"><ArrowLeftIcon/> Tüm modeller</a><div className="detail-title"><div><span className="section-kicker">{p.code} · Tek katlı prefabrik</span><h1>{p.title}</h1></div><p>{p.description}</p></div></section>
  <section className="detail-visual wrap"><div className="detail-image"><Image src={p.image} fill priority alt={p.title} sizes="(max-width:800px) 100vw, 75vw"/></div><aside><span>Model özeti</span>{[['Net alan',p.area],['Oda planı',p.rooms],['Banyo',p.bathrooms],['Kat',p.floors],['Tahmini teslim',p.delivery]].map(([k,v])=><div key={k}><small>{k}</small><b>{v}</b></div>)}<a href={`/teklif?model=${encodeURIComponent(p.title)}`}>Bu model için teklif al <ArrowRightIcon/></a></aside></section>
  <section className="detail-content wrap"><div><span className="section-kicker">Model hakkında</span><h2>Kompakt plan,<br/><em>yüksek yaşam kalitesi.</em></h2><p>{p.description} Proje, arazi koşullarına ve kullanıcı ihtiyaçlarına göre cephe, oda yerleşimi ve malzeme seçenekleriyle özelleştirilebilir.</p><div className="detail-note"><HomeModernIcon/><span><b>Size özel uyarlanabilir</b><small>Plan ve dış cephe tercihleri ihtiyaçlarınıza göre revize edilir.</small></span></div></div><div className="included"><span className="section-kicker">Standart kapsam</span><h3>Bu modelde neler var?</h3>{p.features.map(f=><div key={f}><CheckIcon/>{f}</div>)}</div></section>
  <section className="detail-cta" id="teklif"><div className="wrap"><div><span className="section-kicker light">Ücretsiz ön çalışma</span><h2>{p.title} için<br/>size özel fiyat alın.</h2></div><div><p>Araziniz ve beklentileriniz hakkında birkaç bilgi paylaşın, uzman ekibimiz sizinle iletişime geçsin.</p><a href={`/teklif?model=${encodeURIComponent(p.title)}`}>Teklif formunu doldur <ArrowRightIcon/></a></div></div></section>
  <section className="related wrap"><div className="section-head"><div><span className="section-kicker">Diğer modeller</span><h2>Alternatifleri inceleyin.</h2></div><a href="/modeller">Tüm modeller <ArrowRightIcon/></a></div><div className="related-grid">{others.map(x=><a href={`/modeller/${x.slug}`} key={x.slug}><div><Image src={x.image} fill alt={x.title} sizes="33vw"/></div><h3>{x.title}</h3><p>{x.area} · {x.rooms}</p></a>)}</div></section><SiteFooter/>
  </main>}
