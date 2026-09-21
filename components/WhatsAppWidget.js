import data from '@/data/site.json';

export default function WhatsAppWidget(){
  const rawNumber=(data.whatsapp||'').replace(/\D/g,'');
  const number=rawNumber.startsWith('0')?`90${rawNumber.slice(1)}`:rawNumber;
  const content=<><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3a12.7 12.7 0 0 0-11 19.1L3.2 29l7-1.8A12.8 12.8 0 1 0 16 3Zm0 23.2c-2 0-3.9-.5-5.6-1.5l-.4-.2-4.1 1.1L7 21.7l-.3-.4a10.3 10.3 0 1 1 9.3 4.9Zm5.7-7.7c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-1.9-.9-3.2-1.7-4.5-3.8-.3-.5.3-.5.9-1.6.1-.2 0-.5 0-.7l-1-2.4c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.8c.2.2 2.6 4 6.4 5.6 2.4 1 3.4 1.1 4.6.9.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.2-.3-.5-.4-.9-.5Z"/></svg><span>WhatsApp</span></>;
  if(!number)return <div className="whatsapp-widget" role="button" tabIndex="0" aria-label="WhatsApp ile iletişime geç">{content}</div>;
  return <a className="whatsapp-widget" href={`https://wa.me/${number}`} target="_blank" rel="noreferrer" aria-label="WhatsApp ile iletişime geç">{content}</a>;
}
