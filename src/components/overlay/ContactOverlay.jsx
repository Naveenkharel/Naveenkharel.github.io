import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactOverlay.css';

const ContactOverlay = ({ isOpen, onClose }) => {
  const initialValues = {
    username: '', // changed from name to username
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'), // changed here
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required('Required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await fetch('http://localhost:5008/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        alert('✅ Message sent!');
        resetForm();
        onClose();
      } else {
        alert('❌ Failed to send. Try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('❌ Server error. Please try again later.');
    }
  };

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
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="contact-form">
                <Field name="username" type="text" placeholder="Your Name" />
                <ErrorMessage name="username" component="div" className="error" />

                <Field name="email" type="email" placeholder="Your Email" />
                <ErrorMessage name="email" component="div" className="error" />

                <Field
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                />
                <ErrorMessage name="message" component="div" className="error" />

                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit">
                  Send
                </motion.button>
              </Form>
            </Formik>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactOverlay;
