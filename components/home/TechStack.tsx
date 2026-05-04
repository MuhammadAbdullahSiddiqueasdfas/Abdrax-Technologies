"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTensorflow,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiFigma,
  SiTailwindcss,
  SiTypescript,
  SiFlutter,
  SiFirebase,
  SiGraphql,
  SiKubernetes,
} from "react-icons/si";

const technologies = [
  { Icon: SiReact, name: "React", color: "#61DAFB" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { Icon: SiPython, name: "Python", color: "#3776AB" },
  { Icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { Icon: SiDocker, name: "Docker", color: "#2496ED" },
  { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: SiFlutter, name: "Flutter", color: "#02569B" },
  { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { Icon: SiGraphql, name: "GraphQL", color: "#E10098" },
  { Icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]" />

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
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We use cutting-edge technologies to build robust and scalable solutions
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group"
            >
              <div className="aspect-square p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center justify-center gap-3 hover:bg-white/10">
                <tech.Icon
                  className="text-4xl transition-all duration-300"
                  style={{ color: tech.color }}
                />
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors font-medium">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
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
