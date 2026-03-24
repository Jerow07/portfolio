import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', url: 'react/61DAFB' },
  { name: 'JavaScript', url: 'javascript/F7DF1E' },
  { name: 'TypeScript', url: 'typescript/3178C6' },
  { name: 'HTML5', url: 'html5/E34F26' },
  { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'Tailwind CSS', url: 'tailwindcss/06B6D4' },
  { name: 'Bootstrap', url: 'bootstrap/7952B3' },
  { name: 'Node.js', url: 'nodedotjs/339933' },
  { name: 'MongoDB', url: 'mongodb/47A248' },
  { name: 'Git', url: 'git/F05032' },
  { name: 'GitHub', url: 'github/FFFFFF' },
  { name: 'Vercel', url: 'vercel/FFFFFF' },
  { name: 'Vite', url: 'vite/646CFF' },
  { name: 'Figma', url: 'figma/F24E1E' }
];

export function Technologies() {
  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-3xl font-bold mb-16 text-gray-900 dark:text-white tracking-tight font-['Space_Grotesk'] text-center"
      >
        Tecnologías & Herramientas
      </motion.h3>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {technologies.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.05, type: 'spring', stiffness: 200, damping: 10 }}
            className="flex flex-col items-center gap-3 group"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-zinc-900/40 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-zinc-800 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:border-yellow-600/30 dark:group-hover:border-yellow-400/30 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:group-hover:shadow-[0_0_20px_rgba(250,204,21,0.15)] group-hover:bg-gray-50 dark:group-hover:bg-zinc-800/80">
              <img 
                src={tech.src || `https://cdn.simpleicons.org/${tech.url}`} 
                alt={`${tech.name} logo`} 
                className="w-8 h-8 md:w-10 md:h-10 object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
