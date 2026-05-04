"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "CEO, TechVenture Pakistan",
    image: "👨‍💼",
    rating: 5,
    text: "Abdrax Technologies transformed our business with their exceptional web development services. Their team's professionalism and technical expertise exceeded our expectations. Highly recommended!",
  },
  {
    name: "Fatima Khan",
    role: "Founder, StyleHub",
    image: "👩‍💼",
    rating: 5,
    text: "The mobile app they developed for our e-commerce business is outstanding. The user interface is intuitive, and the performance is flawless. Our sales have increased by 40% since launch!",
  },
  {
    name: "Muhammad Bilal",
    role: "Director, Smart Solutions",
    image: "👨‍💻",
    rating: 5,
    text: "Working with Abdrax Technologies on our AI project was a game-changer. They delivered a sophisticated solution that automated our processes and saved us countless hours. Truly innovative!",
  },
  {
    name: "Ayesha Malik",
    role: "Marketing Manager, BrandWise",
    image: "👩‍🎨",
    rating: 5,
    text: "Their graphic design and social media management services have elevated our brand presence significantly. The creative team is talented, responsive, and understands our vision perfectly.",
  },
  {
    name: "Usman Ali",
    role: "CTO, DataFlow Systems",
    image: "👨‍🔬",
    rating: 5,
    text: "Abdrax Technologies delivered our enterprise software on time and within budget. Their attention to detail and commitment to quality is unmatched. We're planning our next project with them already!",
  },
  {
    name: "Zainab Ahmed",
    role: "Owner, EduTech Academy",
    image: "👩‍🏫",
    rating: 5,
    text: "The team at Abdrax Technologies built our learning management system with incredible precision. Their support throughout the development process was exceptional. A truly reliable partner!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">What Our </span>
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-blue-500/20 group-hover:text-blue-500/30 transition-colors">
                  <Quote size={32} />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
