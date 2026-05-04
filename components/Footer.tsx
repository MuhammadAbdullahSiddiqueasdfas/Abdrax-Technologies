import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const services = [
  "Web Development",
  "App Development",
  "AI Solutions",
  "Software Development",
  "Graphic Designing",
  "Social Media Management",
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-5">
              <Image
                src="/logo.png"
                alt="Abdrax Technologies"
                width={160}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming ideas into powerful digital solutions. We build
              websites, apps, AI systems, and software that drive real business
              growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-400 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">
                  Hassan Abdal, Wah, Pakistan 47040
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-400 flex-shrink-0" size={18} />
                <a
                  href="mailto:abdraxoffical@gmail.com"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                >
                  abdraxoffical@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-400 flex-shrink-0" size={18} />
                <a
                  href="tel:+923701371522"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                >
                  +92 370 137 1522
                </a>
              </li>
            </ul>

            {/* Working Hours */}
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white text-xs font-semibold mb-2">Working Hours</p>
              <p className="text-gray-400 text-xs">Mon – Sat: 9:00 AM – 7:00 PM</p>
              <p className="text-gray-400 text-xs">Sunday: By Appointment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Abdrax Technologies. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with ❤️ in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
