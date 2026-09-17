'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRightIcon, Bars3Icon, ChevronDownIcon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline';
import data from '@/data/site.json';

export default function SiteHeader({locale='tr'}){
  const [open,setOpen]=useState(false);
  const en=locale==='en';
  return <><div className="topline"><span>{en?'Niksar / Tokat':'Niksar / Tokat'}</span><span>{en?'Production and installation across Türkiye':"Türkiye'nin her yerine üretim ve montaj"}</span><a href={`tel:${data.phone.replaceAll(' ','')}`}><PhoneIcon/> {data.phone}</a><a href={`tel:${data.mobile.replaceAll(' ','')}`}>{data.mobile}</a></div><header className="inner-header">
    <a href={en?'/en':'/'} className="logo"><Image className="brand-logo" src="/brand/festival-prefabrik-logo.png" width={514} height={152} alt="Festival Prefabrik" priority/></a>
    <nav className={open?'open':''}>
      <div className="nav-group"><a href={en?'/en/about':'/festival-prefabrik/kurumsal'}>{en?'Festival Prefabricated':'Festival Prefabrik'} <ChevronDownIcon/></a><div className="dropdown"><a href={en?'/en/about':'/festival-prefabrik/kurumsal'}>{en?'Corporate':'Kurumsal'}</a><a href={en?'/en/history':'/festival-prefabrik/tarihce'}>{en?'History':'Tarihçe'}</a></div></div>
      <div className="nav-group"><a href={en?'/en/models?kategori=prefabrik-tek-kat':'/modeller?kategori=prefabrik-tek-kat'}>{en?'Prefabricated House':'Prefabrik Ev'} <ChevronDownIcon/></a><div className="dropdown"><a href={en?'/en/models?kategori=prefabrik-tek-kat':'/modeller?kategori=prefabrik-tek-kat'}>{en?'Single Storey':'Tek Kat'}</a><a href={en?'/en/models?kategori=prefabrik-cift-kat':'/modeller?kategori=prefabrik-cift-kat'}>{en?'Two Storey':'Çift Kat'}</a><a href={en?'/en/models?kategori=konteyner':'/modeller?kategori=konteyner'}>{en?'Container':'Konteyner'}</a></div></div>
      <div className="nav-group"><a href={en?'/en/models?kategori=celik-tek-kat':'/modeller?kategori=celik-tek-kat'}>{en?'Steel House':'Çelik Ev'} <ChevronDownIcon/></a><div className="dropdown"><a href={en?'/en/models?kategori=celik-tek-kat':'/modeller?kategori=celik-tek-kat'}>{en?'Single Storey':'Tek Kat'}</a><a href={en?'/en/models?kategori=celik-cift-kat':'/modeller?kategori=celik-cift-kat'}>{en?'Two Storey':'Çift Kat'}</a></div></div>
      <a href={en?'/en/projects':'/projeler'}>{en?'Projects':'Projeler'}</a><a href={en?'/en/contact':'/iletisim'}>{en?'Contact':'İletişim'}</a>
    </nav>
    <div className="lang-switch" aria-label="Dil seçimi"><a className={!en?'active':''} href="/"><img src="/brand/flag-tr.svg" alt=""/><span>TR</span></a><a className={en?'active':''} href="/en"><img src="/brand/flag-gb.svg" alt=""/><span>EN</span></a></div>
    <a className="header-cta" href={en?'/en/quote':'/teklif'}>{en?'Get a quote':'Ücretsiz teklif'} <ArrowRightIcon/></a><button className="menu-btn" onClick={()=>setOpen(!open)} aria-label={en?'Open menu':'Menüyü aç'}>{open?<XMarkIcon/>:<Bars3Icon/>}</button>
  </header></>;
}
