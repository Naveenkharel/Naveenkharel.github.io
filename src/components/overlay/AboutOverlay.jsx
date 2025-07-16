import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AboutOverlay.css';

const AboutOverlay = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="overlay-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="about-box"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button className="about-close-button" onClick={onClose}>×</button>
            <h2>About Me</h2>
            <p>
              I am Naveen Kharel, currently studying at Himalaya College of Engineering.
              I have a strong interest in problem-solving and enjoy learning through hands-on experience.
              I’m always curious about how things work and like spending time exploring new technologies.
              Outside of academics, I value staying consistent and learning something useful every day.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutOverlay;
