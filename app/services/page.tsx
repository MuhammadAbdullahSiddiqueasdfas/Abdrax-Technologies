"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BorderGlow from "@/components/BorderGlow";
import { Code2, Smartphone, Brain, Palette, Monitor, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "We build fast, scalable, and visually stunning websites and web applications using modern frameworks like Next.js, React, and Node.js. From landing pages to complex SaaS platforms, we deliver pixel-perfect results.",
    features: [
      "Custom website design & development",
      "E-commerce solutions",
      "Progressive Web Apps (PWA)",
      "API development & integration",
      "Performance optimization",
      "SEO-friendly architecture",
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    hoverBorder: "hover:border-blue-500/50",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android. We use Flutter and React Native to build apps that users love.",
    features: [
      "iOS & Android development",
      "Cross-platform with Flutter",
      "UI/UX design for mobile",
      "App Store & Play Store deployment",
      "Push notifications & real-time features",
      "Ongoing maintenance & updates",
    ],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    hoverBorder: "hover:border-purple-500/50",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Harness the power of artificial intelligence to automate processes, gain insights, and make smarter decisions. We build custom ML models, chatbots, and intelligent automation systems.",
    features: [
      "Custom ML model development",
      "AI-powered chatbots",
      "Natural Language Processing (NLP)",
      "Computer vision solutions",
      "Predictive analytics",
      "AI integration into existing systems",
    ],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    hoverBorder: "hover:border-green-500/50",
  },
  {
    icon: Monitor,
    title: "Software Development",
    description:
      "Enterprise-grade software solutions tailored to your specific business needs. We design, develop, and deploy robust systems that streamline operations and boost productivity.",
    features: [
      "Custom enterprise software",
      "ERP & CRM systems",
      "Database design & optimization",
      "Cloud-based solutions",
      "Legacy system modernization",
      "DevOps & CI/CD pipelines",
    ],
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    hoverBorder: "hover:border-orange-500/50",
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    description:
      "Eye-catching visual designs that communicate your brand message and captivate your audience. From logos to full brand identities, we create designs that leave a lasting impression.",
    features: [
      "Logo & brand identity design",
      "UI/UX design",
      "Marketing materials & banners",
      "Social media graphics",
      "Packaging design",
      "Motion graphics & animations",
    ],
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    hoverBorder: "hover:border-pink-500/50",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We start by understanding your goals, audience, and requirements through in-depth consultation.",
  },
  {
    step: "02",
    title: "Planning",
    description: "We create a detailed roadmap, wireframes, and technical architecture tailored to your project.",
  },
  {
    step: "03",
    title: "Development",
    description: "Our team builds your solution using agile sprints with regular updates and feedback loops.",
  },
  {
    step: "04",
    title: "Launch",
    description: "After thorough testing and QA, we deploy your product and provide ongoing support.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.1),transparent_60%)]" />
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm font-medium mb-6"
            >
              <Sparkles />
              <span>What We Offer</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Our </span>
              <span className="gradient-text">Services</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              Comprehensive digital solutions designed to help your business grow, scale,
              and succeed in the modern digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.04),transparent_50%)]" />
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
                borderRadius={16}
                glowRadius={30}
                glowColor="210 100 60"
                colors={['#3b82f6', '#60a5fa', '#93c5fd']}
                fillOpacity={0.2}
              >
                <div className={`p-8 md:p-10 rounded-2xl ${service.bgColor} transition-all duration-300`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left */}
                    <div>
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-5`}
                      >
                        <service.icon className="text-white text-2xl" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-xl text-sm font-semibold text-white"
                      >
                        <span>Get a Quote</span>
                        <ArrowRight />
                      </Link>
                    </div>

                    {/* Right: Features */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                        What&apos;s Included
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, fi) => (
                          <li key={fi} className="flex items-start gap-3">
                            <CheckCircle2 className="text-blue-400 mt-0.5 flex-shrink-0 text-sm" />
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

      {/* Process Section */}
      <section className="section-wrapper">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">
              <span className="text-white">Our </span>
              <span className="gradient-text">Process</span>
            </h2>
            <p className="section-description">
              A proven workflow that delivers results every time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-card p-8 h-full">
                  <div className="text-5xl font-bold gradient-text mb-4 leading-none">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-500/30 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-12 md:p-16 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">Not Sure Which Service </span>
              <span className="gradient-text">You Need?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Let&apos;s talk. We&apos;ll help you figure out the best solution for your goals.
            </p>
            <Link
              href="/contact"
              className="btn-primary px-8 py-4 rounded-xl text-base font-semibold text-white inline-flex items-center gap-3 justify-center"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
