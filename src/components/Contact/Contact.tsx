"use client";

import { useState } from "react";
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
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#e63946", "#89CFF0", "#2d936c", "#1a1a1a"],
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setIsSubmitting(false);
      setError("Failed to send. Please try again.");
    }
  };

  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className={`${styles.inner} container`}>
        <h2 className={styles.title}>Let&apos;s work together</h2>
        <p className={styles.subtitle}>
          Have an idea or a project? Drop me a message — I&apos;d love to hear from you.
        </p>

        <div className={styles.formWrapper}>
          {submitted ? (
            <div className={styles.success}>
              Thanks for reaching out! I&apos;ll get back to you soon. 🎉
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input
                    id="name" name="name" type="text"
                    value={formData.name} onChange={handleChange}
                    placeholder="Your name"
                    className={styles.input} disabled={isSubmitting}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input
                    id="email" name="email" type="email"
                    value={formData.email} onChange={handleChange}
                    placeholder="you@example.com"
                    className={styles.input} disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={styles.textarea} disabled={isSubmitting}
                />
              </div>
              {error && <p className={styles.error}>{error}</p>}
              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
