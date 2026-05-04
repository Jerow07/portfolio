import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MouseGlow } from './components/MouseGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Technologies } from './components/Technologies';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { ScrollToTop } from './components/ScrollToTop';
import { IntroScreen } from './components/IntroScreen';
import { Coffee, Globe } from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function PortfolioContent() {
  const { t } = useLanguage();

  return (
    <div className="relative z-10 w-full overflow-hidden transition-colors duration-500 bg-white dark:bg-black text-gray-900 dark:text-gray-100 selection:bg-yellow-400/30 selection:text-yellow-700 dark:selection:text-yellow-400">
      <MouseGlow />
      <Navbar />
      <ScrollToTop />

      <Hero />

      <div id="proyectos">
        <Projects />
      </div>

      <div id="experiencia">
        <Experience />
      </div>

      <div id="tecnologias">
        <Technologies />
      </div>

      <Certifications />

      <Contact />

      <footer className="py-12 mt-4 flex items-center justify-center text-center text-sm font-medium text-gray-500">
        <p className="flex items-center gap-1.5 font-['Space_Grotesk']">
          © 2026 Jerónimo Parra. {t.footer.madeBy} <Coffee className="w-4 h-4 text-amber-700" /> {t.footer.forThe} <Globe className="w-4 h-4 text-blue-600" />
        </p>
      </footer>
    </div>
  );
}

function App() {
  const [entered, setEntered] = useState(false);
  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        {!entered ? (
          <IntroScreen key="intro" onEnter={() => setEntered(true)} />
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <PortfolioContent />
          </motion.div>
        )}
      </AnimatePresence>
    </LanguageProvider>
  );
}

export default App;
