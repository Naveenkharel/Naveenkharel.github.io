import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaPython, FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase
} from 'react-icons/fa';
import {
  SiC, SiCplusplus, SiMongodb, SiExpress, SiTensorflow
} from 'react-icons/si';
import './SkillsOverlay.css';

const skills = [
  { icon: <SiC />, label: 'C' },
  { icon: <SiCplusplus />, label: 'C++' },
  { icon: <FaPython />, label: 'Python' },
  { icon: <FaHtml5 />, label: 'HTML' },
  { icon: <FaCss3Alt />, label: 'CSS' },
  { icon: <FaJs />, label: 'JavaScript' },
  { icon: <FaReact />, label: 'React' },
  { icon: <SiExpress />, label: 'Express' },
  { icon: <FaNodeJs />, label: 'Node.js' },
  { icon: <SiMongodb />, label: 'MongoDB' },
];

const SkillsOverlay = ({ isOpen, onClose }) => {
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
            className="overlay-box skills-overlay-box"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button className="overlay-close-button" onClick={onClose}>×</button>
            <h2 className="overlay-title">My Skills</h2>
            <div className="skills-scroll-container">
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-card"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-label">{skill.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SkillsOverlay;
