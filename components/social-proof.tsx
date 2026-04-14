const companies = ["SulAmérica", "Zurich Santander", "Koru", "SOL Copérnico", "EximiaTI"];

export function SocialProof() {
  return (
    <section className="w-full bg-surface-container-low py-12 mb-32">
      <div className="max-w-7xl mx-auto px-8">
        <p className="mono-label text-slate-500 mb-8">Trusted by teams at</p>
        <div className="flex flex-wrap items-center justify-between gap-8 grayscale opacity-60 hover:grayscale-0 transition-all duration-500">
          {companies.map((name, i) => (
            <span key={name} className={`text-2xl font-bold tracking-tighter ${i === companies.length - 1 ? "text-primary" : ""}`}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
