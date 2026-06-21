"use client";

import { motion } from "framer-motion";
import { Award, Clock, Users, Rocket, ShieldCheck, Headphones } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

const features = [
  {
    icon: Award,
    title: "Expert Team",
    description: "Our skilled professionals bring years of experience in cutting-edge technologies and best practices.",
    gradient: "from-cyan-500 to-blue-500",
    delay: 0,
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We value your time and ensure project milestones are met with precision and punctuality.",
    gradient: "from-violet-500 to-purple-500",
    delay: 0.1,
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "Your vision drives our work. We collaborate closely to ensure your goals are achieved.",
    gradient: "from-emerald-500 to-teal-500",
    delay: 0.2,
  },
  {
    icon: Rocket,
    title: "Innovative Solutions",
    description: "We leverage the latest technologies to create forward-thinking solutions that scale.",
    gradient: "from-orange-500 to-amber-500",
    delay: 0.3,
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Rigorous testing and quality checks ensure your product is reliable and bug-free.",
    gradient: "from-pink-500 to-rose-500",
    delay: 0.4,
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated support team is always available to assist you whenever you need help.",
    gradient: "from-cyan-500 to-sky-500",
    delay: 0.5,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-wrapper">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(6,182,212,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="eyebrow mb-4">Why Abdrax</div>
          <h2 className="section-heading">
            <span className="text-white">Why Choose </span>
            <span className="text-gradient">Abdrax Technologies</span>
          </h2>
          <p className="section-description">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: feature.delay, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group"
            >
              <SpotlightCard
                className="h-full border-white/10 hover:border-white/20 transition-all duration-300"
                spotlightColor="rgba(6, 182, 212, 0.12)"
              >
                {/* Icon with gradient */}
                <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} items-center justify-center mb-5 shadow-lg`}>
                  <feature.icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
