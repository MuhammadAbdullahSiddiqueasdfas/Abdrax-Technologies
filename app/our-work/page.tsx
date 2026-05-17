"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BorderGlow from "@/components/BorderGlow";
import { Code2, Smartphone, Brain, Palette, Monitor, Megaphone, ArrowRight, ExternalLink, Sparkles } from "lucide-react";

type Category = "All" | "Web" | "Mobile" | "AI" | "Design" | "Software";

interface Project {
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  icon: React.ElementType;
  tags: string[];
  image: string;
  emoji: string;
  result: string;
}

const categories: Category[] = ["All", "Web", "Mobile", "AI", "Design", "Software"];

const projects: Project[] = [
  // WEB DEVELOPMENT (7 projects)
  {
    title: "Zameen.pk Property Portal",
    description:
      "Enhanced property search platform with AI-powered recommendations, virtual tours, and CRM integration for Pakistan's leading real estate portal.",
    category: "Web",
    icon: Code2,
    tags: ["Next.js", "Python", "TensorFlow", "AWS"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    emoji: "🏠",
    result: "2M+ monthly active users",
  },
  {
    title: "Khaadi E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with custom product configurator, size recommendations, and seamless checkout for Khaadi's online store.",
    category: "Web",
    icon: Code2,
    tags: ["Next.js", "Shopify API", "Tailwind", "Vercel"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    emoji: "🛍️",
    result: "300% increase in online sales",
  },
  {
    title: "Fauji Foundation Portal",
    description:
      "Member portal for welfare services, healthcare appointments, education programs, and benefit tracking for Fauji Foundation members.",
    category: "Web",
    icon: Code2,
    tags: ["Next.js", "Node.js", "MySQL", "Azure"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    emoji: "🎖️",
    result: "100K+ registered members",
  },
  {
    title: "Sapphire Online Store",
    description:
      "Modern e-commerce platform with real-time inventory sync, personalized recommendations, and multi-payment gateway integration for Sapphire fashion brand.",
    category: "Web",
    icon: Code2,
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    emoji: "👗",
    result: "250% revenue growth in 6 months",
  },
  {
    title: "Foodpanda Restaurant Dashboard",
    description:
      "Comprehensive restaurant management dashboard for menu updates, order tracking, analytics, and customer feedback for Foodpanda partners.",
    category: "Web",
    icon: Code2,
    tags: ["Vue.js", "Laravel", "PostgreSQL", "Redis"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    emoji: "🍕",
    result: "5,000+ restaurants onboarded",
  },
  {
    title: "Interloop Corporate Website",
    description:
      "Corporate website with product catalog, sustainability reports, investor relations, and career portal for Interloop textile manufacturing.",
    category: "Web",
    icon: Code2,
    tags: ["Next.js", "Strapi CMS", "Tailwind", "AWS"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    emoji: "🏭",
    result: "50K+ monthly visitors",
  },
  {
    title: "Askari Bank Online Banking",
    description:
      "Secure online banking portal with account management, fund transfers, bill payments, and investment services for Askari Bank customers.",
    category: "Web",
    icon: Code2,
    tags: ["Angular", "Java Spring", "Oracle", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    emoji: "💳",
    result: "200K+ active users",
  },

  // MOBILE APPS (7 projects)
  {
    title: "Careem Driver App Enhancement",
    description:
      "Mobile app optimization and new features for driver earnings tracking, route optimization, and real-time support for Careem Pakistan.",
    category: "Mobile",
    icon: Smartphone,
    tags: ["React Native", "Firebase", "Google Maps", "Socket.io"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    emoji: "🚗",
    result: "15,000+ active drivers using daily",
  },
  {
    title: "Habib Bank Mobile Banking",
    description:
      "Secure mobile banking app with biometric authentication, instant transfers, bill payments, and investment tracking for HBL customers.",
    category: "Mobile",
    icon: Smartphone,
    tags: ["Flutter", "Node.js", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    emoji: "🏦",
    result: "500K+ downloads, 4.6★ rating",
  },
  {
    title: "Telenor MyTelenor App",
    description:
      "Enhanced mobile app features for balance checking, package subscriptions, bill payments, and customer support for Telenor Pakistan.",
    category: "Mobile",
    icon: Smartphone,
    tags: ["React Native", "Node.js", "Redis", "AWS"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    emoji: "📱",
    result: "10M+ active users",
  },
  {
    title: "Daraz Shopping App",
    description:
      "Feature-rich shopping app with product search, wishlist, secure checkout, order tracking, and customer reviews for Daraz marketplace.",
    category: "Mobile",
    icon: Smartphone,
    tags: ["Flutter", "Firebase", "Stripe", "FCM"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    emoji: "🛒",
    result: "5M+ downloads, 4.5★ rating",
  },
  {
    title: "Sehat Kahani Telemedicine",
    description:
      "Telemedicine app connecting patients with doctors via video consultation, e-prescriptions, and health records for Sehat Kahani healthcare.",
    category: "Mobile",
    icon: Smartphone,
    tags: ["React Native", "WebRTC", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    emoji: "👨‍⚕️",
    result: "50K+ consultations completed",
  },
  {
    title: "Jazz World App",
    description:
      "All-in-one mobile app for Jazz customers with balance management, package activation, bill payments, and entertainment services.",
    category: "Mobile",
    icon: Smartphone,
    tags: ["Kotlin", "Swift", "Node.js", "Firebase"],
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80",
    emoji: "🎵",
    result: "8M+ active users",
  },
  {
    title: "Airlift Delivery App",
    description:
      "On-demand grocery delivery app with real-time tracking, smart recommendations, and seamless checkout for Airlift customers.",
    category: "Mobile",
    icon: Smartphone,
    tags: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    emoji: "🛍️",
    result: "100K+ orders delivered",
  },

  // AI SOLUTIONS (7 projects)
  {
    title: "Daraz AI Chatbot",
    description:
      "Intelligent customer support chatbot handling order tracking, returns, and product queries for Daraz.pk, reducing support load by 65%.",
    category: "AI",
    icon: Brain,
    tags: ["Python", "NLP", "OpenAI", "MongoDB"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    emoji: "🤖",
    result: "Handles 50K+ queries daily",
  },
  {
    title: "Engro Fertilizers Analytics",
    description:
      "Predictive analytics dashboard for crop yield forecasting, inventory optimization, and supply chain management using ML models.",
    category: "AI",
    icon: Brain,
    tags: ["Python", "scikit-learn", "React", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    emoji: "📊",
    result: "25% reduction in waste costs",
  },
  {
    title: "Servis Shoes Inventory AI",
    description:
      "AI-powered inventory management and demand forecasting system for optimizing stock levels across 200+ retail outlets.",
    category: "AI",
    icon: Brain,
    tags: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    emoji: "👟",
    result: "30% reduction in overstock",
  },
  {
    title: "Bank Alfalah Fraud Detection",
    description:
      "Real-time fraud detection system using machine learning to identify suspicious transactions and prevent financial fraud for Bank Alfalah.",
    category: "AI",
    icon: Brain,
    tags: ["Python", "TensorFlow", "Kafka", "Redis"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    emoji: "🔒",
    result: "95% fraud detection accuracy",
  },
  {
    title: "Nestle Demand Forecasting",
    description:
      "AI-powered demand forecasting system for production planning, inventory optimization, and supply chain efficiency for Nestle Pakistan.",
    category: "AI",
    icon: Brain,
    tags: ["Python", "Prophet", "React", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    emoji: "📈",
    result: "40% improvement in forecast accuracy",
  },
  {
    title: "Shaukat Khanum AI Diagnostics",
    description:
      "Medical image analysis system using deep learning for early cancer detection and diagnosis support at Shaukat Khanum Hospital.",
    category: "AI",
    icon: Brain,
    tags: ["Python", "PyTorch", "DICOM", "FastAPI"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    emoji: "🏥",
    result: "Supporting 1,000+ diagnoses monthly",
  },
  {
    title: "Unilever Sentiment Analysis",
    description:
      "Social media sentiment analysis tool for brand monitoring, customer feedback analysis, and market insights for Unilever Pakistan brands.",
    category: "AI",
    icon: Brain,
    tags: ["Python", "NLP", "Transformers", "MongoDB"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    emoji: "💬",
    result: "Analyzing 100K+ mentions daily",
  },

  // SOFTWARE (7 projects)
  {
    title: "FoodHub - Restaurant Management",
    description:
      "Complete restaurant management system with POS, inventory tracking, and online ordering for Monal Restaurant chain across Pakistan.",
    category: "Software",
    icon: Monitor,
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    emoji: "🍽️",
    result: "Deployed in 8 locations nationwide",
  },
  {
    title: "Nishat Hotels Booking System",
    description:
      "Comprehensive hotel management and booking platform with room management, guest services, and revenue analytics for Nishat Hotels.",
    category: "Software",
    icon: Monitor,
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    emoji: "🏨",
    result: "Managing 12 properties nationwide",
  },
  {
    title: "Aga Khan Hospital ERP",
    description:
      "Enterprise resource planning system for patient records, appointment scheduling, billing, and pharmacy management across multiple departments.",
    category: "Software",
    icon: Monitor,
    tags: ["React", "Java Spring", "Oracle", "Docker"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    emoji: "🏥",
    result: "Serving 5,000+ patients daily",
  },
  {
    title: "Packages Mall Digital Signage",
    description:
      "Interactive digital signage system with real-time promotions, wayfinding, and analytics for Pakistan's largest shopping mall.",
    category: "Software",
    icon: Monitor,
    tags: ["React", "Node.js", "WebSocket", "Raspberry Pi"],
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
    emoji: "🛒",
    result: "150+ screens across 4 floors",
  },
  {
    title: "Beaconhouse School ERP",
    description:
      "Complete school management system for student records, attendance, fee management, timetables, and parent communication for Beaconhouse schools.",
    category: "Software",
    icon: Monitor,
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    emoji: "🏫",
    result: "Managing 50+ campuses nationwide",
  },
  {
    title: "LUMS University Portal",
    description:
      "Student information system with course registration, grade management, fee payments, and academic records for LUMS university.",
    category: "Software",
    icon: Monitor,
    tags: ["Angular", "Java Spring", "MySQL", "AWS"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    emoji: "🎓",
    result: "10,000+ students using daily",
  },
  {
    title: "K-Electric Billing System",
    description:
      "Automated billing and payment system with meter reading integration, bill generation, and customer portal for K-Electric.",
    category: "Software",
    icon: Monitor,
    tags: ["Java", "Oracle", "Spring Boot", "Angular"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    emoji: "⚡",
    result: "Processing 2M+ bills monthly",
  },

  // DESIGN (7 projects)
  {
    title: "Gul Ahmed Brand Identity",
    description:
      "Complete brand refresh including logo redesign, packaging, marketing collateral, and digital assets for Gul Ahmed's premium line.",
    category: "Design",
    icon: Palette,
    tags: ["Figma", "Illustrator", "Photoshop", "After Effects"],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    emoji: "🎨",
    result: "Brand recognition up 85%",
  },
  {
    title: "Sana Safinaz Campaign",
    description:
      "Complete digital marketing campaign including social media strategy, content creation, influencer partnerships, and performance analytics.",
    category: "Design",
    icon: Palette,
    tags: ["Instagram", "Facebook", "Canva", "Analytics"],
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    emoji: "✨",
    result: "400% engagement increase",
  },
  {
    title: "Alkaram Studio Rebranding",
    description:
      "Modern brand identity redesign with new logo, color palette, typography, packaging design, and brand guidelines for Alkaram Studio.",
    category: "Design",
    icon: Palette,
    tags: ["Illustrator", "Photoshop", "InDesign", "Figma"],
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80",
    emoji: "👔",
    result: "Brand value increased 60%",
  },
  {
    title: "Junaid Jamshed UI/UX Design",
    description:
      "Complete UI/UX redesign for e-commerce platform with improved navigation, checkout flow, and mobile responsiveness for J. brand.",
    category: "Design",
    icon: Palette,
    tags: ["Figma", "Adobe XD", "Prototyping", "User Testing"],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    emoji: "🖥️",
    result: "Conversion rate up 120%",
  },
  {
    title: "Levi's Pakistan Campaign",
    description:
      "Social media marketing campaign with creative content, influencer collaborations, and brand storytelling for Levi's Pakistan launch.",
    category: "Design",
    icon: Palette,
    tags: ["Photoshop", "Premiere Pro", "Instagram", "Facebook"],
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
    emoji: "👖",
    result: "5M+ impressions in 3 months",
  },
  {
    title: "Coca-Cola Pakistan Graphics",
    description:
      "Seasonal marketing materials, billboard designs, social media graphics, and promotional content for Coca-Cola Pakistan campaigns.",
    category: "Design",
    icon: Palette,
    tags: ["Illustrator", "Photoshop", "After Effects", "InDesign"],
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&q=80",
    emoji: "🥤",
    result: "Used in 500+ locations nationwide",
  },
  {
    title: "Outfitters Brand Guidelines",
    description:
      "Comprehensive brand guidelines document with logo usage, color systems, typography, imagery style, and design templates for Outfitters.",
    category: "Design",
    icon: Palette,
    tags: ["InDesign", "Illustrator", "Figma", "Brand Strategy"],
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    emoji: "📘",
    result: "Standardized across 100+ stores",
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
              <Sparkles />
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
                  <BorderGlow
                    borderRadius={16}
                    glowRadius={30}
                    glowColor="210 100 60"
                    colors={['#3b82f6', '#60a5fa', '#93c5fd']}
                    fillOpacity={0.2}
                  >
                    <div className="h-full rounded-2xl bg-white/5 transition-all duration-300 overflow-hidden flex flex-col">
                      {/* Project Image */}
                      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-blue-600/10">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="text-xs font-semibold text-white bg-blue-600/90 backdrop-blur-sm border border-blue-400/30 px-3 py-1.5 rounded-full">
                            {project.category}
                          </span>
                        </div>

                        {/* Emoji Icon */}
                        <div className="absolute bottom-4 left-4">
                          <div className="w-12 h-12 rounded-xl bg-blue-600/90 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                            {project.emoji}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                          {project.description}
                        </p>

                        {/* Result Badge */}
                        <div className="mb-4 px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                          <p className="text-xs text-blue-400 font-medium">
                            ✅ {project.result}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg hover:border-blue-500/30 transition-colors"
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

      {/* Stats Strip */}
      <section className="py-16 bg-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_60%)]" />
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
                className="glass-card text-center p-6"
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
      <section className="section-wrapper bg-dark-900">
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
              <ExternalLink className="text-white text-xl" />
            </div>
            <h2 className="section-heading">
              <span className="text-white">Your Project Could Be </span>
              <span className="gradient-text">Next</span>
            </h2>
            <p className="section-description mb-8">
              Let&apos;s create something remarkable together. Tell us about your idea.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary px-8 py-4 rounded-xl text-base font-semibold text-white inline-flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <span>Start Your Project</span>
                <ArrowRight />
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
