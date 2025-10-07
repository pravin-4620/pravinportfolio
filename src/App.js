import React from 'react';
import './App.css';
import Loading from './components/Loading';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsEnhanced from './components/ProjectsEnhanced';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import ContactEnhanced from './components/ContactEnhanced';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import BackgroundShapes from './components/BackgroundShapes';

function App() {
  return (
    <>
      <Loading />
      <div className="App">
        <ScrollProgress />
        <BackgroundShapes />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <ProjectsEnhanced />
          <Timeline />
          <Certifications />
          <ContactEnhanced />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
