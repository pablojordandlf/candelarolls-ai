"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Download } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "julia.sanchez@email.com",
    href: "mailto:julia.sanchez@email.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/juliasanchez",
    href: "https://linkedin.com/in/juliasanchez",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Madrid / Remoto (Europe timezones)",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Section Header */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F5] tracking-tight mb-6"
          >
            ¿Buscas una CMO que hable números y ejecute?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-[#A1A1AA] mb-12 max-w-xl mx-auto"
          >
            Estoy abierta a conversaciones sobre roles de Director/a de Marketing
            o CMO en startups B2B SaaS con ambición internacional.
          </motion.p>

          {/* Contact Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            {contactLinks.map((link) => (
              <div key={link.label} className="flex items-center gap-3 text-[#A1A1AA]">
                <link.icon size={18} className="text-[#52525B]" />
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="hover:text-[#F5F5F5] transition-colors"
                  >
                    {link.value}
                  </a>
                ) : (
                  <span>{link.value}</span>
                )}
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <a
              href="/cv-julia-sanchez.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5F5F5] text-[#0A0A0B] font-medium rounded-md hover:bg-white transition-all hover:-translate-y-0.5"
            >
              <Download size={18} />
              Descargar CV PDF
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
