"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { services } from "@/lib/data";

function ServiceCard({
  service,
  isExpanded,
  onExpand,
  onCollapse,
}: {
  service: (typeof services)[number];
  isExpanded: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}) {
  return (
    <motion.div
      layout
      className={`bg-surface-container relative group overflow-hidden cursor-pointer ${
        isExpanded ? "md:col-span-8 border border-primary/10" : "md:col-span-4"
      }`}
      onMouseEnter={onExpand}
      onMouseLeave={onCollapse}
      onClick={onExpand}
      transition={{ layout: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }}
    >
      <motion.div layout="position" className="p-10">
        {/* Background icon */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="absolute top-0 right-0 p-8 text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span
                className="material-symbols-outlined text-6xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {service.icon}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Badge */}
        <AnimatePresence>
          {isExpanded && service.featured && (
            <motion.div
              className="mono-label text-primary mb-4"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              Most Requested
            </motion.div>
          )}
        </AnimatePresence>

        {/* Title */}
        <motion.h3
          layout="position"
          className={`font-bold mb-4 transition-[font-size] duration-300 ${
            isExpanded ? "text-3xl" : "text-xl"
          }`}
        >
          {service.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          layout="position"
          className={`text-on-surface-variant leading-relaxed transition-all duration-300 ${
            isExpanded ? "max-w-lg mb-8 text-base" : "mb-6 text-sm"
          }`}
        >
          {service.description}
        </motion.p>

        {/* Tags — only when expanded */}
        <AnimatePresence>
          {isExpanded && service.tags && (
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {service.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1 bg-surface-container-highest text-slate-300 mono-label"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.15 + i * 0.04 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Icon — only when collapsed */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.span
              className="material-symbols-outlined text-primary block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {service.icon}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export function Services() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-8 mb-48" id="services">
      <h2 className="text-3xl font-bold mb-12">What I Actually Do</h2>
      <LayoutGroup>
        <motion.div layout className="grid md:grid-cols-12 gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              isExpanded={expandedIndex === i}
              onExpand={() => setExpandedIndex(i)}
              onCollapse={() => {
                if (expandedIndex === i) setExpandedIndex(0);
              }}
            />
          ))}
        </motion.div>
      </LayoutGroup>
    </section>
  );
}
