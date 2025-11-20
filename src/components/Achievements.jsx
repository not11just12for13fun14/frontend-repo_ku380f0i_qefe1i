import { Award, Trophy, Star } from 'lucide-react'

const items = [
  { icon: Trophy, title: 'Hackathon Finalist', detail: 'Top 5 in college-wide hackathon among 120+ teams.' },
  { icon: Star, title: 'Open Source Contributor', detail: 'Merged PRs in two community projects.' },
  { icon: Award, title: 'GPA 9.1+', detail: 'Consistent academic performance in core CS subjects.' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_80%,rgba(99,102,241,0.10),transparent_40%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-bold text-white">Achievements</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, detail }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Icon className="w-6 h-6 text-indigo-300" />
              <p className="text-white font-semibold mt-3">{title}</p>
              <p className="text-blue-100/90 text-sm mt-1">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
