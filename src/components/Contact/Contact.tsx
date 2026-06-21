"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import confetti from "canvas-confetti";
import styles from "./Contact.module.css";

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

    setIsSubmitting(true);
    setError("");

    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Trigger canvas-confetti celebration!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0284c7", "#2563eb", "#7c3aed", "#c2410c"]
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setIsSubmitting(false);
      setError("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className={`${styles.contact} section container`}>
      <div className={styles.titleSection}>
        <span className={styles.subtitle}>Get in Touch</span>
        <h2 className={styles.title}>Let&apos;s Work Together</h2>
      </div>

      <div className={styles.content}>
        <div className={`${styles.formCard} glass-card`}>
          {submitted ? (
            <div className={styles.successMessage}>
              Thank you for reaching out! I&apos;ll get back to you as soon as possible.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={styles.input}
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={styles.input}
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={styles.textarea}
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {error && <p style={{ color: "#ef4444", fontSize: "0.9rem", margin: 0 }}>{error}</p>}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
