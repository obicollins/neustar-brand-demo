import Link from 'next/link';
import type { ReactNode } from 'react';
import geometry from '@/lib/brand-geometry.json';
import { site } from '@/lib/content';
export function Mark({className=''}:{className?:string}) {return <svg className={`brand-symbol ${className}`} viewBox="0 0 412 412" fill="none" fillRule="evenodd" aria-hidden="true"><path d={geometry.symbolPrimary} fill="currentColor"/><path d={geometry.symbolAccent} fill="var(--accent,#d6ec9c)"/></svg>}
export function Wordmark({compact=false}:{compact?:boolean}){return <Link href="/" className="wordmark" aria-label="Neustar Technology Company home"><img className="brand-lockup" src={compact?'/brand/neustar-nav-wordmark-light.svg':'/brand/neustar-wordmark-light.svg'} alt="" width={compact?1040:1224} height={compact?232:412} decoding="async"/><span className="brand-registration">RC: {site.registrationNumber}</span></Link>}
export function Icon({name='arrow',size=24}:{name?:string;size?:number}){
 const paths:Record<string,ReactNode>={
 arrow:<path d="M4 12h16m-6-6 6 6-6 6"/>,north:<path d="m6 18 12-12M7 6h11v11"/>,
 code:<><rect x="2.5" y="4" width="19" height="16" rx="2"/><path d="m9 9-3 3 3 3m6-6 3 3-3 3"/></>,
 ai:<><path d="M4 7h6l4 10h6M4 17h6L14 7h6"/><circle cx="3" cy="7" r="2"/><circle cx="3" cy="17" r="2"/><circle cx="21" cy="7" r="2"/><circle cx="21" cy="17" r="2"/></>,
 infrastructure:<><rect x="3" y="3" width="18" height="7" rx="1.5"/><rect x="3" y="14" width="18" height="7" rx="1.5"/><path d="M7 6.5h.01M7 17.5h.01M12 6.5h5M12 17.5h5M8 10v4m8-4v4"/></>,
 hardware:<><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v5m6-5v5M9 18v5m6-5v5M1 9h5m-5 6h5m12-6h5m-5 6h5M10 10h4v4h-4z"/></>,
 display:<><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 22h8m-4-5v5m-5-8V7l5 3-5 4Zm11-7v7"/></>,
 data:<><path d="M4 3v18h18M7 16l4-5 4 2 6-8"/><circle cx="11" cy="11" r="1"/><circle cx="15" cy="13" r="1"/></>,
 security:<><path d="m12 2 9 4v6c0 5-5 8-9 10-4-2-9-5-9-10V6l9-4Z"/><path d="m8 12 3 3 5-6"/></>,
 mobility:<><circle cx="5" cy="19" r="2"/><circle cx="19" cy="5" r="2"/><path d="M7 19h7a4 4 0 0 0 0-8h-4a3 3 0 0 1 0-6h7"/></>,
 check:<path d="m5 12 4 4L19 6"/>,close:<path d="m5 5 14 14M19 5 5 19"/>,menu:<path d="M3 7h18M3 16h18"/>,
 pause:<path d="M9 5v14M15 5v14"/>,play:<path d="m8 4 12 8-12 8V4Z"/>,plus:<path d="M12 4v16M4 12h16"/>,
 mail:<><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/></>,phone:<path d="m8 3 3 5-3 3a16 16 0 0 0 5 5l3-3 5 3v4c0 1-1 2-2 2A19 19 0 0 1 2 5c0-1 1-2 2-2h4Z"/>,pin:<><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
 share:<><circle cx="18" cy="4" r="2"/><circle cx="5" cy="12" r="2"/><circle cx="18" cy="20" r="2"/><path d="m7 11 9-6M7 13l9 6"/></>,star:<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z"/>,
 };
 return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]||paths.arrow}</svg>
}
