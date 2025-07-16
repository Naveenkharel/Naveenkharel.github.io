import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import homepageImage from '../../assets/231.png';
import '../../home.css';

// Slide animations
const slideInLeft = {
  hidden: { x: -60, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
};

const bgVariants = {
  hidden: { opacity: 0, scale: 1.02 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: 'easeOut' } }
};

const Home = ({ showContact, setShowContact }) => {
  return (
    <>
      <motion.div
        className="hero-section-wrapper"
        variants={bgVariants}
        initial="hidden"
        animate="visible"
      >
        <div
          className="hero-section text-white d-flex align-items-center"
          style={{
            backgroundImage: `url(${homepageImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            paddingLeft: '5vw',
          }}
        >
          <motion.div
            className="content-wrapper"
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="intro-text"
              variants={slideInLeft}
              transition={{ delay: 0.2 }}
            >
              Hello I am,
            </motion.p>

            <motion.h1
              className="display-name"
              variants={slideInLeft}
              transition={{ delay: 0.4 }}
            >
              Naveen Sharma Kharel
            </motion.h1>

            <motion.h5
              className="typing-text"
              variants={slideInLeft}
              transition={{ delay: 0.6 }}
            >
              I am {' '}
              <Typewriter
                options={{
                  strings: ['a tech enthusiast', 'an engineer'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 75,
                }}
              />
            </motion.h5>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;