'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRightIcon, Bars3Icon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline';
import data from '@/data/site.json';

export default function SiteHeader({locale='tr'}){
  const [open,setOpen]=useState(false);
  const en=locale==='en';
  return <><div className="topline"><span>Festival Prefabrik</span><span>Türkiye'nin her yerine üretim ve montaj</span><a href={`tel:${data.mobile.replaceAll(' ','')}`}><PhoneIcon/> {data.mobile}</a></div><header className="inner-header">
    <a href={en?'/en':'/'} className="logo"><Image className="brand-logo" src="/brand/festival-prefabrik-logo.png" width={514} height={152} alt="Festival Prefabrik" priority/></a>
    <nav className={open?'open':''}><a href={en?'/en/models':'/modeller'}>{en?'Models':'Modeller'}</a><a href={en?'/en/#why':'/#neden'}>{en?'Why Festival?':'Neden Festival?'}</a><a href={en?'/en/#projects':'/#projeler'}>{en?'Projects':'Projeler'}</a><a href={en?'/en/#process':'/#surec'}>{en?'Process':'Süreç'}</a><a href={en?'/en/#contact':'/#iletisim'}>{en?'Contact':'İletişim'}</a></nav>
    <div className="lang-switch" aria-label="Dil seçimi"><a className={!en?'active':''} href="/"><img src="/brand/flag-tr.svg" alt=""/><span>TR</span></a><a className={en?'active':''} href="/en"><img src="/brand/flag-gb.svg" alt=""/><span>EN</span></a></div>
    <a className="header-cta" href={en?'/en/quote':'/teklif'}>{en?'Get a quote':'Ücretsiz teklif'} <ArrowRightIcon/></a><button className="menu-btn" onClick={()=>setOpen(!open)} aria-label={en?'Open menu':'Menüyü aç'}>{open?<XMarkIcon/>:<Bars3Icon/>}</button>
  </header></>;
}
