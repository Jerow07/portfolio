import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Instagram, ChevronDown } from 'lucide-react';
import React from 'react';
import { InteractiveNet } from './InteractiveNet';

export function Hero() {
  return (
    <section className="relative min-h-screen max-w-[100vw] overflow-hidden flex flex-col justify-center px-6 pt-20">
      <InteractiveNet />
      <motion.div
        className="relative z-10 max-w-3xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 font-['Space_Grotesk'] flex flex-wrap gap-x-[0.3em]">
          {"Hello! I'm Jerónimo Parra.".split(" ").map((word, i) => (
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
          Frontend Engineer
        </h2>
        <h3 className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium mb-8">
          Frontend Engineer @ 
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
          Apasionado por la tecnología y la innovación, con experiencia en el diseño, desarrollo e implementación de soluciones digitales orientadas a la optimización de procesos financieros y la mejora de la experiencia del usuario. Manejo tecnologías como React, JavaScript, Tailwind y Node.js.
        </p>
        
        <div className="flex items-center gap-4">
          <SocialLink href="https://www.linkedin.com/in/jeronimo-parra-099411227/" icon={<Linkedin className="w-6 h-6" />} label="LinkedIn" />
          <SocialLink href="https://www.instagram.com/jeroww/" icon={<Instagram className="w-6 h-6" />} label="Instagram" />
          <SocialLink href="mailto:jeronimoparra@outlook.com" icon={<Mail className="w-6 h-6" />} label="Email" />
          <SocialLink href="https://github.com/Jerow07" icon={<Github className="w-6 h-6" />} label="GitHub" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
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
