"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Teamtailor",
    role: "Marketing Director Iberia & Italy",
    period: "Jul 2022 – Presente",
    description:
      "Built marketing from ground up in 3 markets simultaneously. Promoted to Marketing Director Dec 2024. 0→1 employer branding, demand gen, and lifecycle marketing. Stack: Salesforce, LinkedIn Campaign Manager, HubSpot.",
    highlights: ["3 markets", "Promoted 2024", "0→1 build"],
  },
  {
    company: "TheFork",
    role: "Senior Marketing Manager",
    period: "2021 – 2022",
    description:
      "Marketplace B2B2C strategy for restaurant supply acquisition. Multi-country campaign orchestration. Focus: Unit economics and supply-side growth.",
    highlights: ["B2B2C", "Multi-country"],
  },
  {
    company: "WeRoad",
    role: "Head of CRM & Lifecycle Marketing",
    period: "2019 – 2021",
    description:
      "Reduced CAC 23% through lifecycle optimization. Built retention mechanics for travel B2C platform. Implemented predictive churn models.",
    highlights: ["-23% CAC", "Predictive models"],
  },
  {
    company: "Tiller Systems",
    role: "Marketing Manager Southern Europe",
    period: "2017 – 2019",
    description:
      "Market entry Italy: 0→300+ restaurant locations. B2B SaaS for restaurant tech (POS, payments, analytics). First marketing hire for Southern Europe expansion.",
    highlights: ["Italy entry", "300+ locations"],
  },
];

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

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-[#141415]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight mb-4">
              Trayectoria
            </h2>
            <div className="w-16 h-px bg-[#52525B]" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[#52525B]/30" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-[#F5F5F5] ring-4 ring-[#141415]" />

                  {/* Content */}
                  <div className="group">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">
                        {exp.company}
                      </h3>
                      <span className="text-sm text-[#52525B] font-mono">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-[#A1A1AA] font-medium mb-3">
                      {exp.role}
                    </p>
                    
                    <p className="text-[#52525B] leading-relaxed mb-4 max-w-2xl">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-[#0A0A0B] border border-[#52525B]/30 rounded-full text-xs text-[#A1A1AA]"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
