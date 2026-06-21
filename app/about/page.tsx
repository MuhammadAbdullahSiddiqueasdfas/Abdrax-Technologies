"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Rocket, Users, Award, Lightbulb, Code2, Smartphone,
  Brain, Palette, Monitor, ArrowRight, Sparkles, Bot, TrendingUp,
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import PixelCard from "@/components/PixelCard";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of the curve, embracing the latest technologies to deliver forward-thinking solutions that give your business a competitive edge.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We treat every client as a long-term partner. Your success is our success, and we're committed to building relationships that last.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Every line of code, every design element, every deliverable goes through rigorous quality checks to ensure it meets the highest standards.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Rocket,
    title: "Agile Delivery",
    description: "We move fast without breaking things. Our agile process ensures rapid delivery, transparent communication, and on-time results.",
    gradient: "from-orange-500 to-amber-600",
  },
];

const team = [
  { name: "Abdrax Team", role: "Full-Stack Developers", icon: Code2, description: "Expert engineers building robust web and mobile applications." },
  { name: "Design Studio", role: "UI/UX & Graphic Designers", icon: Palette, description: "Creative minds crafting beautiful, user-centric experiences." },
  { name: "AI Lab", role: "AI & ML Engineers", icon: Bot, description: "Specialists building intelligent automation and ML solutions." },
  { name: "Growth Team", role: "Digital Marketing", icon: TrendingUp, description: "Strategists driving brand growth across digital channels." },
];

const services = [
  { icon: Code2, label: "Web Development" },
  { icon: Smartphone, label: "App Development" },
  { icon: Brain, label: "AI Solutions" },
  { icon: Monitor, label: "Software Development" },
  { icon: Palette, label: "Graphic Designing" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] } }),
};

export default function AboutPage() {
  return (
    <div className="pt-28 min-h-screen">

      {/* ── Hero ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(6,182,212,0.12),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp} custom={0} className="mb-6">
              <span className="eyebrow">
                <Sparkles size={14} />
                About Abdrax Technologies
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp} custom={0.1}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-white">We Build the </span>
              <span className="text-gradient">Digital Future</span>
            </motion.h1>

            <motion.p
              variants={fadeUp} custom={0.2}
              className="text-lg sm:text-xl text-gray-400 leading-relaxed"
            >
              Abdrax Technologies is a Pakistan-based software company dedicated to transforming
              ambitious ideas into powerful digital products. From startups to enterprises, we
              deliver solutions that drive real growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(6,182,212,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="eyebrow mb-5">Our Journey</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-base">
                <p>
                  Founded in Hassan Abdal, Pakistan, Abdrax Technologies was born from a simple belief:
                  every business deserves access to world-class digital solutions, regardless of size or budget.
                </p>
                <p>
                  Our team of passionate engineers, designers, and strategists came together with a shared
                  mission — to bridge the gap between great ideas and great technology. We&apos;ve since grown
                  into a full-service digital agency trusted by clients across Pakistan and beyond.
                </p>
                <p>
                  With over 42 projects delivered and 30+ happy clients, we continue to push boundaries,
                  embrace new technologies, and deliver solutions that make a measurable difference.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { number: "42+", label: "Projects" },
                  { number: "30+", label: "Clients" },
                  { number: "5+", label: "Years Exp" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-cyan-500/25 transition-all text-center"
                  >
                    <div className="text-2xl font-bold text-gradient">{stat.number}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="h-full"
                >
                  <SpotlightCard
                    className="h-full border-white/10 hover:border-cyan-500/25 transition-all duration-300 p-5 flex flex-col items-center justify-center gap-3 text-center"
                    spotlightColor="rgba(6, 182, 212, 0.12)"
                  >
                    <service.icon className="text-cyan-400" size={36} strokeWidth={1.5} />
                    <span className="text-xs text-gray-300 font-medium leading-tight">{service.label}</span>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-wrapper">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(129,140,248,0.05),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="eyebrow mb-4">What Drives Us</div>
            <h2 className="section-heading text-white">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="section-description">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <SpotlightCard
                  className="h-full border-white/10 hover:border-white/20 transition-all duration-300"
                  spotlightColor="rgba(6, 182, 212, 0.1)"
                >
                  <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} items-center justify-center mb-5 shadow-lg`}>
                    <value.icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{value.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section-wrapper">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.04),transparent_55%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="eyebrow mb-4">Our People</div>
            <h2 className="section-heading text-white">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="section-description">
              Talented professionals united by a passion for technology and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="h-full min-h-[220px]"
              >
                <PixelCard variant="blue" className="h-full rounded-2xl border-white/10">
                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8 gap-3">
                    <member.icon className="text-white" size={48} strokeWidth={1} />
                    <h3 className="text-base font-bold text-white">{member.name}</h3>
                    <p className="text-cyan-400 text-xs font-medium">{member.role}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{member.description}</p>
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-wrapper">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(6,182,212,0.08),transparent_65%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center p-12 md:p-16 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">Ready to Work </span>
              <span className="text-gradient">Together?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Let&apos;s build something great. Reach out and tell us about your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group btn-primary px-8 py-4 rounded-xl text-base font-semibold text-white inline-flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <span>Get In Touch</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-xl text-base font-semibold text-gray-300 border border-white/15 hover:border-cyan-500/40 hover:text-white hover:bg-white/5 transition-all duration-300 w-full sm:w-auto text-center"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
