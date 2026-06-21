"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs, SiReact, SiNodedotjs, SiFlutter, SiPython,
  SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiFirebase,
} from "react-icons/si";
import LogoLoop from "@/components/LogoLoop";

const technologiesRow1 = [
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiReact, name: "React" },
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiFlutter, name: "Flutter" },
  { Icon: SiPython, name: "Python" },
];

const technologiesRow2 = [
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiTailwindcss, name: "Tailwind" },
  { Icon: SiFirebase, name: "Firebase" },
];

export default function TechStack() {
  return (
    <section className="section-wrapper">
      {/* SVG gradient def */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#06b6d4" offset="0%" />
            <stop stopColor="#818cf8" offset="100%" />
          </linearGradient>
        </defs>
      </svg>

      {/* Subtle radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(129,140,248,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="eyebrow mb-4">Built With The Best</div>
          <h2 className="section-heading">
            Our <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="section-description">
            We use cutting-edge technologies to build robust and scalable solutions
          </p>
        </motion.div>

        {/* Scrolling rows */}
        <div className="space-y-8 overflow-hidden">
          <LogoLoop
            logos={technologiesRow1.map((tech) => ({
              node: (
                <div className="flex flex-col items-center gap-2 px-2 group/logo">
                  <tech.Icon
                    style={{ fill: "url(#tech-gradient)" }}
                    size={48}
                    className="group-hover/logo:scale-110 transition-transform duration-300"
                  />
                  <span className="text-xs text-gray-600 group-hover/logo:text-gray-400 transition-colors font-medium">{tech.name}</span>
                </div>
              ),
              title: tech.name,
            }))}
            speed={45}
            direction="left"
            logoHeight={80}
            gap={50}
            hoverSpeed={0}
            scaleOnHover={false}
            fadeOut={true}
            fadeOutColor="#060609"
          />

          <LogoLoop
            logos={technologiesRow2.map((tech) => ({
              node: (
                <div className="flex flex-col items-center gap-2 px-2 group/logo">
                  <tech.Icon
                    style={{ fill: "url(#tech-gradient)" }}
                    size={48}
                    className="group-hover/logo:scale-110 transition-transform duration-300"
                  />
                  <span className="text-xs text-gray-600 group-hover/logo:text-gray-400 transition-colors font-medium">{tech.name}</span>
                </div>
              ),
              title: tech.name,
            }))}
            speed={35}
            direction="right"
            logoHeight={80}
            gap={50}
            hoverSpeed={0}
            scaleOnHover={false}
            fadeOut={true}
            fadeOutColor="#060609"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-gray-600 text-sm mt-10"
        >
          And many more technologies to meet your specific needs
        </motion.p>
      </div>
    </section>
  );
}
