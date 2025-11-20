import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute top-20 -right-40 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 text-xs text-blue-200 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" /> Live • B.Tech CSE Portfolio
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">a CSE student</span><br />who builds things for the web.
          </h1>
          <p className="mt-5 text-slate-300/90 max-w-xl">
            I love full‑stack development, systems, and solving real problems with code. Explore my projects, coursework, and experiences blending college life with personal passion.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-xl bg-white/10 ring-1 ring-white/15 text-white hover:bg-white/15 transition">Get in touch</a>
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black/20">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
        </div>
      </div>
    </section>
  )
}
