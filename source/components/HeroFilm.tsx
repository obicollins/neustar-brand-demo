'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
type Connection = { saveData?:boolean;effectiveType?:string };
export function HeroFilm(){
 const video=useRef<HTMLVideoElement>(null);const [load,setLoad]=useState(false);const [ready,setReady]=useState(false);const [failed,setFailed]=useState(false);
 useEffect(()=>{
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');const connection=(navigator as Navigator&{connection?:Connection}).connection;
  let timer:ReturnType<typeof setTimeout>;
  const begin=()=>{clearTimeout(timer);if(motion.matches||connection?.saveData||['slow-2g','2g'].includes(connection?.effectiveType||'')){setLoad(false);setReady(false);return}timer=setTimeout(()=>setLoad(true),600)};
  if(document.readyState==='complete')begin();else window.addEventListener('load',begin,{once:true});
  motion.addEventListener('change',begin);
  return()=>{clearTimeout(timer);window.removeEventListener('load',begin);motion.removeEventListener('change',begin)};
 },[]);
 useEffect(()=>{if(!load||!video.current)return;const player=video.current;
  const visibility=()=>{const rect=player.getBoundingClientRect();if(document.hidden||rect.bottom<=0||rect.top>=window.innerHeight)player.pause();else player.play().catch(()=>{})};
  const observer=new IntersectionObserver(visibility,{threshold:.1});observer.observe(player);
  document.addEventListener('visibilitychange',visibility);visibility();
  return()=>{observer.disconnect();document.removeEventListener('visibilitychange',visibility)};
 },[load]);
 return <div className="hero-film" aria-hidden="true"><Image src="/images/hero-poster.webp" alt="" fill priority sizes="100vw" className="hero-poster"/>{load&&!failed&&<video ref={video} className={ready?'is-ready':''} autoPlay loop muted playsInline preload="none" poster="/images/hero-poster.webp" onPlaying={()=>setReady(true)} onError={()=>setFailed(true)}><source src="/media/neustar-circuit-film.mp4" type="video/mp4"/></video>}<div className="hero-scrim"/></div>
}
