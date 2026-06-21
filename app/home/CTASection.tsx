"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".cta-orb", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-wrapper overflow-hidden">
      {/* Rotating ring decoration */}
      <div className="cta-orb absolute -top-32 -right-32 w-96 h-96 rounded-full border border-cyan-500/10 pointer-events-none" />
      <div className="cta-orb absolute -bottom-32 -left-32 w-80 h-80 rounded-full border border-violet-500/10 pointer-events-none" style={{ animationDelay: "10s" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(6,182,212,0.08),transparent_65%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative text-center p-12 md:p-20 rounded-3xl bg-white/[0.04] border border-white/10 overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 pointer-events-none" />

          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-8 shadow-xl shadow-cyan-500/25"
          >
            <Sparkles size={32} className="text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            <span className="text-white">Ready to Transform </span>
            <span className="text-gradient">Your Business?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-lg max-w-xl mx-auto mb-10"
          >
            Let&apos;s discuss your project and create something amazing together.
            Our team is ready to bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group btn-primary px-8 py-4 rounded-xl text-base font-semibold text-white inline-flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <span>Get Started Now</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/our-work"
              className="px-8 py-4 rounded-xl text-base font-semibold text-gray-300 border border-white/15 hover:border-cyan-500/40 hover:text-white hover:bg-white/5 transition-all duration-300 w-full sm:w-auto text-center"
            >
              View Our Portfolio
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-gray-600 text-sm mt-8"
          >
            Free consultation&ensp;•&ensp;100% satisfaction guarantee&ensp;•&ensp;Quick turnaround
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
