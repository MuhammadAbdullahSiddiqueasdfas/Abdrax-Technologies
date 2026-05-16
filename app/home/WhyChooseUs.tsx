"use client";

import { motion } from "framer-motion";
import {
  Award,
  Clock,
  Users,
  Rocket,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

const features = [
  {
    icon: Award,
    title: "Expert Team",
    description:
      "Our skilled professionals bring years of experience in cutting-edge technologies and best practices.",
    color: "text-cyan-500",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We value your time and ensure project milestones are met with precision and punctuality.",
    color: "text-cyan-500",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "Your vision drives our work. We collaborate closely to ensure your goals are achieved.",
    color: "text-cyan-500",
  },
  {
    icon: Rocket,
    title: "Innovative Solutions",
    description:
      "We leverage the latest technologies to create forward-thinking solutions that scale.",
    color: "text-cyan-500",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Rigorous testing and quality checks ensure your product is reliable and bug-free.",
    color: "text-cyan-500",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our dedicated support team is always available to assist you whenever you need help.",
    color: "text-cyan-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-dark-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Why Choose{" "}
            <span className="text-cyan-500">Abdrax Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver
            exceptional results
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <SpotlightCard
                className="h-full border-white/10 hover:border-white/20 transition-all duration-300"
                spotlightColor="rgba(6, 182, 212, 0.15)"
              >
                {/* Icon */}
                <div className="mb-6">
                  <feature.icon className={`w-12 h-12 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
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
