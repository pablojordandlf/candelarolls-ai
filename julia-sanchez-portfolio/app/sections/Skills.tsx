"use client";

import { motion } from "framer-motion";

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

const coreSkills = [
  "B2B SaaS Marketing Strategy",
  "Multi-Market Expansion",
  "Demand Generation",
  "Lifecycle Marketing & Retention",
  "Marketing Operations",
  "Team Building",
];

const techStack = [
  "Salesforce",
  "HubSpot",
  "Marketo",
  "Mixpanel",
  "Amplitude",
  "Looker",
  "LinkedIn Campaign Manager",
  "Google Ads",
  "Figma",
  "Notion",
];

const languages = [
  { flag: "🇪🇸", name: "Español", level: "Nativo" },
  { flag: "🇬🇧", name: "Inglés", level: "C2" },
  { flag: "🇮🇹", name: "Italiano", level: "C1" },
  { flag: "🇫🇷", name: "Francés", level: "B2" },
];

export default function Skills() {
  return (
    <section className="py-32 bg-[#141415]">
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
              Stack y habilidades
            </h2>
            <div className="w-16 h-px bg-[#52525B]" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Core Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-medium text-[#52525B] uppercase tracking-wider mb-6">
                Core Skills
              </h3>
              <ul className="space-y-3">
                {coreSkills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-[#A1A1AA]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52525B]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-medium text-[#52525B] uppercase tracking-wider mb-6">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-[#0A0A0B] border border-[#52525B]/30 rounded-md text-sm text-[#A1A1AA] hover:border-[#52525B] hover:text-[#F5F5F5] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-medium text-[#52525B] uppercase tracking-wider mb-6">
                Idiomas
              </h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between py-2 border-b border-[#52525B]/10 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{lang.flag}</span>
                      <span className="text-[#A1A1AA]">{lang.name}</span>
                    </div>
                    <span className="text-sm text-[#52525B] font-mono">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
