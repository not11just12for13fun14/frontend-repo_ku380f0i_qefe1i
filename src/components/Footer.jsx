export default function Footer() {
  return (
    <footer className="py-10 bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-400">
        <div>© {new Date().getFullYear()} Your Name • B.Tech CSE Portfolio</div>
        <div className="mt-2">Built with love for code, coffee, and clean UI.</div>
      </div>
    </footer>
  )
}
