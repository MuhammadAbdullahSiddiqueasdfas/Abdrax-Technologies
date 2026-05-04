"use client";

import { motion } from "framer-motion";
import { Award, Clock, Users, Rocket, ShieldCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Team",
    description:
      "Our skilled professionals bring years of experience in cutting-edge technologies and best practices.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We value your time and ensure project milestones are met with precision and punctuality.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "Your vision drives our work. We collaborate closely to ensure your goals are achieved.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Rocket,
    title: "Innovative Solutions",
    description:
      "We leverage the latest technologies to create forward-thinking solutions that scale.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Rigorous testing and quality checks ensure your product is reliable and bug-free.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our dedicated support team is always available to assist you whenever you need help.",
    color: "from-indigo-500 to-blue-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(139,92,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

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
            <span className="text-white">Why Choose </span>
            <span className="gradient-text">Abdrax Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results
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
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="text-white text-3xl" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
