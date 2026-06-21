"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const stats = [
  { number: 42, suffix: "+", label: "Projects Completed", icon: "🚀" },
  { number: 30, suffix: "+", label: "Happy Clients", icon: "🤝" },
  { number: 100, suffix: "%", label: "Client Satisfaction", icon: "⭐" },
  { number: 5, suffix: "+", label: "Years Experience", icon: "💎" },
];

function Counter({ end, duration, suffix }: { end: number; duration: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      setCount(Math.floor(end * eased));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stats-line", {
        scaleX: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: { trigger: ".stats-line", start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="section-wrapper">
      {/* Top accent line */}
      <div className="stats-line absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="relative group"
            >
              <div className="p-6 md:p-8 rounded-2xl bg-white/[0.04] border border-white/8 hover:border-cyan-500/25 hover:bg-white/[0.06] transition-all duration-400 text-center overflow-hidden">
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="text-2xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight">
                  <Counter end={stat.number} duration={2} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
