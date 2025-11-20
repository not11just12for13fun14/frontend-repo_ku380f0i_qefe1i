import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/80 p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">Let’s build something</h2>
              <p className="text-blue-100/90 mt-2">Feel free to reach out for collaborations, internships, or just a chat.</p>
              <div className="mt-6 flex items-center gap-3">
                <a href="mailto:you@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white"><Mail className="w-4 h-4"/> Email</a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20"><Github className="w-4 h-4"/> GitHub</a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20"><Linkedin className="w-4 h-4"/> LinkedIn</a>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
              <form className="grid gap-4">
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Name</label>
                  <input className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Message</label>
                  <textarea rows="4" className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Say hello..." />
                </div>
                <button type="button" className="justify-self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
