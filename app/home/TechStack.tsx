"use client";

import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";
import LogoLoop from "@/components/LogoLoop";

const technologies = [
  { iconName: "SiNextdotjs", name: "Next.js", color: "#FFFFFF" },
  { iconName: "SiExpress", name: "Express", color: "#FFFFFF" },
  { iconName: "SiHtml5", name: "HTML5", color: "#FFFFFF" },
  { iconName: "SiCss3", name: "CSS3", color: "#FFFFFF" },
  { iconName: "SiJavascript", name: "JavaScript", color: "#FFFFFF" },
  { iconName: "SiMongodb", name: "MongoDB", color: "#FFFFFF" },
  { iconName: "SiPostgresql", name: "PostgreSQL", color: "#FFFFFF" },
  { iconName: "SiTailwindcss", name: "Tailwind", color: "#FFFFFF" },
];

export default function TechStack() {
  return (
    <section className="section-wrapper">
      {/* SVG Gradient Definition for Icons */}
      <svg width="0" height="0" className="absolute">
        <linearGradient id="cyan-blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#06b6d4" offset="0%" />
          <stop stopColor="#3b82f6" offset="100%" />
        </linearGradient>
      </svg>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-white">
            Our <span className="text-cyan-500">Tech Stack</span>
          </h2>
          <p className="section-description">
            We use cutting-edge technologies to build robust and scalable solutions
          </p>
        </motion.div>

        {/* Scrolling Technologies */}
        <div className="relative w-full">
          <LogoLoop
            logos={technologies
              .filter((tech) => (SiIcons as any)[tech.iconName])
              .map((tech) => {
                const IconComponent = (SiIcons as any)[tech.iconName];
                return {
                  node: <IconComponent style={{ fill: "url(#cyan-blue-gradient)" }} size={60} />,
                  title: tech.name,
                };
              })}
            speed={40}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#0a0a0a"
          />
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            And many more technologies to meet your specific needs
          </p>
        </motion.div>
      </div>

    </section>
  );
}
