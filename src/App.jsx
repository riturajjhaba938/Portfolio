import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { DottedSurface } from './components/ui/dotted-surface';
import { Hero } from './components/Hero';
import VisionaryAbout from './components/VisionaryAbout';
import { Gallery } from './components/Gallery';
import { Certification } from './components/Certification';
import { TechnicalSkills } from './components/TechnicalSkills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Preloader } from './components/Preloader';
import { Chatbot } from './components/Chatbot';

function App() {
  useSmoothScroll();
  const [isLoading, setIsLoading] = useState(true);

  // Clear preloader after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <AnimatePresence>
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <CustomCursor />
      <Navbar />
      <Chatbot />
      <DottedSurface className="pointer-events-none fixed inset-0 -z-50" />
      <main className="container">
        <div id="home"><Hero /></div>
        <div id="about"><VisionaryAbout /></div>
        <div id="technical-skills">
          <TechnicalSkills />
        </div>
        <div id="skills">
          <Certification />
        </div>
        <div id="projects"><Gallery /></div>
        <div id="education">
          <Education />
        </div>
        <div id="contact"><Contact /></div>
      </main>
    </div>
  );
}

export default App;
