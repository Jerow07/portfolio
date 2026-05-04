import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Props {
  onEnter: () => void;
}

const NAME = 'Jerónimo Parra';

export function IntroScreen({ onEnter }: Props) {
  const { language, setLanguage, t } = useLanguage();
  const [accel, setAccel] = useState(false);
  const [launching, setLaunching] = useState(false);

  const handleEnter = () => {
    if (launching) return;
    setLaunching(true);
    setTimeout(onEnter, 900);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black text-white overflow-hidden font-['Space_Grotesk'] flex flex-col items-center justify-center">
      {/* language toggle */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-800 p-1 flex gap-1 shadow-sm">
          <button
            onClick={() => setLanguage('es')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              language === 'es'
                ? 'bg-yellow-400 text-black shadow-inner shadow-yellow-500/50'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            ES
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              language === 'en'
                ? 'bg-yellow-400 text-black shadow-inner shadow-yellow-500/50'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            EN
          </button>
        </div>
      </div>

      {/* radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(250,204,21,0.15),transparent_60%)] pointer-events-none" />

      {/* road dashed line */}
      <div className="absolute left-0 right-0 bottom-[22%] h-[2px] overflow-hidden">
        <motion.div
          className="h-full w-[200%] bg-[repeating-linear-gradient(90deg,#facc15_0,#facc15_40px,transparent_40px,transparent_80px)]"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: accel ? 0.8 : 2.5, ease: 'linear', repeat: Infinity }}
        />
      </div>

      {/* car */}
      <motion.div
        className="absolute bottom-[23%] left-0"
        initial={{ x: '-15vw' }}
        animate={launching ? { x: '120vw' } : { x: ['-15vw', '120vw'] }}
        transition={
          launching
            ? { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
            : { duration: accel ? 3 : 7, ease: 'linear', repeat: Infinity }
        }
      >
        <Car />
      </motion.div>

      {/* content */}
      <AnimatePresence>
        {!launching && (
          <motion.div
            key="content"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
            className="relative z-10 flex flex-col items-center gap-8 px-6 text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-yellow-400/80"
            >
              {t.intro.kicker}
            </motion.p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight flex flex-wrap justify-center">
              {NAME.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.3 + i * 0.04, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                  className={char === ' ' ? 'w-3 md:w-5' : 'inline-block'}
                  style={
                    char !== ' '
                      ? { textShadow: '0 0 20px rgba(250,204,21,0.35)' }
                      : undefined
                  }
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="text-sm md:text-base text-gray-400 max-w-md"
            >
              {t.intro.tagline}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              onMouseEnter={() => setAccel(true)}
              onMouseLeave={() => setAccel(false)}
              onClick={handleEnter}
              className="group flex items-center gap-2 px-7 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-2xl text-sm md:text-base transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_25px_rgba(250,204,21,0.4)] hover:shadow-[0_12px_35px_rgba(250,204,21,0.6)]"
            >
              {t.intro.enter}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mt-2"
            >
              {t.intro.hint}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* flash on launch */}
      <AnimatePresence>
        {launching && (
          <motion.div
            key="flash"
            className="absolute inset-0 bg-yellow-400 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 0.8, times: [0, 0.4, 1] }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function Car() {
  return (
    <div className="relative">
      {/* exhaust trail */}
      <div className="absolute right-full top-1/2 -translate-y-1/2 flex items-center gap-1 mr-1">
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-yellow-400/40"
            animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>

      <svg width="90" height="42" viewBox="0 0 90 42" fill="none">
        {/* body */}
        <path
          d="M6 28 L14 14 Q16 11 20 11 L58 11 Q62 11 65 14 L78 22 L84 24 Q88 25 88 29 L88 32 Q88 34 86 34 L74 34 L72 34 Q70 30 66 30 Q62 30 60 34 L30 34 Q28 30 24 30 Q20 30 18 34 L8 34 Q6 34 6 32 Z"
          fill="#facc15"
        />
        {/* window */}
        <path
          d="M22 14 L26 22 L56 22 L60 14 Q58 13 56 13 L26 13 Q24 13 22 14 Z"
          fill="#0a0a0a"
          opacity="0.7"
        />
        {/* headlight */}
        <circle cx="83" cy="28" r="2" fill="#fff" />
        {/* wheels */}
        <motion.g animate={{ rotate: 360 }} transition={{ duration: 0.4, ease: 'linear', repeat: Infinity }} style={{ originX: '24px', originY: '34px' }}>
          <circle cx="24" cy="34" r="5" fill="#0a0a0a" />
          <circle cx="24" cy="34" r="2" fill="#facc15" />
        </motion.g>
        <motion.g animate={{ rotate: 360 }} transition={{ duration: 0.4, ease: 'linear', repeat: Infinity }} style={{ originX: '66px', originY: '34px' }}>
          <circle cx="66" cy="34" r="5" fill="#0a0a0a" />
          <circle cx="66" cy="34" r="2" fill="#facc15" />
        </motion.g>
      </svg>
    </div>
  );
}
