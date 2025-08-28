import Image from 'next/image'

export function Footer() {
  const y = new Date().getFullYear()
  return (
    <footer className="border-t border-amber-200/60 dark:border-white/10 py-8 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" width={32} height={32} alt="" className="rounded-full ring-1 ring-amber-300" />
          <p className="text-sm opacity-80">© {y} RAF Signature Events</p>
        </div>
        <a
          href="https://instagram.com/rafsignatureevents"
          target="_blank"
          className="text-sm underline decoration-amber-400 underline-offset-4"
        >
          Instagram
        </a>
      </div>
    </footer>
  )
}
