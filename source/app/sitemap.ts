import type { MetadataRoute } from 'next';
import { services, site } from '@/lib/content';
import { articles } from '@/lib/articles';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return [...['/','/about/','/services/','/ideas/','/contact/','/authors/tobey-okafor/','/privacy/'].map(path=>({url:site.url+path})),...services.map(s=>({url:site.url+'/services/'+s.slug+'/'})),...articles.map(a=>({url:site.url+'/ideas/'+a.slug+'/',lastModified:new Date(a.published)}))]}
