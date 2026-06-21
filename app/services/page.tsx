"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BorderGlow from "@/components/BorderGlow";
import {
  Code2, Smartphone, Brain, Palette, Monitor,
  ArrowRight, CheckCircle2, Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "We build fast, scalable, and visually stunning websites and web applications using modern frameworks like Next.js, React, and Node.js. From landing pages to complex SaaS platforms, we deliver pixel-perfect results.",
    features: [
      "Custom website design & development",
      "E-commerce solutions",
      "Progressive Web Apps (PWA)",
      "API development & integration",
      "Performance optimization",
      "SEO-friendly architecture",
    ],
    gradient: "from-cyan-500 to-blue-600",
    glowColor: "0 182 212",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android. We use Flutter and React Native to build apps that users love.",
    features: [
      "iOS & Android development",
      "Cross-platform with Flutter",
      "UI/UX design for mobile",
      "App Store & Play Store deployment",
      "Push notifications & real-time features",
      "Ongoing maintenance & updates",
    ],
    gradient: "from-violet-500 to-purple-600",
    glowColor: "139 92 246",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Harness the power of artificial intelligence to automate processes, gain insights, and make smarter decisions. We build custom ML models, chatbots, and intelligent automation systems.",
    features: [
      "Custom ML model development",
      "AI-powered chatbots",
      "Natural Language Processing (NLP)",
      "Computer vision solutions",
      "Predictive analytics",
      "AI integration into existing systems",
    ],
    gradient: "from-emerald-500 to-teal-600",
    glowColor: "16 185 129",
  },
  {
    icon: Monitor,
    title: "Software Development",
    description: "Enterprise-grade software solutions tailored to your specific business needs. We design, develop, and deploy robust systems that streamline operations and boost productivity.",
    features: [
      "Custom enterprise software",
      "ERP & CRM systems",
      "Database design & optimization",
      "Cloud-based solutions",
      "Legacy system modernization",
      "DevOps & CI/CD pipelines",
    ],
    gradient: "from-orange-500 to-red-600",
    glowColor: "249 115 22",
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    description: "Eye-catching visual designs that communicate your brand message and captivate your audience. From logos to full brand identities, we create designs that leave a lasting impression.",
    features: [
      "Logo & brand identity design",
      "UI/UX design",
      "Marketing materials & banners",
      "Social media graphics",
      "Packaging design",
      "Motion graphics & animations",
    ],
    gradient: "from-pink-500 to-rose-600",
    glowColor: "236 72 153",
  },
];

const processSteps = [
  { step: "01", title: "Discovery", description: "We start by understanding your goals, audience, and requirements through in-depth consultation." },
  { step: "02", title: "Planning", description: "We create a detailed roadmap, wireframes, and technical architecture tailored to your project." },
  { step: "03", title: "Development", description: "Our team builds your solution using agile sprints with regular updates and feedback loops." },
  { step: "04", title: "Launch", description: "After thorough testing and QA, we deploy your product and provide ongoing support." },
];

export default function ServicesPage() {
  return (
    <div className="pt-28 min-h-screen">

      {/* ── Hero ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(59,130,246,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

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
              className="mb-6"
            >
              <span className="eyebrow">
                <Sparkles size={14} />
                What We Offer
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Our </span>
              <span className="text-gradient">Services</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              Comprehensive digital solutions designed to help your business grow, scale,
              and succeed in the modern digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services List ── */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <BorderGlow
                borderRadius={24}
                glowRadius={40}
                glowColor={service.glowColor}
                backgroundColor="rgba(255,255,255,0.03)"
                colors={["#06b6d4", "#818cf8"]}
                fillOpacity={0.15}
              >
                <div className="p-8 md:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Left */}
                    <div>
                      <div className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} items-center justify-center mb-6 shadow-xl`}>
                        <service.icon size={26} className="text-white" strokeWidth={1.5} />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                        {service.description}
                      </p>
                      <Link
                        href="/contact"
                        className="group btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
                      >
                        <span>Get a Quote</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Right: Features */}
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                        What&apos;s Included
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, fi) => (
                          <li key={fi} className="flex items-start gap-3">
                            <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-wrapper">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(129,140,248,0.05),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="eyebrow mb-4">How We Work</div>
            <h2 className="section-heading">
              <span className="text-white">Our </span>
              <span className="text-gradient">Process</span>
            </h2>
            <p className="section-description">A proven workflow that delivers results every time</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="relative group"
              >
                <div className="glass-card p-8 h-full hover:border-cyan-500/25">
                  <div className="text-5xl font-bold text-gradient mb-4 leading-none">{step.step}</div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-cyan-500/40 to-transparent z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(6,182,212,0.08),transparent_65%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center p-12 md:p-16 rounded-3xl bg-white/[0.04] border border-white/10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">Not Sure Which Service </span>
              <span className="text-gradient">You Need?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Let&apos;s talk. We&apos;ll help you figure out the best solution for your goals.
            </p>
            <Link
              href="/contact"
              className="group btn-primary px-8 py-4 rounded-xl text-base font-semibold text-white inline-flex items-center gap-3 justify-center"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
