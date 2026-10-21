import type { Metadata } from 'next';
import { site } from './content';
export function pageMeta(title:string,description:string,path:string,image='/opengraph-image.png'):Metadata{const socialTitle=title.startsWith('Neustar')?title:`${title} | Neustar`;return {title,description,alternates:{canonical:path},openGraph:{title:socialTitle,description,url:path,type:'website',siteName:site.name,locale:'en_NG',images:[{url:image,alt:title}]},twitter:{card:'summary_large_image',title:socialTitle,description,images:[image]}}}
export function breadcrumbSchema(items:{name:string;path:string}[]){return {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{name:'Home',path:'/'},...items].map((x,i)=>({'@type':'ListItem',position:i+1,name:x.name,item:site.url+x.path}))}}
