import { services } from "@/lib/data";

export function Services() {
  const [featured, ...rest] = services;

  return (
    <section className="max-w-7xl mx-auto px-8 mb-48" id="services">
      <h2 className="text-3xl font-bold mb-12">What I Actually Do</h2>
      <div className="grid md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-surface-container border border-primary/10 p-10 relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-primary opacity-20 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              {featured.icon}
            </span>
          </div>
          <div className="mono-label text-primary mb-4">Most Requested</div>
          <h3 className="text-3xl font-bold mb-4">{featured.title}</h3>
          <p className="text-on-surface-variant max-w-lg mb-8 leading-relaxed">{featured.description}</p>
          <div className="flex flex-wrap gap-4">
            {featured.tags?.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-surface-container-highest text-slate-300 mono-label">{tag}</span>
            ))}
          </div>
        </div>
        {rest.map((service) => (
          <div key={service.title} className="md:col-span-4 bg-surface-container p-10 group hover:bg-surface-container-high transition-all">
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-on-surface-variant mb-6 text-sm">{service.description}</p>
            <span className="material-symbols-outlined text-primary">{service.icon}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
