import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Instagram, ChevronDown } from 'lucide-react';
import React from 'react';
import { InteractiveNet } from './InteractiveNet';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen max-w-[100vw] overflow-hidden flex flex-col px-6 pt-32 pb-10">
      <InteractiveNet />
      
      <div className="flex-1 flex flex-col justify-center w-full">
        <motion.div
          className="relative z-10 max-w-3xl mx-auto w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 font-['Space_Grotesk'] flex flex-wrap gap-x-[0.3em]">
            {`${t.hero.hello} ${t.hero.name}`.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                className="inline-block"
              >
                {word === "Jerónimo" || word === "Parra." ? (
                  <span className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>
          <h2 className="text-xl md:text-2xl text-yellow-600 dark:text-yellow-400 font-semibold mb-2 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]">
            {t.hero.role}
          </h2>
          <h3 className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium mb-8">
            {t.hero.role} {t.hero.company} 
            <a 
              href="https://www.santanderconsumer.es/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-900 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 underline decoration-yellow-600/30 dark:decoration-yellow-400/30 hover:decoration-yellow-600 dark:hover:decoration-yellow-400 underline-offset-4 transition-all duration-300 ml-1"
            >
              Santander Consumer
            </a>
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed mb-10 max-w-2xl">
            {t.hero.description.split("www.").map((part: string, i: number) => {
              if (i === 0) return part;
              const link = part.split(" ")[0];
              const rest = part.slice(link.length);
              return (
                <React.Fragment key={i}>
                  <a 
                    href={`https://www.${link}`} 
                    target="_blank" 
                    className="text-yellow-600 dark:text-yellow-400 hover:underline"
                  >
                    www.{link}
                  </a>
                  {rest}
                </React.Fragment>
              );
            })}
          </p>
          
          <div className="flex items-center gap-4">
            <SocialLink href="https://www.linkedin.com/in/jeronimo-parra-099411227/" icon={<Linkedin className="w-6 h-6" />} label="LinkedIn" />
            <SocialLink href="https://www.instagram.com/jeroww/" icon={<Instagram className="w-6 h-6" />} label="Instagram" />
            <SocialLink href="mailto:jeronimoparra@outlook.com" icon={<Mail className="w-6 h-6" />} label="Email" />
            <SocialLink href="https://github.com/Jerow07" icon={<Github className="w-6 h-6" />} label="GitHub" />
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        className="relative z-10 flex flex-col items-center gap-2 text-gray-500 pb-4 mt-auto"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-yellow-400" />
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 lg:p-4 bg-white/50 dark:bg-zinc-900/50 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 hover:border-yellow-600/50 dark:hover:border-yellow-400/50 hover:shadow-[0_0_20px_rgba(202,138,4,0.2)] dark:hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:-translate-y-1 transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
