import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const certifications = [
  {
    titleEs: "Desarrollo Web Full Stack",
    titleEn: "Full Stack Web Development",
    issuer: "Coderhouse",
    date: "2022",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6999386297941266432/"
  },
  {
    titleEs: "React JS",
    titleEn: "React JS",
    issuer: "Coderhouse",
    date: "2022",
    link: "https://www.linkedin.com/in/jeronimo-parra-099411227/"
  },
  {
    titleEs: "JavaScript",
    titleEn: "JavaScript",
    issuer: "Coderhouse",
    date: "2022",
    link: "https://www.linkedin.com/in/jeronimo-parra-099411227/"
  },
  {
    titleEs: "Desarrollo Web",
    titleEn: "Web Development",
    issuer: "Coderhouse",
    date: "2021",
    link: "https://www.linkedin.com/in/jeronimo-parra-099411227/"
  }
];

export function Certifications() {
  const { language } = useLanguage();
  const title = language === 'es' ? 'Certificaciones' : 'Certifications';

  return (
    <section id="certificaciones" className="py-24 max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight font-['Space_Grotesk'] mb-4">
          {title}<span className="text-yellow-400">.</span>
        </h3>
        <div className="h-1 w-24 bg-yellow-400 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, i) => (
          <motion.a
            key={i}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group flex items-start gap-4 p-5 bg-white/80 dark:bg-zinc-900/40 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-yellow-400/40 dark:hover:border-yellow-400/30 hover:shadow-[0_0_25px_rgba(250,204,21,0.1)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gray-100 dark:bg-zinc-800 rounded-xl flex shrink-0 items-center justify-center border border-gray-200 dark:border-zinc-700 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-6 h-6 text-yellow-500" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300 truncate">
                {language === 'es' ? cert.titleEs : cert.titleEn}
              </h4>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-0.5">{cert.issuer}</div>
              <div className="mt-2 inline-block text-xs font-bold text-yellow-600 dark:text-yellow-400 bg-yellow-400/10 px-2.5 py-0.5 rounded-full border border-yellow-400/20">
                {cert.date}
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 shrink-0 opacity-0 group-hover:opacity-100 group-hover:text-yellow-500 transition-all duration-300 mt-1" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
