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

const techStack = [
  "Salesforce",
  "HubSpot",
  "Mixpanel",
  "Amplitude",
  "Marketo",
  "Looker",
  "LinkedIn Campaign Manager",
  "Google Ads",
  "Figma",
  "Notion",
];

export default function About() {
  return (
    <section className="py-32 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-16"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight">
              La operadora detrás de la estrategia
            </h2>
            <div className="w-16 h-px bg-[#52525B] mt-6" />
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              variants={itemVariants}
              className="prose prose-invert prose-lg max-w-none"
            >
              <p className="text-[#A1A1AA] leading-relaxed text-lg">
                No escribo newsletters bonitas. Construyo{" "}
                <strong className="text-[#F5F5F5]">máquinas de crecimiento</strong>.
              </p>
              <p className="text-[#A1A1AA] leading-relaxed">
                En 9 años he liderado marketing en startups B2B SaaS en momentos críticos: 
                lanzamientos, expansiones internacionales, y pivots de posicionamiento. 
                Mi especialidad es el{" "}
                <strong className="text-[#F5F5F5]">mercado español e italiano</strong>—dos 
                de los mercados más complejos de Europa por su fragmentación geográfica y cultural.
              </p>
              <p className="text-[#A1A1AA] leading-relaxed">
                En Teamtailor pasé de "sin presencia en Iberia e Italia" a liderar esos 
                mercados en 18 meses. En Tiller, entré en Italia con cero brand awareness 
                y salí con 300+ restaurantes activos. En WeRoad optimicé el lifecycle 
                marketing para reducir CAC en un 23%.
              </p>
              <p className="text-[#A1A1AA] leading-relaxed">
                Hablo el idioma de{" "}
                <strong className="text-[#F5F5F5]">CAC, LTV, payback period y pipeline velocity</strong>. 
                Trabajo con herramientas como Salesforce, HubSpot, Mixpanel y Amplitude. 
                No necesito una agencia para ejecutar—sé cómo hacerlo yo misma y cómo 
                liderar equipos para escalarlo.
              </p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-[#52525B]/20">
              <h3 className="text-sm font-medium text-[#52525B] uppercase tracking-wider mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-[#141415] border border-[#52525B]/30 rounded-md text-sm text-[#A1A1AA] hover:border-[#52525B] hover:text-[#F5F5F5] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
