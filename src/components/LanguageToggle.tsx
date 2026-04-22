import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-20 z-50 flex items-center">
      <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-zinc-800 p-1 flex gap-1 shadow-sm">
        <button
          onClick={() => setLanguage('es')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
            language === 'es'
              ? 'bg-yellow-400 text-black shadow-inner shadow-yellow-500/50'
              : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          ES
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
            language === 'en'
              ? 'bg-yellow-400 text-black shadow-inner shadow-yellow-500/50'
              : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          EN
        </button>
        <motion.div
          className="absolute inset-0 z-[-1]"
          layoutId="activeTab"
        />
      </div>
    </div>
  );
}
