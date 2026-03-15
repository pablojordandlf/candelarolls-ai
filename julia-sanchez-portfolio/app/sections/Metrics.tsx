"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = "", prefix = "", duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * value));

        if (now < endTime) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-mono font-semibold text-[#F5F5F5]">
      {prefix}{count}{suffix}
    </span>
  );
}

const metrics = [
  { value: 3, label: "Mercados simultáneos", suffix: "" },
  { value: 6, label: "Team size construido", suffix: "" },
  { value: 23, label: "CAC reduction", suffix: "%", prefix: "-" },
  { value: 18, label: "Market entry", suffix: " mo" },
];

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

export default function Metrics() {
  return (
    <section className="py-24 bg-[#0A0A0B] border-y border-[#52525B]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center md:text-left"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-mono font-semibold tracking-tight mb-2">
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                />
              </div>
              <div className="text-xs sm:text-sm text-[#A1A1AA] uppercase tracking-wider">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
