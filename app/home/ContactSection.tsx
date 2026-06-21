"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

const contactHighlights = [
  { icon: Phone, label: "Call Us", value: "+92 370 137 1522", href: "tel:+923701371522" },
  { icon: Mail, label: "Email Us", value: "abdraxoffical@gmail.com", href: "mailto:abdraxoffical@gmail.com" },
  { icon: MapPin, label: "Location", value: "Hassan Abdal, Wah, Pakistan", href: null },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const res = await fetch("https://formspree.io/f/xrejpvdr", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="section-wrapper">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(6,182,212,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="eyebrow mb-4">Get In Touch</div>
          <h2 className="section-heading text-white">
            Let&apos;s Start Your <span className="text-gradient">Project</span>
          </h2>
          <p className="section-description">
            Fill out the form below and we&apos;ll get back to you within 24 hours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Quick contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-white font-bold text-lg mb-6">Contact Information</h3>
            {contactHighlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/8 hover:border-cyan-500/25 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <item.icon size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium mb-0.5">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-300 text-sm hover:text-cyan-400 transition-colors font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-gray-300 text-sm font-medium">{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Hours */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 mt-4">
              <p className="text-white text-sm font-semibold mb-1">Working Hours</p>
              <p className="text-gray-400 text-xs">Mon – Sat: 9:00 AM – 7:00 PM</p>
              <p className="text-gray-400 text-xs">Sunday: By Appointment</p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleChange}
                    required className="glass-input" placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange}
                    required className="glass-input" placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel" id="phone" name="phone"
                    value={formData.phone} onChange={handleChange}
                    className="glass-input" placeholder="+92 300 1234567"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service" name="service"
                    value={formData.service} onChange={handleChange}
                    required className="glass-input"
                  >
                    <option value="" className="bg-gray-900">Select a service</option>
                    <option value="software-development" className="bg-gray-900">Software Development</option>
                    <option value="app-development" className="bg-gray-900">App Development</option>
                    <option value="website-development" className="bg-gray-900">Website Development</option>
                    <option value="graphic-designing" className="bg-gray-900">Graphic Designing</option>
                    <option value="ai-solutions" className="bg-gray-900">AI Solutions</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Project Details
                </label>
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange}
                  rows={4} className="glass-input resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3"
                >
                  <CheckCircle2 size={18} className="text-green-400 flex-shrink-0" />
                  <p className="text-green-400 text-sm">Message sent! We&apos;ll get back to you soon.</p>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
                >
                  <p className="text-red-400 text-sm">{error}</p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary px-6 py-4 rounded-xl text-base font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
