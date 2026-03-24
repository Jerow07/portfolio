import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications: Array<{ title: string, issuer: string, date: string, link?: string }> = [
  {
    title: "Certificación (Título a confirmar)",
    issuer: "Institución emisora",
    date: "2022",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6999386297941266432/"
  }
];

export function Certifications() {
  if (certifications.length === 0) return null; // No la mostramos hasta que agregues la primera

  return (
    <section className="py-12 max-w-4xl mx-auto px-6">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-3xl font-bold mb-12 text-white tracking-tight font-['Space_Grotesk']"
      >
        Certificaciones
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group relative p-6 bg-zinc-900/40 backdrop-blur-md rounded-3xl border border-zinc-800 hover:bg-zinc-800/80 hover:shadow-[0_0_30px_rgba(250,204,21,0.05)] hover:border-yellow-400/20 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-zinc-800 rounded-full p-2 flex shrink-0 items-center justify-center border border-zinc-700/50 shadow-inner">
                <Award className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {cert.title}
                </h4>
                <div className="text-gray-400 font-medium text-sm mt-1">{cert.issuer}</div>
                <div className="text-sm text-yellow-400/80 mt-2 font-medium bg-yellow-400/10 px-3 py-1 rounded-full inline-block border border-yellow-400/20">
                  {cert.date}
                </div>
              </div>
            </div>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`Ver credencial de ${cert.title}`}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
