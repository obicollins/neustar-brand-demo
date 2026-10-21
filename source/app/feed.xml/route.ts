import { articles, author } from '@/lib/articles';
import { site } from '@/lib/content';
export const dynamic='force-static';
const escape=(s:string)=>s.replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]!));
export function GET(){return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Ideas from Neustar</title><link>${site.url}/ideas/</link><description>Thoughtful perspectives on technology, design and systems.</description><language>en-ng</language>${articles.map(a=>`<item><title>${escape(a.title)}</title><link>${site.url}/ideas/${a.slug}/</link><guid>${site.url}/ideas/${a.slug}/</guid><description>${escape(a.description)}</description><pubDate>${new Date(a.published).toUTCString()}</pubDate></item>`).join('')}</channel></rss>`,{headers:{'Content-Type':'application/rss+xml; charset=utf-8'}})}
