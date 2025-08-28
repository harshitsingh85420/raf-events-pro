'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Header() {
  // default: LIGHT (no dark class initially)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('raf-theme')
    const on = saved ? saved === 'dark' : false
    setDark(on)
    document.documentElement.classList.toggle('dark', on)
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('raf-theme', next ? 'dark' : 'light')
  }

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 dark:bg-slate-800/40 border-b border-amber-200/60 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="RAF" width={44} height={44} className="rounded-full ring-2 ring-amber-300 object-cover" />
          <div>
            <p className="font-semibold">RAF Signature Events</p>
            <p className="text-xs opacity-70">Celebrity Masterclasses • Bridal • Editorial</p>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/admin" className="text-sm underline decoration-amber-400 underline-offset-4">
            Admin
          </Link>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-300 to-rose-400 text-slate-900"
          >
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </header>
  )
}
