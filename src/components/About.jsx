export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-blue-100/90 leading-relaxed">
              I'm a B.Tech Computer Science and Engineering student passionate about software craftsmanship. I enjoy solving problems, contributing to open source, and exploring systems, web, and AI.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-blue-300">Languages</p>
                <p className="text-white mt-1">C/C++, Python, JavaScript</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-blue-300">Frameworks</p>
                <p className="text-white mt-1">React, FastAPI, Node</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-blue-300">Interests</p>
                <p className="text-white mt-1">Web, Backend, ML</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-blue-300">Tools</p>
                <p className="text-white mt-1">Git, Docker, Linux</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10">
              <p className="text-blue-300 text-sm">Personal</p>
              <p className="text-white mt-2">Beyond code, I love playing football, sketching UI ideas, and writing short tech blogs to simplify complex topics for peers.</p>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10">
              <p className="text-blue-300 text-sm">College Life</p>
              <p className="text-white mt-2">Active member of coding clubs, hackathons enthusiast, and volunteer tutor helping juniors with DSA and web fundamentals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
