"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Smartphone, Brain, Palette, Monitor, Megaphone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android devices.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Intelligent automation and machine learning solutions that transform your business operations and decision-making.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    icon: Monitor,
    title: "Software Development",
    description:
      "Enterprise-grade software solutions tailored to your specific business needs and workflows.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    description:
      "Eye-catching visual designs that communicate your brand message and captivate your audience.",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    description:
      "Strategic social media campaigns that build your brand presence and engage your target audience.",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.05),transparent_50%)]" />

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
            <span className="text-white">Our </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions to elevate your business to new heights
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`h-full p-8 rounded-2xl ${service.bgColor} border ${service.borderColor} hover:border-opacity-50 transition-all duration-300 hover:transform hover:scale-105`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="text-white text-2xl" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group-hover:gap-3 duration-300"
                >
                  Learn More
                  <ArrowRight className="text-lg" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-xl text-base font-semibold text-white"
          >
            <span>View All Services</span>
            <ArrowRight className="text-xl" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
