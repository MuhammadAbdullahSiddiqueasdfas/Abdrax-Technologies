"use client";

import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";

const technologies = [
  { iconName: "SiReact", name: "React", color: "#61DAFB" },
  { iconName: "SiNextdotjs", name: "Next.js", color: "#FFFFFF" },
  { iconName: "SiNodedotjs", name: "Node.js", color: "#339933" },
  { iconName: "SiPython", name: "Python", color: "#3776AB" },
  { iconName: "SiTensorflow", name: "TensorFlow", color: "#FF6F00" },
  { iconName: "SiMongodb", name: "MongoDB", color: "#47A248" },
  { iconName: "SiPostgresql", name: "PostgreSQL", color: "#4169E1" },
  { iconName: "SiDocker", name: "Docker", color: "#2496ED" },
  { iconName: "SiFigma", name: "Figma", color: "#F24E1E" },
  { iconName: "SiTailwindcss", name: "Tailwind", color: "#06B6D4" },
  { iconName: "SiTypescript", name: "TypeScript", color: "#3178C6" },
  { iconName: "SiFlutter", name: "Flutter", color: "#02569B" },
  { iconName: "SiFirebase", name: "Firebase", color: "#FFCA28" },
  { iconName: "SiGraphql", name: "GraphQL", color: "#E10098" },
  { iconName: "SiKubernetes", name: "Kubernetes", color: "#326CE5" },
  { iconName: "SiAws", name: "AWS", color: "#FF9900" },
  { iconName: "SiGooglecloud", name: "Google Cloud", color: "#4285F4" },
  { iconName: "SiRedis", name: "Redis", color: "#DC382D" },
  { iconName: "SiGit", name: "Git", color: "#F05032" },
  { iconName: "SiJavascript", name: "JavaScript", color: "#F7DF1E" },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-dark-800 relative overflow-hidden w-full">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
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
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We use cutting-edge technologies to build robust and scalable solutions
          </p>
        </motion.div>

        {/* Scrolling Technologies */}
        <div className="relative overflow-hidden w-full">
          <div className="flex gap-12 tech-scroll">
            {/* First set */}
            {technologies.map((tech, index) => {
              const IconComponent = (SiIcons as any)[tech.iconName];
              
              if (!IconComponent) {
                return null;
              }
              
              return (
                <motion.div
                  key={`first-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex-shrink-0 group"
                >
                  <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 min-w-[120px]">
                    <IconComponent
                      className="text-5xl transition-all duration-300"
                      style={{ color: tech.color }}
                    />
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors font-medium whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
            {/* Duplicate set for seamless loop */}
            {technologies.map((tech, index) => {
              const IconComponent = (SiIcons as any)[tech.iconName];
              
              if (!IconComponent) {
                return null;
              }
              
              return (
                <motion.div
                  key={`second-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex-shrink-0 group"
                >
                  <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 min-w-[120px]">
                    <IconComponent
                      className="text-5xl transition-all duration-300"
                      style={{ color: tech.color }}
                    />
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors font-medium whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />
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

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .tech-scroll {
          animation: scroll 25s linear infinite;
        }
        .tech-scroll:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
