import React, { useState, useEffect } from 'react';
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
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';

function App() {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    setIsAdminLoggedIn(loggedIn);
  }, []);

  const handleAdminClick = () => {
    if (isAdminLoggedIn) {
      setShowAdminPanel(true);
    } else {
      setShowAdminLogin(true);
    }
  };

  const handleLogin = (status) => {
    setIsAdminLoggedIn(status);
    setShowAdminLogin(false);
    if (status) {
      setShowAdminPanel(true);
    }
  };

  const handleLogout = (status) => {
    setIsAdminLoggedIn(status);
    setShowAdminPanel(false);
  };

  return (
    <>
      <Loading />
      <div className="App">
        <ScrollProgress />
        <BackgroundShapes />
        <Header onAdminClick={handleAdminClick} />
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

        {/* Admin System */}
        {showAdminLogin && <AdminLogin onLogin={handleLogin} />}
        {showAdminPanel && <AdminPanel onLogout={handleLogout} />}
      </div>
    </>
  );
}

export default App;
