import { Code2, Trophy, School, Cpu, Rocket, GraduationCap, CalendarCheck } from 'lucide-react'

export default function Sections() {
  return (
    <>
      {/* About */}
      <section id="about" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">About me</h2>
              <p className="mt-4 text-slate-300/90">
                I'm a Computer Science and Engineering undergrad who enjoys building side projects, leading hackathon teams, and digging deep into how things work. I mix coursework with personal exploration across web, AI, and systems.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
                  <div className="text-white font-medium">Year</div>
                  <div className="text-slate-300/90">3rd year (B.Tech)</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
                  <div className="text-white font-medium">Focus</div>
                  <div className="text-slate-300/90">Full‑stack, ML, Systems</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
                  <div className="text-white font-medium">Location</div>
                  <div className="text-slate-300/90">India</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
                  <div className="text-white font-medium">Looking for</div>
                  <div className="text-slate-300/90">Internships & collabs</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, title: 'CSE @ B.Tech', desc: 'Strong CS fundamentals and hands‑on labs.' },
                { icon: Cpu, title: 'Systems & Dev', desc: 'Linux, Git, Docker, backend APIs.' },
                { icon: Code2, title: 'Web & Apps', desc: 'React, Node, Python, databases.' },
                { icon: Rocket, title: 'Hackathons', desc: 'Rapid prototyping and teamwork.' },
              ].map((f) => (
                <div key={f.title} className="p-5 rounded-2xl bg-white/5 ring-1 ring-white/10 text-white">
                  <f.icon className="mb-3 text-cyan-300" />
                  <div className="font-semibold">{f.title}</div>
                  <div className="text-slate-300/90 text-sm">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Education</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
              <div className="flex items-center gap-3 text-white font-medium">
                <School className="text-cyan-300" /> B.Tech in Computer Science & Engineering
              </div>
              <div className="mt-2 text-slate-300/90 text-sm">2022 – 2026 • Your College Name</div>
              <ul className="mt-4 space-y-2 text-slate-300/90 text-sm list-disc list-inside">
                <li>Core courses: DSA, OS, DBMS, CN, OOP, AI/ML</li>
                <li>Electives: Cloud, Cybersecurity, NLP</li>
                <li>Clubs: Coding club, Robotics, GDSC</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
              <div className="flex items-center gap-3 text-white font-medium">
                <CalendarCheck className="text-cyan-300" /> Highlights
              </div>
              <ul className="mt-4 space-y-2 text-slate-300/90 text-sm list-disc list-inside">
                <li>Top 5 in college-level hackathon</li>
                <li>Open-source contributions on GitHub</li>
                <li>Teaching assistant for DSA lab</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold text-white">Projects</h2>
            <a href="#contact" className="text-sm text-cyan-300 hover:text-white">Need a collaborator?</a>
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <a key={i} href="#" className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                <div className="aspect-video bg-gradient-to-tr from-cyan-500/20 to-blue-500/10 group-hover:to-blue-500/20 transition" />
                <div className="p-5">
                  <div className="text-white font-semibold">Project {i}</div>
                  <div className="text-slate-300/90 text-sm">Short description of what this project does and the tech used.</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Skills</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
            {[
              'C/C++', 'Python', 'JavaScript', 'React', 'Node', 'FastAPI', 'MongoDB', 'Git', 'Docker', 'Linux', 'Tailwind', 'Framer Motion', 'Cloud Basics', 'NLP/ML Basics', 'DSA', 'OS/DBMS/CN'
            ].map((s) => (
              <div key={s} className="px-4 py-2 rounded-xl bg-white/5 ring-1 ring-white/10 text-slate-200">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Achievements</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              { title: 'Hackathon Finalist', desc: 'Built an AI-powered study planner in 24 hours.', icon: Trophy },
              { title: 'Open Source', desc: 'Contributed to 5+ repos with bugfixes and docs.', icon: Code2 },
              { title: 'Campus Leader', desc: 'Organized coding meetups and workshops.', icon: School },
            ].map(({ title, desc, icon: Icon }) => (
              <div key={title} className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 text-white">
                <Icon className="mb-3 text-cyan-300" />
                <div className="font-semibold">{title}</div>
                <div className="text-slate-300/90 text-sm">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 bg-white/5 ring-1 ring-white/10">
            <h2 className="text-3xl font-bold text-white">Let’s connect</h2>
            <p className="mt-2 text-slate-300/90">Reach out for internships, collaborations, or to say hi.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="mailto:you@example.com" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition">Email</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-xl bg-white/10 ring-1 ring-white/15 text-white hover:bg-white/15 transition">GitHub</a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-xl bg-white/10 ring-1 ring-white/15 text-white hover:bg-white/15 transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
