import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import {
  ExternalLink, Github, Calendar, Activity,
  Truck, Sparkles, ShoppingCart, Package, Pill
} from 'lucide-react';
import React from 'react';

const projectIcons = {
  feriados: Calendar,
  dialcheck: Activity,
  parkapp: Truck,
  amore: Sparkles,
  compras: ShoppingCart,
  bonsur: Package,
  pastillero: Pill
};

const projectStyles = {
  feriados: "from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30",
  dialcheck: "from-teal-500/20 to-blue-500/20 group-hover:from-teal-500/30 group-hover:to-blue-500/30",
  parkapp: "from-indigo-600/20 to-purple-600/20 group-hover:from-indigo-600/30 group-hover:to-purple-600/30",
  amore: "from-rose-500/20 to-amber-500/20 group-hover:from-rose-500/30 group-hover:to-amber-500/30",
  compras: "from-orange-500/20 to-red-500/20 group-hover:from-orange-500/30 group-hover:to-red-500/30",
  bonsur: "from-yellow-500/20 to-amber-600/20 group-hover:from-yellow-500/30 group-hover:to-amber-600/30",
  pastillero: "from-emerald-500/20 to-teal-500/20 group-hover:from-emerald-500/30 group-hover:to-teal-500/30"
};

const projectLinks = {
  feriados: "https://www.feriadosarg.com.ar",
  dialcheck: "https://www.dialcheck.com.ar",
  parkapp: "https://vercel.com/jeronimo-s-projects-101430f9/parkapp/7hA7Vt9sYUSUVqLQHaoLfV3NSLqt",
  amore: "https://www.abiestudio.com.ar",
  compras: "https://compraslist-premium.vercel.app/",
  bonsur: "https://bonsurredise-o.vercel.app/",
  pastillero: "https://pastilleroapp.vercel.app/"
};

export function Projects() {
  const { t } = useLanguage();

  const projectList = [
    { key: 'feriados', ...t.projects.list.feriados },
    { key: 'dialcheck', ...t.projects.list.dialcheck },
    { key: 'parkapp', ...t.projects.list.parkapp },
    { key: 'amore', ...t.projects.list.amore },
    { key: 'compras', ...t.projects.list.compras },
    { key: 'bonsur', ...t.projects.list.bonsur },
    { key: 'pastillero', ...t.projects.list.pastillero }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight font-['Space_Grotesk'] mb-4">
          {t.projects.title}
        </h3>
        <div className="h-1 w-24 bg-yellow-400 mx-auto rounded-full" />
      </motion.div>

      {/* Grid container */}
      <div className="flex flex-wrap justify-center gap-8">
        {projectList.map((project, i) => {
          const Icon = projectIcons[project.key as keyof typeof projectIcons];
          const style = projectStyles[project.key as keyof typeof projectStyles];
          const isBottomRow = i >= 3;

          return (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-[2.5rem] border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(250,204,21,0.15)] aspect-square flex flex-col p-6 md:p-8 w-full md:w-[calc(33.333%-1.5rem)] lg:w-[calc(33.333%-2rem)] max-w-[400px]`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-700 opacity-40 group-hover:opacity-60 ${style}`} />
              
              <div className="relative z-10 h-full flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-white dark:bg-zinc-800 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-700 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <Icon className="w-8 h-8 text-yellow-500" />
                </div>

                <div className="flex-1 flex flex-col items-center justify-center">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight group-hover:text-yellow-500 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2 md:line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-auto w-full">
                  <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[8px] md:text-[9px] font-black uppercase tracking-widest px-2.5 py-1 bg-gray-100/80 dark:bg-zinc-800/80 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <a 
                      href={projectLinks[project.key as keyof typeof projectLinks]} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative px-5 py-2.5 bg-yellow-400 text-black text-sm font-bold rounded-xl overflow-hidden transition-all active:scale-95"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {t.projects.viewProject}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative gradient orb */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-[80px] group-hover:bg-yellow-400/20 transition-all duration-700" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
