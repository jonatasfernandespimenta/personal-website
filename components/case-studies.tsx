import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { caseStudies } from "@/lib/data";

export async function CaseStudies() {
  const t = await getTranslations("caseStudies");

  return (
    <section className="max-w-7xl mx-auto px-8 mb-48" id="work">
      <h2 className="text-3xl font-bold mb-4">{t("heading")}</h2>
      <p className="text-on-surface-variant mb-16 max-w-xl">{t("subheading")}</p>
      <div className="grid md:grid-cols-2 gap-12">
        {caseStudies.map((study) => (
          <div key={study.key} className="flex flex-col">
            <div className="h-[400px] mb-8 overflow-hidden bg-surface-container-highest relative rounded-lg">
              <Image src={study.image} alt={t(`${study.key}.title`)} fill className="object-contain grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="mono-label text-primary">{t(`${study.key}.tag`)}</span>
              <span className="font-bold text-xl">{study.company}</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">{t(`${study.key}.title`)}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{t(`${study.key}.description`)}</p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {study.metrics.map((metric) => (
                <div key={metric.labelKey}>
                  <div className="text-lg font-bold">{metric.value}</div>
                  <div className="mono-label text-[9px] text-slate-500">{t(`${study.key}.${metric.labelKey}`)}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-1 bg-surface-container-high border border-outline-variant/30 mono-label rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
