"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Contact.module.css";

const formContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const formFieldVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setIsSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setSubmitted(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#e63946", "#89CFF0", "#2d936c", "#1a1a1a"],
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setIsSubmitting(false);
        setError(result.message || "Failed to send. Please try again.");
      }
    } catch {
      setIsSubmitting(false);
      setError("Failed to send. Please try again later.");
    }
  };

  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className={`${styles.inner} container`}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Let&apos;s work together
        </motion.h2>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          Have an idea or a project? Drop me a message — I&apos;d love to hear from you.
        </motion.p>

        <div className={styles.formWrapper}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div 
                className={styles.success}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                Thanks for reaching out! I&apos;ll get back to you soon. 🎉
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit} 
                className={styles.form}
                variants={formContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className={styles.row}>
                  <motion.div className={styles.field} variants={formFieldVariants}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                      id="name" name="name" type="text"
                      value={formData.name} onChange={handleChange}
                      placeholder="Your name"
                      className={styles.input} disabled={isSubmitting}
                    />
                  </motion.div>
                  <motion.div className={styles.field} variants={formFieldVariants}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                      id="email" name="email" type="email"
                      value={formData.email} onChange={handleChange}
                      placeholder="you@example.com"
                      className={styles.input} disabled={isSubmitting}
                    />
                  </motion.div>
                </div>
                <motion.div className={styles.field} variants={formFieldVariants}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className={styles.textarea} disabled={isSubmitting}
                  />
                </motion.div>
                {error && <motion.p className={styles.error} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{error}</motion.p>}
                
                <motion.div variants={formFieldVariants}>
                  <motion.button 
                    type="submit" 
                    className={styles.submitBtn} 
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring" as const, stiffness: 400, damping: 15 }}
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
