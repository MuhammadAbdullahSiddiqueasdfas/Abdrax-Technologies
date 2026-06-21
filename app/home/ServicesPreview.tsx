"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Code2, Smartphone, Brain, Monitor, Palette } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    icon: Code2,
    accent: "from-cyan-500 to-blue-600",
    badge: "Most Popular",
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    icon: Smartphone,
    accent: "from-violet-500 to-purple-600",
    badge: null,
  },
  {
    title: "AI Solutions",
    description: "Intelligent automation and machine learning solutions that transform your business operations and decision-making.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80",
    icon: Brain,
    accent: "from-emerald-500 to-teal-600",
    badge: "Trending",
  },
  {
    title: "Software Development",
    description: "Enterprise-grade software solutions tailored to your specific business needs and workflows.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    icon: Monitor,
    accent: "from-orange-500 to-red-600",
    badge: null,
  },
  {
    title: "Graphic Designing",
    description: "Eye-catching visual designs that communicate your brand message and captivate your audience.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    icon: Palette,
    accent: "from-pink-500 to-rose-600",
    badge: null,
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl overflow-hidden bg-white/[0.04] border border-white/10 hover:border-cyan-500/30 transition-all duration-400 flex flex-col">
        {/* Image section */}
        <div className="relative h-52 overflow-hidden flex-shrink-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

          {/* Icon + badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center shadow-lg`}>
              <service.icon size={18} className="text-white" />
            </div>
            {service.badge && (
              <span className="text-xs font-semibold text-white bg-white/20 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-full">
                {service.badge}
              </span>
            )}
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-4 left-4">
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
            {service.description}
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-white group/link transition-colors duration-300"
          >
            Learn More
            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bottom gradient line on hover */}
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>
    </motion.div>
  );
}

export default function ServicesPreview() {
  return (
    <section className="section-wrapper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="eyebrow mb-4">What We Build</div>
          <h2 className="section-heading">
            <span className="text-white">Our </span>
            <span className="text-gradient">Services</span>
          </h2>
          <p className="section-description">
            Comprehensive digital solutions to elevate your business to new heights
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="group btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white"
          >
            <span>View All Services</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
