import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const links = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'jeronimoparra@outlook.com',
    href: 'mailto:jeronimoparra@outlook.com',
    color: 'hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(96,165,250,0.15)]',
    iconColor: 'text-blue-500',
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    value: 'jeronimo-parra',
    href: 'https://www.linkedin.com/in/jeronimo-parra-099411227/',
    color: 'hover:border-blue-600/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)]',
    iconColor: 'text-blue-600',
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    value: 'Jerow07',
    href: 'https://github.com/Jerow07',
    color: 'hover:border-gray-400/50 hover:shadow-[0_0_20px_rgba(156,163,175,0.15)]',
    iconColor: 'text-gray-700 dark:text-gray-300',
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    label: 'Instagram',
    value: '@jeroww',
    href: 'https://www.instagram.com/jeroww/',
    color: 'hover:border-pink-400/50 hover:shadow-[0_0_20px_rgba(244,114,182,0.15)]',
    iconColor: 'text-pink-500',
  },
]

export function Contact() {
  const { language } = useLanguage()
  const title   = language === 'es' ? 'Hablemos' : "Let's talk"
  const sub     = language === 'es'
    ? 'Estoy disponible para proyectos freelance, oportunidades laborales o simplemente charlar sobre tecnología.'
    : "I'm available for freelance projects, job opportunities, or just to chat about technology."
  const cta     = language === 'es' ? 'Escribime' : 'Write me'

  return (
    <section id="contacto" className="py-24 max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight font-['Space_Grotesk'] mb-4">
          {title}<span className="text-yellow-400">.</span>
        </h3>
        <div className="h-1 w-24 bg-yellow-400 mx-auto rounded-full mb-6" />
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
          {sub}
        </p>
      </motion.div>

      {/* Main CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mb-12 text-center"
      >
        <a
          href="mailto:jeronimoparra@outlook.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-2xl text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(250,204,21,0.4)]"
        >
          {cta}
          <ArrowRight className="w-5 h-5" />
        </a>
      </motion.div>

      {/* Links grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((l, i) => (
          <motion.a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.08 }}
            className={`group flex items-center gap-4 p-5 bg-white/80 dark:bg-zinc-900/40 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-zinc-800 transition-all duration-300 hover:-translate-y-1 ${l.color}`}
          >
            <div className={`p-3 rounded-xl bg-gray-100 dark:bg-zinc-800 ${l.iconColor} transition-transform duration-300 group-hover:scale-110`}>
              {l.icon}
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-0.5">{l.label}</div>
              <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{l.value}</div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </motion.a>
        ))}
      </div>
    </section>
  )
}
