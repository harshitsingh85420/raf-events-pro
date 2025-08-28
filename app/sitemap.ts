import { serverClient } from '../lib/supabaseServer'

export default async function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-vercel-domain.vercel.app'
  const s = serverClient()
  const { data } = await s.from('events').select('slug').eq('is_published', true)
  return [
    { url: `${base}/`, priority: 1.0 },
    ...(data || []).map((e: any) => ({ url: `${base}/events/${e.slug}`, priority: 0.8 }))
  ]
}
