"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, User, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "CEO, TechVenture Pakistan",
    rating: 5,
    text: "Their professionalism and technical expertise exceeded our expectations. The team delivered a flawless product on time and within budget. Highly recommended for any serious digital project!",
  },
  {
    name: "Fatima Khan",
    role: "Founder, StyleHub",
    rating: 5,
    text: "The mobile app they developed for our e-commerce business is outstanding. The user interface is intuitive, and the performance is flawless. Our sales have increased by 40% since launch!",
  },
  {
    name: "Muhammad Bilal",
    role: "Director, Smart Solutions",
    rating: 5,
    text: "Working with Abdrax Technologies on our AI project was a game-changer. They delivered a sophisticated solution that automated our processes and saved us countless hours. Truly innovative!",
  },
  {
    name: "Ayesha Malik",
    role: "Marketing Manager, BrandWise",
    rating: 4,
    text: "Their graphic design services have elevated our brand presence significantly. The creative team is talented, responsive, and understands our vision perfectly.",
  },
  {
    name: "Usman Ali",
    role: "CTO, DataFlow Systems",
    rating: 5,
    text: "Abdrax Technologies delivered our enterprise software on time and within budget. Their attention to detail and commitment to quality is unmatched. We're planning our next project with them already!",
  },
  {
    name: "Zainab Ahmed",
    role: "Owner, EduTech Academy",
    rating: 4,
    text: "The team at Abdrax Technologies built our learning management system with incredible precision. Their support throughout the development process was exceptional. A truly reliable partner!",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  // Show 3 at a time on desktop
  const visible = [0, 1, 2].map((offset) => testimonials[(active + offset) % testimonials.length]);

  return (
    <section className="section-wrapper">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(6,182,212,0.05),transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="eyebrow mb-4">Client Stories</div>
          <h2 className="section-heading text-white">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="section-description">
            Don&apos;t just take our word for it — hear from our satisfied clients
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <AnimatePresence mode="wait">
            {visible.map((testimonial, i) => (
              <motion.div
                key={`${active}-${i}`}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`relative p-6 rounded-2xl border transition-all duration-300 flex flex-col ${
                  i === 0
                    ? "bg-white/[0.06] border-cyan-500/25"
                    : "bg-white/[0.03] border-white/8"
                }`}
              >
                {/* Quote icon */}
                <Quote size={24} className="text-cyan-700 mb-3 flex-shrink-0" />

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, si) => (
                    <Star
                      key={si}
                      size={13}
                      className={si < testimonial.rating ? "text-cyan-400 fill-cyan-400" : "text-gray-700 fill-gray-700"}
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-5">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/8 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <User size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-gray-500 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all flex items-center justify-center text-gray-400 hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active ? "w-6 h-2 bg-cyan-400" : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all flex items-center justify-center text-gray-400 hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
