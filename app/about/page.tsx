"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Rocket,
  Users,
  Award,
  Lightbulb,
  Code2,
  Smartphone,
  Brain,
  Palette,
  Monitor,
  ArrowRight,
  Sparkles,
  Bot,
  TrendingUp,
} from "lucide-react";
import TargetCursor from "@/components/TargetCursor";
import BorderGlow from "@/components/BorderGlow";
import PixelCard from "@/components/PixelCard";
import SpotlightCard from "@/components/SpotlightCard";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of the curve, embracing the latest technologies to deliver forward-thinking solutions that give your business a competitive edge.",
    iconColor: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We treat every client as a long-term partner. Your success is our success, and we're committed to building relationships that last.",
    iconColor: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "Every line of code, every design element, every deliverable goes through rigorous quality checks to ensure it meets the highest standards.",
    iconColor: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: Rocket,
    title: "Agile Delivery",
    description:
      "We move fast without breaking things. Our agile process ensures rapid delivery, transparent communication, and on-time results.",
    iconColor: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
];

const team = [
  {
    name: "Abdrax Team",
    role: "Full-Stack Developers",
    icon: Code2,
    description:
      "Expert engineers building robust web and mobile applications.",
    variant: "blue",
  },
  {
    name: "Design Studio",
    role: "UI/UX & Graphic Designers",
    icon: Palette,
    description: "Creative minds crafting beautiful, user-centric experiences.",
    variant: "blue",
  },
  {
    name: "AI Lab",
    role: "AI & ML Engineers",
    icon: Bot,
    description:
      "Specialists building intelligent automation and ML solutions.",
    variant: "blue",
  },
  {
    name: "Growth Team",
    role: "Digital Marketing",
    icon: TrendingUp,
    description: "Strategists driving brand growth across digital channels.",
    variant: "blue",
  },
];

const services = [
  { icon: Code2, label: "Web Development" },
  { icon: Smartphone, label: "App Development" },
  { icon: Brain, label: "AI Solutions" },
  { icon: Monitor, label: "Software Development" },
  { icon: Palette, label: "Graphic Designing" },
];

export default function AboutPage() {
  return (
    <div className="pt-32 bg-black min-h-screen">
      <TargetCursor targetSelector=".cursor-target" />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(6,182,212,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6 cursor-target"
            >
              <Sparkles />
              <span>About Abdrax Technologies</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 cursor-target">
              <span className="text-white">We Build the </span>
              <span className="text-cyan-500">Digital Future</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed cursor-target">
              Abdrax Technologies is a Pakistan-based software company dedicated
              to transforming ambitious ideas into powerful digital products.
              From startups to enterprises, we deliver solutions that drive real
              growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(6,182,212,0.05),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white cursor-target">
                Our <span className="text-cyan-500">Story</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed cursor-target">
                <p>
                  Founded in Hassan Abdal, Pakistan, Abdrax Technologies was
                  born from a simple belief: every business deserves access to
                  world-class digital solutions, regardless of size or budget.
                </p>
                <p>
                  Our team of passionate engineers, designers, and strategists
                  came together with a shared mission — to bridge the gap
                  between great ideas and great technology. We&apos;ve since
                  grown into a full-service digital agency trusted by clients
                  across Pakistan and beyond.
                </p>
                <p>
                  With over 42 projects delivered and 30+ happy clients, we
                  continue to push boundaries, embrace new technologies, and
                  deliver solutions that make a measurable difference.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { number: "42+", label: "Projects" },
                  { number: "30+", label: "Clients" },
                  { number: "5+", label: "Years Exp" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 text-center cursor-target hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="text-2xl font-bold text-cyan-500">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Services Grid */}
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
                  className="cursor-target h-full"
                >
                  <SpotlightCard
                    className="h-full border-white/10 hover:border-white/20 transition-all duration-300 p-5 flex flex-col items-center justify-center gap-3 text-center"
                    spotlightColor="rgba(6, 182, 212, 0.15)"
                  >
                    <service.icon
                      className="text-cyan-400 text-4xl mb-1"
                      strokeWidth={1.5}
                    />
                    <span className="text-xs text-gray-300 font-medium leading-tight">
                      {service.label}
                    </span>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-wrapper">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.05),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 cursor-target"
          >
            <h2 className="section-heading text-white">
              Our Core <span className="text-cyan-500">Values</span>
            </h2>
            <p className="section-description">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-target"
              >
                <SpotlightCard
                  className="h-full border-white/10 hover:border-white/20 transition-all duration-300"
                  spotlightColor="rgba(6, 182, 212, 0.15)"
                >
                  <div className="mb-6">
                    <value.icon
                      className={`w-12 h-12 ${value.iconColor}`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-wrapper bg-dark-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.05),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 cursor-target"
          >
            <h2 className="section-heading text-white">
              Meet Our <span className="text-cyan-500">Team</span>
            </h2>
            <p className="section-description">
              Talented professionals united by a passion for technology and
              innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group cursor-target h-full"
              >
                <div className="relative h-full">
                  <PixelCard
                    variant={member.variant as any}
                    className="h-full rounded-2xl border-white/10"
                  >
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
                      <member.icon
                        className="text-white text-6xl mx-auto mb-6"
                        strokeWidth={1}
                      />
                      <h3 className="text-lg font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-cyan-400 text-sm font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </PixelCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-wrapper">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-12 md:p-16 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md cursor-target"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">Ready to Work </span>
              <span className="text-cyan-500">Together?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Let&apos;s build something great. Reach out and tell us about your
              project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary px-8 py-4 rounded-xl text-base font-semibold text-white inline-flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <span>Get In Touch</span>
                <ArrowRight />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-xl text-base font-semibold text-white border-2 border-white/20 hover:border-cyan-500/50 hover:bg-white/5 transition-all duration-300 w-full sm:w-auto text-center cursor-target"
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
