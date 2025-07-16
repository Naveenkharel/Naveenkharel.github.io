import React from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import ContactOverlay from './components/overlay/ContactOverlay';
import AboutOverlay from './components/overlay/AboutOverlay';
import SkillsOverlay from './components/overlay/SkillsOverlay';
import './App.css';

function App() {
  const [showContact, setShowContact] = React.useState(false);
  const [showAbout, setShowAbout] = React.useState(false);
  const [showSkills, setShowSkills] = React.useState(false);

  return (
    <div className="app-container">
      <div className="navbar-glass-container">
        <Navbar
          onContactClick={() => setShowContact(true)}
          onSkillsClick={() => setShowSkills(true)}
          onAboutClick={() => setShowAbout(true)}
        />
      </div>

      <AppRoutes />
      <ContactOverlay isOpen={showContact} onClose={() => setShowContact(false)} />
      <AboutOverlay isOpen={showAbout} onClose={() => setShowAbout(false)} />
      <SkillsOverlay isOpen={showSkills} onClose={() => setShowSkills(false)} />
    </div>
  );
}

export default App;
