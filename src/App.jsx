import { Navbar } from './components/Navbar';
import { ParticleBackground } from './components/ParticleBackground';
import { Hero } from './components/Hero';
import VisionaryAbout from './components/VisionaryAbout';
import { Gallery } from './components/Gallery';
import { Certification } from './components/Certification';
import { EducationSkills } from './components/EducationSkills';
import { Contact } from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <CustomCursor />
      <Navbar />
      <ParticleBackground />
      <main className="container">
        <div id="home"><Hero /></div>
        <div id="about"><VisionaryAbout /></div>
        <div id="projects"><Gallery /></div>
        <div id="skills">
          <Certification />
          <EducationSkills />
        </div>
        <div id="contact"><Contact /></div>
      </main>
    </div>
  );
}

export default App;
