import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/70 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between p-3">
            <a href="#top" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow ring-1 ring-white/20" />
              <span className="text-white font-semibold tracking-tight">CSE Portfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-200/80 hover:text-white transition-colors text-sm">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="mailto:you@example.com" className="p-2 rounded-lg hover:bg-white/10 text-slate-200/80 hover:text-white transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-slate-200/80 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-slate-200/80 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>

            <button className="md:hidden p-2 rounded-lg hover:bg-white/10 text-slate-200/80 hover:text-white transition-colors" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 p-3 grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-100 text-sm">
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
