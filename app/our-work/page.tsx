"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaCode,
  FaMobile,
  FaBrain,
  FaPalette,
  FaLaptopCode,
  FaBullhorn,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

type Category = "All" | "Web" | "Mobile" | "AI" | "Design" | "Software";

interface Project {
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  icon: React.ElementType;
  tags: string[];
  color: string;
  bg: string;
  border: string;
  emoji: string;
  result: string;
}

const categories: Category[] = ["All", "Web", "Mobile", "AI", "Design", "Software"];

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with real-time inventory, payment gateway integration, and an admin dashboard for a retail client in Lahore.",
    category: "Web",
    icon: FaCode,
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    emoji: "🛒",
    result: "40% increase in online sales",
  },
  {
    title: "Fitness Tracking App",
    description:
      "A cross-platform mobile app for tracking workouts, nutrition, and health metrics with personalized AI-driven recommendations.",
    category: "Mobile",
    icon: FaMobile,
    tags: ["Flutter", "Firebase", "TensorFlow Lite"],
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    emoji: "💪",
    result: "10,000+ active users",
  },
  {
    title: "AI Customer Support Bot",
    description:
      "An intelligent chatbot that handles customer queries 24/7, reducing support ticket volume and improving response times for a SaaS company.",
    category: "AI",
    icon: FaBrain,
    tags: ["Python", "NLP", "OpenAI API", "React"],
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    emoji: "🤖",
    result: "70% reduction in support tickets",
  },
  {
    title: "Brand Identity — StyleHub",
    description:
      "Complete brand identity design including logo, color palette, typography, and marketing collateral for a fashion e-commerce startup.",
    category: "Design",
    icon: FaPalette,
    tags: ["Figma", "Illustrator", "Brand Strategy"],
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    emoji: "🎨",
    result: "Brand recognition up 60%",
  },
  {
    title: "School Management System",
    description:
      "A comprehensive ERP for a private school network covering student records, attendance, fee management, and parent communication.",
    category: "Software",
    icon: FaLaptopCode,
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    emoji: "🏫",
    result: "Serving 3 schools, 2,000+ students",
  },
  {
    title: "Social Media Growth Campaign",
    description:
      "A 6-month social media strategy and content creation campaign that grew a local restaurant chain's following and drove foot traffic.",
    category: "Design",
    icon: FaBullhorn,
    tags: ["Instagram", "Facebook", "Content Strategy"],
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    emoji: "📱",
    result: "5x follower growth in 6 months",
  },
  {
    title: "Real Estate Listing Portal",
    description:
      "A property listing and search platform with map integration, virtual tours, and a CRM for real estate agents.",
    category: "Web",
    icon: FaCode,
    tags: ["Next.js", "Google Maps API", "Prisma", "PostgreSQL"],
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    emoji: "🏠",
    result: "500+ properties listed",
  },
  {
    title: "Predictive Analytics Dashboard",
    description:
      "A business intelligence dashboard with ML-powered sales forecasting and inventory optimization for a manufacturing company.",
    category: "AI",
    icon: FaBrain,
    tags: ["Python", "scikit-learn", "React", "D3.js"],
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    emoji: "📊",
    result: "20% reduction in overstock costs",
  },
  {
    title: "Food Delivery App",
    description:
      "A full-stack food delivery platform with real-time order tracking, restaurant management, and driver dispatch for a local startup.",
    category: "Mobile",
    icon: FaMobile,
    tags: ["React Native", "Node.js", "Socket.io", "MongoDB"],
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    emoji: "🍔",
    result: "Launched in 3 cities",
  },
];

export default function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32 bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm font-medium mb-6"
            >
              <HiSparkles />
              <span>Our Portfolio</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Work We&apos;re </span>
              <span className="gradient-text">Proud Of</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              A selection of projects that showcase our expertise across web, mobile,
              AI, design, and software development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs + Projects */}
      <section className="py-16 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.04),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "btn-primary text-white shadow-lg shadow-blue-500/20"
                    : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="group"
                >
                  <div
                    className={`h-full p-7 rounded-2xl ${project.bg} border ${project.border} hover:border-opacity-60 transition-all duration-300 flex flex-col`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        {project.emoji}
                      </div>
                      <span className="text-xs font-semibold text-gray-500 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Result Badge */}
                    <div className="mb-4 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-xs text-blue-400 font-medium">
                        ✅ {project.result}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-16 bg-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "40+", label: "Happy Clients" },
              { number: "6", label: "Service Categories" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-12 md:p-16 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 mb-6">
              <FaExternalLinkAlt className="text-white text-xl" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">Your Project Could Be </span>
              <span className="gradient-text">Next</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Let&apos;s create something remarkable together. Tell us about your idea.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary px-8 py-4 rounded-xl text-base font-semibold text-white inline-flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <span>Start Your Project</span>
                <FaArrowRight />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-xl text-base font-semibold text-white border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 w-full sm:w-auto text-center"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
