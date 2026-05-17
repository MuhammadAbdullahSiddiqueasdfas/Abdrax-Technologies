"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-wrapper">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card text-center p-12 md:p-16 rounded-3xl"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 border border-white/10 mb-8"
          >
            <Rocket className="text-cyan-500 text-3xl  w-10" />
          </motion.div>

          {/* Heading */}
          <h2 className="section-heading text-cyan-500">
            Ready to Transform Your Business?
          </h2>

          {/* Description */}
          <p className="section-description mb-10">
            Let&apos;s discuss your project and create something amazing
            together. Our team is ready to bring your vision to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl text-base font-semibold bg-cyan-500 text-white hover:bg-cyan-600 transition-colors inline-flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <span>Get Started Now</span>
              <ArrowRight />
            </Link>
            <Link
              href="/our-work"
              className="px-8 py-4 rounded-xl text-base font-semibold text-white border-2 border-cyan-500 hover:border-cyan-600 hover:text-cyan-500 transition-all duration-300 w-full sm:w-auto text-center"
            >
              View Our Portfolio
            </Link>
          </div>

          {/* Additional Info */}
          <p className="text-cyan-500 text-md mt-8 gap-2">
            Free consultation • 100% satisfaction guarantee • Quick turnaround
          </p>
        </motion.div>
      </div>
    </section>
  );
}
