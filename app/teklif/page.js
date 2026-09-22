'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { CheckCircleIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import data from '@/data/site.json';

function QuoteForm(){
 const params=useSearchParams();const initial=params.get('model')||'';const [state,setState]=useState('idle');const [error,setError]=useState('');
 const whatsappNumber=(data.whatsapp||'').replace(/\D/g,'').replace(/^0/,'90');
 function submit(e){e.preventDefault();setState('loading');setError('');const payload=Object.fromEntries(new FormData(e.currentTarget));const message=['Merhaba, Festival Prefabrik için teklif almak istiyorum.','',`Ad soyad: ${payload.name}`,`Telefon: ${payload.phone}`,payload.email&&`E-posta: ${payload.email}`,payload.city&&`Şehir: ${payload.city}`,payload.model&&`İlgilendiğim model: ${payload.model}`,payload.message&&`Proje notu: ${payload.message}`].filter(Boolean).join('\n');window.location.href=`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;}
 return <main><SiteHeader/><section className="quote-page"><div className="wrap quote-layout"><div className="quote-intro"><span className="section-kicker">Ücretsiz fiyat teklifi</span><h1>Projenizi anlatalım,<br/><em>birlikte planlayalım.</em></h1><p>Formu doldurun; uzman ekibimiz ihtiyacınızı değerlendirip en kısa sürede sizi arasın.</p><div className="quote-contact"><span>Doğrudan görüşmek isterseniz</span><a href={`tel:${data.mobile.replaceAll(' ','')}`}>{data.mobile}</a><small>Hafta içi 08:30 — 18:00</small></div></div>
 <div className="quote-card"><form onSubmit={submit}><div className="form-title"><b>İletişim bilgileriniz</b><span>* zorunlu alanlar</span></div><label>Ad soyad *<input name="name" required minLength="2" placeholder="Adınız ve soyadınız"/></label><div className="form-grid"><label>Telefon *<input name="phone" required minLength="10" inputMode="tel" placeholder="05__ ___ __ __"/></label><label>E-posta<input name="email" type="email" placeholder="ornek@email.com"/></label></div><div className="form-grid"><label>Şehir<input name="city" placeholder="Yapının kurulacağı şehir"/></label><label>İlgilendiğiniz model<select name="model" defaultValue={initial}><option value="">Henüz karar vermedim</option>{data.projects.map(p=><option key={p.slug} value={p.title}>{p.title}</option>)}</select></label></div><label>Proje notunuz<textarea name="message" rows="5" placeholder="Arazi, ihtiyaçlarınız ve beklentileriniz hakkında bilgi verebilirsiniz."/></label><label className="consent"><input type="checkbox" required/> <span>Bilgilerimin teklif talebimin yanıtlanması amacıyla kullanılmasını kabul ediyorum.</span></label>{error&&<p className="form-error">{error}</p>}<button className="form-submit" disabled={state==='loading'}>{state==='loading'?'WhatsApp açılıyor…':<>WhatsApp ile teklif iste <PaperAirplaneIcon/></>}</button></form></div></div></section><SiteFooter/></main>
}

export default function QuotePage(){return <Suspense fallback={<div className="quote-loading">Form hazırlanıyor…</div>}><QuoteForm/></Suspense>}
