"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight, ChevronDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const TYPED_WORDS = ["Digital Reality", "Mobile Apps", "AI Solutions", "Web Platforms"];

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // GSAP particle effect for floating orbs
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-orb-1", {
        y: -30, x: 20, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut",
      });
      gsap.to(".hero-orb-2", {
        y: 20, x: -15, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1,
      });
      gsap.to(".hero-orb-3", {
        y: -15, x: 10, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = TYPED_WORDS[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % TYPED_WORDS.length);
        }
      }
    }, isDeleting ? 45 : 80);
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="hero-orb-1 absolute top-[15%] left-[8%] w-72 h-72 rounded-full bg-cyan-600/10 blur-[80px] pointer-events-none" />
      <div className="hero-orb-2 absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-blue-700/10 blur-[100px] pointer-events-none" />
      <div className="hero-orb-3 absolute top-[40%] right-[25%] w-48 h-48 rounded-full bg-violet-600/8 blur-[60px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-7">
            <span className="eyebrow">
              <Sparkles size={14} />
              Pakistan&apos;s Premier Software House
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            <span className="text-white">Transform Your Ideas Into&nbsp;</span>
            <br />
            <span className="relative inline-block">
              <span className="text-gradient">{displayed}</span>
              <span className="text-cyan-400 animate-pulse ml-0.5">|</span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
            We craft cutting-edge software solutions, stunning websites, powerful mobile apps,
            and intelligent AI systems that drive your business forward.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="#contact-form"
              className="group btn-primary px-8 py-4 rounded-xl text-base font-semibold text-white inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <span>Start Your Project</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/our-work"
              className="px-8 py-4 rounded-xl text-base font-semibold text-gray-300 border border-white/15 hover:border-cyan-500/40 hover:text-white hover:bg-white/5 transition-all duration-300 w-full sm:w-auto text-center"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { number: "42+", label: "Projects" },
              { number: "30+", label: "Clients" },
              { number: "5+", label: "Years Exp" },
              { number: "24/7", label: "Support" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, borderColor: "rgba(6,182,212,0.4)" }}
                className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center transition-colors"
              >
                <div className="text-2xl font-bold text-cyan-400">{stat.number}</div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 hover:text-cyan-400 transition-colors group"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} />
      </motion.a>
    </section>
  );
}
