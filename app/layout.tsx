export const metadata: Metadata = {
  title: 'RAF Signature Events',
  description: 'Luxe Makeup Masterclasses & Events by RAF.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://your-vercel-domain.vercel.app'),
  themeColor: [
    { color: '#FFF7ED', media: '(prefers-color-scheme: light)' },
    { color: '#0B132B', media: '(prefers-color-scheme: dark)' }
  ],
  openGraph: {
    title: 'RAF Signature Events',
    description: 'Luxe Makeup Masterclasses & Events by RAF.',
    type: 'website',
    images: ['/og']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAF Signature Events',
    description: 'Luxe Makeup Masterclasses & Events by RAF.',
    images: ['/og']
  }
}
