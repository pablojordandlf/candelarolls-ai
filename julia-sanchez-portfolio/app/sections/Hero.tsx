"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const metrics = [
  { value: "9+", label: "años" },
  { value: "3", label: "mercados" },
  { value: "2", label: "startups 0→1" },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-[#0A0A0B] to-[#141415]" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#F5F5F5 1px, transparent 1px), linear-gradient(90deg, #F5F5F5 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F5F5F5] mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Julia Sánchez
          </motion.h1>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="w-24 h-px bg-[#52525B] mb-6"
          />

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-[#A1A1AA] mb-8"
          >
            Directora de Marketing B2B SaaS
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-[#F5F5F5] max-w-2xl mb-10 leading-relaxed"
          >
            Construyo motores de crecimiento desde cero en mercados fragmentados.
          </motion.p>

          {/* Metrics Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mb-12"
          >
            {metrics.map((metric, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#141415] border border-[#52525B]/30 rounded-full text-sm"
              >
                <span className="font-mono font-semibold text-[#F5F5F5]">
                  {metric.value}
                </span>
                <span className="text-[#A1A1AA]">{metric.label}</span>
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F5F5F5] text-[#0A0A0B] font-medium rounded-md hover:bg-white transition-all hover:-translate-y-0.5"
            >
              Ver trayectoria
              <ArrowDown size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#52525B] text-[#A1A1AA] font-medium rounded-md hover:border-[#A1A1AA] hover:text-[#F5F5F5] transition-all"
            >
              <Mail size={18} />
              Contactar
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[#52525B] rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-[#A1A1AA] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
