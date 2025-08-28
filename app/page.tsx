export default function Home() {
  return (
    <section className="py-14">
      <h1 className="text-5xl md:text-6xl font-[Playfair_Display] leading-[1.05] tracking-tight">
        Luxe Makeup <span className="bg-gradient-to-r from-amber-300 to-rose-400 bg-clip-text text-transparent">Masterclasses</span> & Events
      </h1>
      <p className="mt-4 opacity-80">
        Red-carpet techniques. Hands-on practice. Limited seats.
      </p>
      <div className="mt-6 flex gap-3">
        <a href="#upcoming" className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-300 to-rose-400 text-slate-900">See Upcoming</a>
        <a href="#" className="px-4 py-2 rounded-xl border border-amber-300/70">Gallery</a>
      </div>
    </section>
  )
}
