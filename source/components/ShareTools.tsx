'use client';
import { useState } from 'react';
import { Icon } from './Brand';
export function ShareTools({title,url}:{title:string;url:string}){const [message,setMessage]=useState('');const encoded=encodeURIComponent(url);const text=encodeURIComponent(title);
 async function share(){try{if(navigator.share){await navigator.share({title,url});return}await navigator.clipboard.writeText(url);setMessage('Link copied');}catch(e){if((e as Error).name!=='AbortError')setMessage('Use one of the share links below.')} }
 return <div className="share-tools"><span>Share this idea</span><div><button type="button" onClick={share}><Icon name="share" size={18}/>Share</button><a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">in</a><a href={`https://x.com/intent/post?text=${text}&url=${encoded}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X">𝕏</a><a href={`https://wa.me/?text=${text}%20${encoded}`} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp">WA</a></div><small role="status" aria-live="polite">{message}</small></div>
}
