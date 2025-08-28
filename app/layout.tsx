import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RAF Signature Events',
  description: 'Luxe Makeup Masterclasses & Events by RAF.',
  themeColor: [
    { color: '#FFF7ED', media: '(prefers-color-scheme: light)' },
    { color: '#0B132B', media: '(prefers-color-scheme: dark)' }
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Light by default (we'll add a real toggle later)
  return (
    <html lang="en">
      <body className="font-[Inter] bg-[var(--cream)] text-slate-900 dark:bg-navy-950 dark:text-slate-100">
        <main className="max-w-6xl mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  )
}
