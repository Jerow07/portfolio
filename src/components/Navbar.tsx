import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'
import { useLanguage } from '../context/LanguageContext'

const navItems = [
  { id: 'inicio',       labelEs: 'Inicio',      labelEn: 'Home' },
  { id: 'proyectos',    labelEs: 'Proyectos',   labelEn: 'Projects' },
  { id: 'experiencia',  labelEs: 'Experiencia', labelEn: 'Experience' },
  { id: 'tecnologias',  labelEs: 'Tecnologías', labelEn: 'Technologies' },
  { id: 'certificaciones', labelEs: 'Certificaciones', labelEn: 'Certifications' },
  { id: 'contacto',     labelEs: 'Contacto',    labelEn: 'Contact' },
]

export function Navbar() {
  const { language } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(255,255,255,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Dark mode override */}
        <style>{`
          .dark nav { background: ${scrolled ? 'rgba(10,10,10,0.85)' : 'transparent'} !important; border-bottom-color: rgba(255,255,255,0.06) !important; }
        `}</style>

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo('inicio')} className="font-['Space_Grotesk'] font-bold text-lg text-gray-900 dark:text-white tracking-tight">
            JP<span className="text-yellow-400">.</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => {
              const label = language === 'es' ? item.labelEs : item.labelEn
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                    ${active === item.id
                      ? 'text-yellow-600 dark:text-yellow-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                >
                  {label}
                  {active === item.id && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-yellow-400"
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              className="md:hidden p-2 text-gray-600 dark:text-gray-400"
              onClick={() => setOpen(o => !o)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-x-0 top-16 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-zinc-800 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navItems.map(item => {
                const label = language === 'es' ? item.labelEs : item.labelEn
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors
                      ${active === item.id
                        ? 'bg-yellow-400/10 text-yellow-600 dark:text-yellow-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-900'}`}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
