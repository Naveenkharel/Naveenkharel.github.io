import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactOverlay.css';

const ContactOverlay = ({ isOpen, onClose }) => {
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
className="overlay-content"
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 0.9 }}
transition={{ duration: 0.3 }}
>
<button className="close-btn" onClick={onClose}>×</button>
<h2 className="neon-text">Contact Me</h2>
<form className="contact-form">
<input type="text" placeholder="Your Name" required />
<input type="email" placeholder="Your Email" required />
<textarea placeholder="Your Message" required></textarea>
<motion.button
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
type="submit"
>
Send
</motion.button>
</form>
</motion.div>
</motion.div>
)}
</AnimatePresence>
);
};

export default ContactOverlay;