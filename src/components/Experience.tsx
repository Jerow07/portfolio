import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      role: t.experience.roles.frontend,
      company: "Santander Consumer Argentina",
      period: `Oct 2022 - ${t.experience.actualidad}`,
      description: t.experience.descriptions.santander,
      logo: "/logos/santander.svg"
    },
    {
      role: t.experience.roles.junior,
      company: "TalentHackers by Catenon Group",
      period: `Jan 2019 - Jan 2021`,
      description: t.experience.descriptions.talent,
      logo: "/logos/talenthackers.png"
    },
    {
      role: t.experience.roles.dev,
      company: "Oh! Tea",
      period: `Feb 2021 - Jan 2022`,
      description: t.experience.descriptions.ohtea,
      logo: "/logos/ohtea.png"
    },
    {
      role: t.experience.roles.customer,
      company: "Mera Solutions",
      period: `Feb 2018 - Sep 2018`,
      description: t.experience.descriptions.mera,
      logo: "/logos/mera.png"
    }
  ];

  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-3xl font-bold mb-12 text-gray-900 dark:text-white tracking-tight font-['Space_Grotesk']"
      >
        {t.experience.title}
      </motion.h3>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative p-6 md:p-8 bg-white/80 dark:bg-zinc-900/40 backdrop-blur-md rounded-3xl border border-gray-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800/80 hover:shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_30px_rgba(250,204,21,0.05)] hover:border-yellow-600/20 dark:hover:border-yellow-400/20 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-100 dark:bg-zinc-800 rounded-full p-1.5 flex shrink-0 items-center justify-center border border-gray-200 dark:border-zinc-700/50 overflow-hidden shadow-inner">
                  <img 
                    src={exp.logo} 
                    alt={exp.company} 
                    className="w-full h-full object-contain rounded-full bg-white p-1.5" 
                    onError={(e) => { 
                      e.currentTarget.style.display = 'none'; 
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-xl font-bold text-gray-500">${exp.company.charAt(0)}</span>`; 
                    }} 
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">{exp.role}</h4>
                  <div className="text-gray-600 dark:text-gray-400 font-medium mt-1">{exp.company}</div>
                </div>
              </div>
              <div className="whitespace-nowrap text-sm text-yellow-600 dark:text-yellow-400 font-medium bg-yellow-400/10 dark:bg-yellow-400/10 px-3 py-1.5 rounded-full self-start border border-yellow-600/20 dark:border-yellow-400/20">
                {exp.period}
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base mt-4 md:pl-[72px]">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
