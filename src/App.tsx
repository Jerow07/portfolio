import { MouseGlow } from './components/MouseGlow';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Technologies } from './components/Technologies';
import { Coffee, Globe } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <>
      <ThemeToggle />
      <div className="relative z-10 w-full overflow-hidden transition-colors duration-500 bg-white dark:bg-black text-gray-900 dark:text-gray-100 selection:bg-yellow-400/30 selection:text-yellow-700 dark:selection:text-yellow-400">
        <MouseGlow />
        <Hero />
        <Experience />
        <Technologies />
        
        <footer className="py-12 mt-12 flex items-center justify-center text-center text-sm font-medium text-gray-500">
          <p className="flex items-center gap-1.5 font-['Space_Grotesk']">
            © 2026 Jerónimo Parra. Hecho con <Coffee className="w-4 h-4 text-amber-700" /> para el <Globe className="w-4 h-4 text-blue-600" />
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
