"use client";

import { useState } from "react";
import { services } from "@/lib/data";

function ServiceCard({
  service,
  defaultExpanded,
}: {
  service: (typeof services)[number];
  defaultExpanded?: boolean;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded ?? false);

  return (
    <div
      className={`bg-surface-container p-10 relative group overflow-hidden cursor-pointer transition-all duration-300 ${
        expanded
          ? "md:col-span-8 border border-primary/10"
          : "md:col-span-4 hover:bg-surface-container-high"
      }`}
      onClick={() => setExpanded(!expanded)}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => {
        if (!defaultExpanded) setExpanded(false);
      }}
    >
      <div
        className={`absolute top-0 right-0 p-8 text-primary transition-opacity ${
          expanded ? "opacity-20 group-hover:opacity-100" : "opacity-0"
        }`}
      >
        <span
          className="material-symbols-outlined text-6xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {service.icon}
        </span>
      </div>

      {service.featured && (
        <div className="mono-label text-primary mb-4">Most Requested</div>
      )}

      <h3 className={`font-bold mb-4 ${expanded ? "text-3xl" : "text-xl"}`}>
        {service.title}
      </h3>

      <p
        className={`text-on-surface-variant leading-relaxed ${
          expanded ? "max-w-lg mb-8" : "mb-6 text-sm"
        }`}
      >
        {service.description}
      </p>

      {expanded && service.tags && (
        <div className="flex flex-wrap gap-4 animate-in fade-in duration-300">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-surface-container-highest text-slate-300 mono-label"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {!expanded && (
        <span className="material-symbols-outlined text-primary">
          {service.icon}
        </span>
      )}
    </div>
  );
}

export function Services() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-48" id="services">
      <h2 className="text-3xl font-bold mb-12">What I Actually Do</h2>
      <div className="grid md:grid-cols-12 gap-6">
        {services.map((service, i) => (
          <ServiceCard
            key={service.title}
            service={service}
            defaultExpanded={i === 0}
          />
        ))}
      </div>
    </section>
  );
}
