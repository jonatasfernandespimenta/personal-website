import { getTranslations } from "next-intl/server";
import { stats } from "@/lib/data";

export async function Positioning() {
  const t = await getTranslations("positioning");

  return (
    <section className="max-w-7xl mx-auto px-8 mb-48">
      <div className="grid md:grid-cols-2 gap-24 items-start">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            {t("heading1")}<br />{t("heading2")}<br />{t("heading3")}
          </h2>
          <p className="text-on-surface-variant leading-relaxed text-lg">
            {t("description")}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="mono-label">{t(`stats.${stat.label}`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
