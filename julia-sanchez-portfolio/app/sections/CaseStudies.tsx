"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "18 Meses, 3 Mercados",
    subtitle: "Cómo Construí el Marketing de Teamtailor desde Cero",
    description:
      "Teamtailor quería expandirse a Iberia e Italia. No había equipo, no había presupuesto, no había brand awareness. En 18 meses construí un equipo de 6 personas, implementé Salesforce + HubSpot, y posicionamos a Teamtailor como líder en ATS en ambos mercados.",
    tags: ["Teamtailor", "Expansión", "B2B SaaS", "0→1"],
    metrics: [
      { label: "Mercados", value: "3" },
      { label: "Team size", value: "6" },
      { label: "Timeline", value: "18mo" },
    ],
  },
  {
    title: "Italia: De Cero a 300 Restaurantes",
    subtitle: "Market Entry sin Brand Awareness Previo",
    description:
      "Entrar en Italia con Tiller significaba competir contra players locales establecidos. Diseñé una estrategia de GTM bottom-up enfocada en restaurantes independientes, con contenido localizado y partnerships con asociaciones del sector. Resultado: 300+ locations en 12 meses.",
    tags: ["Tiller", "Market Entry", "Italia", "Restaurant Tech"],
    metrics: [
      { label: "Locations", value: "300+" },
      { label: "Timeline", value: "12mo" },
      { label: "Market", value: "Italy" },
    ],
  },
  {
    title: "Reduciendo CAC un 23%",
    subtitle: "La Matemática del Retention en WeRoad",
    description:
      "WeRoad tenía un problema de unit economics. Implementé modelos predictivos de churn, segmentación por cohortes, y automatizaciones de lifecycle que redujeron CAC en 23% mientras aumentábamos LTV un 15%.",
    tags: ["WeRoad", "Lifecycle", "Retention", "Unit Economics"],
    metrics: [
      { label: "CAC Reduction", value: "-23%" },
      { label: "LTV Increase", value: "+15%" },
      { label: "Focus", value: "CRM" },
    ],
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

export default function CaseStudies() {
  return (
    <section id="cases" className="py-32 bg-[#0A0A0B]">
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
              Casos de estudio
            </h2>
            <div className="w-16 h-px bg-[#52525B]" />
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                className={`group relative bg-[#141415] border border-[#52525B]/20 rounded-lg p-6 sm:p-8 hover:border-[#52525B]/50 transition-all duration-300 hover:-translate-y-1 ${
                  index === 2 ? "md:col-span-2" : ""
                }`}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">
                      {study.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="text-[#52525B] group-hover:text-[#A1A1AA] transition-colors flex-shrink-0"
                    />
                  </div>
                  <p className="text-[#A1A1AA] text-sm sm:text-base">
                    {study.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-[#52525B] leading-relaxed mb-6">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-6 mb-6 py-4 border-y border-[#52525B]/10">
                  {study.metrics.map((metric, i) => (
                    <div key={i}>
                      <div className="text-2xl font-mono font-semibold text-[#F5F5F5]">
                        {metric.value}
                      </div>
                      <div className="text-xs text-[#52525B] uppercase tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-[#0A0A0B] border border-[#52525B]/30 rounded-full text-xs text-[#A1A1AA]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
