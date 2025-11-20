import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Smart Notes',
    desc: 'A markdown notes app with full-text search and offline sync.',
    tech: ['React', 'IndexedDB', 'Worker'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Campus Connect',
    desc: 'Event discovery and RSVP for college communities.',
    tech: ['FastAPI', 'MongoDB', 'JWT'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Vision Classifier',
    desc: 'Image classification pipeline with transfer learning.',
    tech: ['Python', 'PyTorch'],
    github: 'https://github.com/',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_20%,rgba(34,197,94,0.08),transparent_40%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-bold text-white">Projects</h2>
        <p className="text-blue-100/90 mt-2">A selection of things I’ve built recently.</p>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <p className="text-blue-100/90 text-sm mt-1">{p.desc}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="px-2 py-1 rounded-md text-xs bg-white/10 text-blue-200">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 text-sm">
                  <Github className="w-4 h-4" /> Code
                </a>
                <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm">
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
