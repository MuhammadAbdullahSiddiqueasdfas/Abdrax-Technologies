"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaClock,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: "Our Location",
    lines: ["Hassan Abdal, Wah", "Pakistan 47040"],
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    lines: ["abdraxoffical@gmail.com"],
    href: "mailto:abdraxoffical@gmail.com",
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: FaPhone,
    title: "Call Us",
    lines: ["+92 370 137 1522"],
    href: "tel:+923701371522",
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    icon: FaClock,
    title: "Working Hours",
    lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: By Appointment"],
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1500);
  };

  return (
    <div className="pt-32 bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm font-medium mb-6"
            >
              <HiSparkles />
              <span>Get In Touch</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Let&apos;s Build </span>
              <span className="gradient-text">Something Great</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              Have a project in mind? We&apos;d love to hear about it. Fill out the form
              below and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-dark-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div
                  className={`h-full p-6 rounded-2xl ${info.bg} border ${info.border} transition-all duration-300`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4`}
                  >
                    <info.icon className="text-white text-lg" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                    >
                      {info.lines.map((line, li) => (
                        <span key={li} className="block">
                          {line}
                        </span>
                      ))}
                    </a>
                  ) : (
                    info.lines.map((line, li) => (
                      <p key={li} className="text-gray-400 text-sm">
                        {line}
                      </p>
                    ))
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              <span className="text-white">Send Us a </span>
              <span className="gradient-text">Message</span>
            </h2>
            <p className="text-gray-400">
              We&apos;ll respond within 24 hours on business days.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="+92 300 1234567"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#0d0d0d] border border-white/10 text-white focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  >
                    <option value="" className="bg-gray-900">Select a service</option>
                    <option value="web-development" className="bg-gray-900">Web Development</option>
                    <option value="app-development" className="bg-gray-900">App Development</option>
                    <option value="ai-solutions" className="bg-gray-900">AI Solutions</option>
                    <option value="software-development" className="bg-gray-900">Software Development</option>
                    <option value="graphic-designing" className="bg-gray-900">Graphic Designing</option>
                    <option value="social-media-management" className="bg-gray-900">Social Media Management</option>
                    <option value="other" className="bg-gray-900">Other</option>
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div className="mb-6">
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0d0d0d] border border-white/10 text-white focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="" className="bg-gray-900">Select a budget range</option>
                  <option value="under-500" className="bg-gray-900">Under $500</option>
                  <option value="500-1000" className="bg-gray-900">$500 – $1,000</option>
                  <option value="1000-5000" className="bg-gray-900">$1,000 – $5,000</option>
                  <option value="5000-10000" className="bg-gray-900">$5,000 – $10,000</option>
                  <option value="10000+" className="bg-gray-900">$10,000+</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3"
                >
                  <FaCheckCircle className="text-green-400 text-xl flex-shrink-0" />
                  <p className="text-green-400 text-sm">
                    Thank you! Your message has been sent. We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary px-6 py-4 rounded-xl text-base font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane />
                  </>
                )}
              </button>

              <p className="text-center text-gray-500 text-xs mt-4">
                🔒 Your information is secure and will never be shared.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Strip */}
      <section className="py-16 bg-dark-800 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              <span className="text-white">Frequently Asked </span>
              <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "How long does a typical project take?",
                a: "Project timelines vary based on scope. A simple website takes 1–2 weeks, while complex applications can take 2–4 months. We provide a detailed timeline during our initial consultation.",
              },
              {
                q: "Do you offer post-launch support?",
                a: "Yes! We offer ongoing maintenance and support packages to keep your product running smoothly after launch.",
              },
              {
                q: "What is your payment structure?",
                a: "We typically work with a 50% upfront deposit and 50% upon project completion. For larger projects, we can arrange milestone-based payments.",
              },
              {
                q: "Can you work with clients outside Pakistan?",
                a: "Absolutely. We work with clients globally and are comfortable with remote collaboration across different time zones.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/20 transition-all duration-300"
              >
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
