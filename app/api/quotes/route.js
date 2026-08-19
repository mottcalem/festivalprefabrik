import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const filePath=path.join(process.cwd(),'data','submissions.json');
export async function POST(request){
  try{
    const body=await request.json();
    const name=String(body.name||'').trim();
    const phone=String(body.phone||'').trim();
    if(name.length<2||phone.length<10)return NextResponse.json({message:'Ad soyad ve geçerli telefon numarası zorunludur.'},{status:400});
    const safe={id:`T-${Date.now()}`,createdAt:new Date().toISOString(),name,phone,email:String(body.email||'').trim(),city:String(body.city||'').trim(),model:String(body.model||'').trim(),message:String(body.message||'').trim(),status:'new'};
    let records=[];try{records=JSON.parse(await fs.readFile(filePath,'utf8'))}catch{}
    records.unshift(safe);await fs.writeFile(filePath,JSON.stringify(records,null,2),'utf8');
    return NextResponse.json({ok:true,id:safe.id});
  }catch{return NextResponse.json({message:'Talebiniz kaydedilemedi. Lütfen tekrar deneyin.'},{status:500})}
}
