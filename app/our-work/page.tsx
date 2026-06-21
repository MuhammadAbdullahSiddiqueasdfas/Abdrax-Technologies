"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BorderGlow from "@/components/BorderGlow";
import {
  Code2, Smartphone, Brain, Palette, Monitor,
  ArrowRight, ExternalLink, Sparkles,
} from "lucide-react";

type Category = "All" | "Web" | "Mobile" | "AI" | "Design" | "Software";

interface Project {
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  icon: React.ElementType;
  tags: string[];
  image: string;
  result: string;
}

const categories: Category[] = ["All", "Web", "Mobile", "AI", "Design", "Software"];

const categoryColors: Record<Exclude<Category, "All">, string> = {
  Web: "from-cyan-500 to-blue-600",
  Mobile: "from-violet-500 to-purple-600",
  AI: "from-emerald-500 to-teal-600",
  Design: "from-pink-500 to-rose-600",
  Software: "from-orange-500 to-amber-600",
};

const projects: Project[] = [
  // WEB
  {
    title: "Zameen.pk Property Portal",
    description: "Enhanced property search platform with AI-powered recommendations, virtual tours, and CRM integration.",
    category: "Web",
    icon: Code2,
    tags: ["Next.js", "Python", "TensorFlow", "AWS"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    result: "2M+ monthly active users",
  },
  {
    title: "Khaadi E-Commerce Platform",
    description: "Full-stack e-commerce solution with custom product configurator and seamless checkout.",
    category: "Web",
    icon: Code2,
    tags: ["Next.js", "Shopify API", "Tailwind", "Vercel"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    result: "300% increase in online sales",
  },
  {
    title: "Fauji Foundation Portal",
    description: "Member portal for welfare services, healthcare appointments, and benefit tracking.",
    category: "Web",
    icon: Code2,
    tags: ["Next.js", "Node.js", "MySQL", "Azure"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    result: "100K+ registered members",
  },
  {
    title: "Sapphire Online Store",
    description: "Modern e-commerce platform with real-time inventory sync and personalized recommendations.",
    category: "Web",
    icon: Code2,
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    result: "250% revenue growth in 6 months",
  },
  {
    title: "Foodpanda Restaurant Dashboard",
    description: "Comprehensive restaurant management dashboard for orders, analytics, and customer feedback.",
    category: "Web",
    icon: Code2,
    tags: ["Vue.js", "Laravel", "PostgreSQL", "Redis"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    result: "5,000+ restaurants onboarded",
  },
  {
    title: "Askari Bank Online Banking",
    description: "Secure online banking portal with account management, fund transfers, and investment services.",
    category: "Web",
    icon: Code2,
    tags: ["Angular", "Java Spring", "Oracle", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    result: "200K+ active users",
  },
  // MOBILE
  {
    title: "Careem Driver App Enhancement",
    description: "Mobile app optimization with earnings tracking, route optimization, and real-time support.",
    category: "Mobile",
    icon: Smartphone,
    tags: ["React Native", "Firebase", "Google Maps", "Socket.io"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    result: "15,000+ active drivers using daily",
  },
  {
    title: "Habib Bank Mobile Banking",
    description: "Secure mobile banking app with biometric authentication and instant transfers.",
    category: "Mobile",
    icon: Smartphone,
    tags: ["Flutter", "Node.js", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    result: "500K+ downloads, 4.6★ rating",
  },
  {
    title: "Daraz Shopping App",
    description: "Feature-rich shopping app with wishlist, secure checkout, and order tracking.",
    category: "Mobile",
    icon: Smartphone,
    tags: ["Flutter", "Firebase", "Stripe", "FCM"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    result: "5M+ downloads, 4.5★ rating",
  },
  {
    title: "Sehat Kahani Telemedicine",
    description: "Telemedicine app connecting patients with doctors via video consultation and e-prescriptions.",
    category: "Mobile",
    icon: Smartphone,
    tags: ["React Native", "WebRTC", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    result: "50K+ consultations completed",
  },
  // AI
  {
    title: "Daraz AI Chatbot",
    description: "Intelligent customer support chatbot handling order tracking, returns, and product queries.",
    category: "AI",
    icon: Brain,
    tags: ["Python", "NLP", "OpenAI", "MongoDB"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    result: "Handles 50K+ queries daily",
  },
  {
    title: "Bank Alfalah Fraud Detection",
    description: "Real-time fraud detection using machine learning to identify suspicious transactions.",
    category: "AI",
    icon: Brain,
    tags: ["Python", "TensorFlow", "Kafka", "Redis"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    result: "95% fraud detection accuracy",
  },
  {
    title: "Shaukat Khanum AI Diagnostics",
    description: "Medical image analysis system using deep learning for early cancer detection support.",
    category: "AI",
    icon: Brain,
    tags: ["Python", "PyTorch", "DICOM", "FastAPI"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    result: "Supporting 1,000+ diagnoses monthly",
  },
  {
    title: "Nestle Demand Forecasting",
    description: "AI-powered demand forecasting for production planning and supply chain efficiency.",
    category: "AI",
    icon: Brain,
    tags: ["Python", "Prophet", "React", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    result: "40% improvement in forecast accuracy",
  },
  // SOFTWARE
  {
    title: "Aga Khan Hospital ERP",
    description: "Enterprise resource planning for patient records, billing, and pharmacy management.",
    category: "Software",
    icon: Monitor,
    tags: ["React", "Java Spring", "Oracle", "Docker"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    result: "Serving 5,000+ patients daily",
  },
  {
    title: "Beaconhouse School ERP",
    description: "Complete school management system for attendance, fee management, and parent communication.",
    category: "Software",
    icon: Monitor,
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    result: "Managing 50+ campuses nationwide",
  },
  {
    title: "Nishat Hotels Booking System",
    description: "Comprehensive hotel management and booking platform with revenue analytics.",
    category: "Software",
    icon: Monitor,
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    result: "Managing 12 properties nationwide",
  },
  // DESIGN
  {
    title: "Gul Ahmed Brand Identity",
    description: "Complete brand refresh including logo redesign, packaging, and digital assets.",
    category: "Design",
    icon: Palette,
    tags: ["Figma", "Illustrator", "Photoshop", "After Effects"],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    result: "Brand recognition up 85%",
  },
  {
    title: "Alkaram Studio Rebranding",
    description: "Modern brand identity redesign with new logo, color palette, and brand guidelines.",
    category: "Design",
    icon: Palette,
    tags: ["Illustrator", "Photoshop", "InDesign", "Figma"],
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80",
    result: "Brand value increased 60%",
  },
  {
    title: "Junaid Jamshed UI/UX Design",
    description: "Complete UI/UX redesign with improved navigation and mobile responsiveness.",
    category: "Design",
    icon: Palette,
    tags: ["Figma", "Adobe XD", "Prototyping", "User Testing"],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    result: "Conversion rate up 120%",
  },
];

export default function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 min-h-screen">

      {/* ── Hero ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(59,130,246,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

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
              className="mb-6"
            >
              <span className="eyebrow">
                <Sparkles size={14} />
                Our Portfolio
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Work We&apos;re </span>
              <span className="text-gradient">Proud Of</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              A selection of projects that showcase our expertise across web, mobile,
              AI, design, and software development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Category Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "btn-primary text-white shadow-lg shadow-cyan-500/20"
                    : "bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
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
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <BorderGlow
                    borderRadius={16}
                    glowRadius={30}
                    glowColor="0 182 212"
                    colors={["#06b6d4", "#818cf8"]}
                    fillOpacity={0.15}
                  >
                    <div className="h-full rounded-2xl bg-white/[0.03] flex flex-col overflow-hidden">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden flex-shrink-0">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                        {/* Category badge */}
                        <div className="absolute top-3 right-3">
                          <span className={`text-xs font-semibold text-white bg-gradient-to-r ${categoryColors[project.category]} px-3 py-1.5 rounded-full shadow-lg`}>
                            {project.category}
                          </span>
                        </div>

                        {/* Icon */}
                        <div className="absolute bottom-3 left-3">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${categoryColors[project.category]} flex items-center justify-center shadow-lg`}>
                            <project.icon size={18} className="text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-xs leading-relaxed flex-1 mb-4">
                          {project.description}
                        </p>

                        {/* Result */}
                        <div className="mb-4 px-3 py-2 rounded-lg bg-cyan-500/8 border border-cyan-500/15">
                          <p className="text-xs text-cyan-400 font-medium">
                            ✓ {project.result}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-gray-500 bg-white/[0.04] border border-white/8 px-2 py-0.5 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </BorderGlow>
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

      {/* ── Stats Strip ── */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(6,182,212,0.05),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "42+", label: "Projects Delivered" },
              { number: "30+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card text-center p-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.number}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-wrapper">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(6,182,212,0.08),transparent_65%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center p-12 md:p-16 rounded-3xl bg-white/[0.04] border border-white/10"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 shadow-xl shadow-cyan-500/25">
              <ExternalLink size={24} className="text-white" />
            </div>
            <h2 className="section-heading">
              <span className="text-white">Your Project Could Be </span>
              <span className="text-gradient">Next</span>
            </h2>
            <p className="section-description mb-8">
              Let&apos;s create something remarkable together. Tell us about your idea.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group btn-primary px-8 py-4 rounded-xl text-base font-semibold text-white inline-flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <span>Start Your Project</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-xl text-base font-semibold text-gray-300 border border-white/15 hover:border-cyan-500/40 hover:text-white hover:bg-white/5 transition-all duration-300 w-full sm:w-auto text-center"
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
