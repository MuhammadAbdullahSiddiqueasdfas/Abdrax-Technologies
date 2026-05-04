"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, Code2, Smartphone, Brain, Monitor, Palette, Sparkles, ArrowRight } from "lucide-react";

const floatingIcons = [
  { Icon: Code2, delay: 0, color: "bg-blue-600", label: "Web Dev" },
  { Icon: Smartphone, delay: 0.3, color: "bg-purple-600", label: "Mobile" },
  { Icon: Brain, delay: 0.6, color: "bg-green-600", label: "AI" },
  { Icon: Monitor, delay: 0.9, color: "bg-orange-600", label: "Software" },
  { Icon: Palette, delay: 1.2, color: "bg-pink-600", label: "Design" },
  { Icon: Rocket, delay: 1.5, color: "bg-cyan-600", label: "Launch" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-xs sm:text-sm font-medium"
            >
              <Sparkles size={14} />
              <span>Welcome to Abdrax Technologies</span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Transform Your</span>
              <br />
              <span className="text-white">Ideas Into </span>
              <span className="gradient-text">Digital Reality</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We craft cutting-edge software solutions, stunning websites, powerful
              mobile apps, and intelligent AI systems that drive your business forward.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="#contact-form"
                className="btn-primary px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white w-full sm:w-auto text-center flex items-center justify-center gap-2"
              >
                <span>Start Your Project</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/our-work"
                className="px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white border-2 border-white/20 hover:border-blue-500/50 hover:bg-white/5 transition-all duration-300 w-full sm:w-auto text-center"
              >
                View Our Work
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 pt-4"
            >
              {[
                { number: "50+", label: "Projects" },
                { number: "40+", label: "Clients" },
                { number: "6+", label: "Services" },
                { number: "24/7", label: "Support" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all text-center"
                >
                  <div className="text-xl sm:text-2xl font-bold text-blue-400">{stat.number}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Tech Visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-3xl scale-110" />

            {/* Main tech image */}
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10">
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
                alt="Software Development - Code on Screen"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
                priority
                unoptimized
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating tech badges over image */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {["React", "Next.js", "Flutter", "Python", "AI/ML", "Node.js"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-black/70 border border-white/20 text-white text-xs font-medium backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating icon cards — visible on lg+ */}
            {floatingIcons.map(({ Icon, delay, color, label }, i) => {
              const positions = [
                "-top-4 -left-4",
                "-top-4 right-8",
                "top-1/3 -left-6",
                "top-1/3 -right-6",
                "-bottom-4 left-8",
                "-bottom-4 -right-4",
              ];
              return (
                <motion.div
                  key={i}
                  className={`absolute ${positions[i]} hidden lg:flex flex-col items-center gap-1`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + delay, duration: 0.4 }}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
                    className={`p-3 rounded-xl ${color} shadow-lg`}
                  >
                    <Icon className="text-white" size={20} />
                  </motion.div>
                  <span className="text-xs text-gray-400 font-medium">{label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1 h-1 rounded-full bg-blue-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
