"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaRocket, FaCode, FaMobile, FaBrain, FaLaptopCode, FaPalette } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export default function HeroSection() {
  const floatingIcons = [
    { Icon: FaCode, delay: 0, position: "top-20 left-10", color: "bg-blue-600" },
    { Icon: FaMobile, delay: 0.2, position: "top-40 right-20", color: "bg-gray-700" },
    { Icon: FaBrain, delay: 0.4, position: "bottom-32 left-20", color: "bg-blue-500" },
    { Icon: FaLaptopCode, delay: 0.6, position: "bottom-40 right-32", color: "bg-gray-600" },
    { Icon: FaPalette, delay: 0.8, position: "top-1/2 right-10", color: "bg-blue-700" },
    { Icon: FaRocket, delay: 1, position: "bottom-20 right-10", color: "bg-gray-800" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position, color }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} hidden lg:block pointer-events-none`}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className={`p-4 rounded-2xl ${color} shadow-lg`}>
            <Icon className="text-white" size={32} />
          </div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm font-medium"
          >
            <HiSparkles className="text-blue-400" />
            <span>Welcome to Abdrax Technologies</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">Transform Your Ideas</span>
            <br />
            <span className="text-blue-500">Into Digital Reality</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We craft cutting-edge software solutions, stunning websites, powerful mobile apps,
            and intelligent AI systems that drive your business forward.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#contact-form"
              scroll={true}
              className="btn-primary px-8 py-4 rounded-xl text-base font-semibold text-white w-full sm:w-auto"
            >
              <span>Start Your Project</span>
            </Link>
            <Link
              href="/our-work"
              className="px-8 py-4 rounded-xl text-base font-semibold text-white border-2 border-white/20 hover:border-blue-500/50 hover:bg-white/5 transition-all duration-300 w-full sm:w-auto"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto"
          >
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "40+", label: "Happy Clients" },
              { number: "6+", label: "Services Offered" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-600/30 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-blue-400"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
