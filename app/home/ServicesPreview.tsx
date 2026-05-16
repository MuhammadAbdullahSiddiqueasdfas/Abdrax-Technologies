"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BorderGlow from "@/components/BorderGlow";

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
  },
  {
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android devices.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    title: "AI Solutions",
    description:
      "Intelligent automation and machine learning solutions that transform your business operations and decision-making.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80",
  },
  {
    title: "Software Development",
    description:
      "Enterprise-grade software solutions tailored to your specific business needs and workflows.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  },
  {
    title: "Graphic Designing",
    description:
      "Eye-catching visual designs that communicate your brand message and captivate your audience.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
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
              <BorderGlow
                className="h-full"
                borderRadius={16}
                glowRadius={30}
                glowColor="210 100 60"
                colors={['#3b82f6', '#60a5fa', '#93c5fd']}
                fillOpacity={0.2}
              >
                <div className="h-full rounded-2xl bg-white/5 transition-all duration-300 overflow-hidden flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight className="text-lg" />
                    </Link>
                  </div>
                </div>
              </BorderGlow>
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
