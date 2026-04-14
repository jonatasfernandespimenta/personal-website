import { getTranslations } from "next-intl/server";

const companies = ["SulAmérica", "Zurich Santander", "Koru", "Resilion", "SOL Copérnico", "PowerOne", "EximiaTI"];

export async function SocialProof() {
  const t = await getTranslations("socialProof");

  return (
    <section className="w-full bg-surface-container-low py-12 mb-32">
      <div className="max-w-7xl mx-auto px-8">
        <p className="mono-label text-slate-500 mb-8">{t("label")}</p>
        <div className="flex flex-wrap items-center justify-between gap-8 grayscale opacity-60 hover:grayscale-0 transition-all duration-500">
          {companies.map((name, i) => (
            <span key={name} className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors duration-300">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
