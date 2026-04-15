import { getTranslations } from "next-intl/server";

const mentoringTracks = [
  {
    key: "career",
    icon: "trending_up",
  },
  {
    key: "technical",
    icon: "code",
  },
  {
    key: "aiCareer",
    icon: "neurology",
  },
];

export async function Mentoring() {
  const t = await getTranslations("mentoring");

  return (
    <section className="max-w-7xl mx-auto px-8 mb-48" id="mentoring">
      <div className="mb-12">
        <span className="mono-label text-primary mb-4 block">{t("label")}</span>
        <h2 className="text-4xl font-bold mb-4">{t("heading")}</h2>
        <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
          {t("description")}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {mentoringTracks.map((track) => (
          <div
            key={track.key}
            className="bg-surface-container p-8 border border-outline-variant/10 hover:border-primary/20 transition-colors rounded-lg group"
          >
            <span
              className="material-symbols-outlined text-3xl text-primary mb-6 block group-hover:scale-110 transition-transform"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {track.icon}
            </span>
            <h3 className="text-xl font-bold mb-3">
              {t(`${track.key}.title`)}
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              {t(`${track.key}.description`)}
            </p>
            <div className="flex flex-wrap gap-2">
              {(t.raw(`${track.key}.topics`) as string[]).map((topic: string) => (
                <span
                  key={topic}
                  className="px-3 py-1 bg-surface-container-highest text-slate-300 mono-label rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface-container p-8 md:p-12 border border-outline-variant/10 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">{t("cta.heading")}</h3>
          <p className="text-on-surface-variant">{t("cta.description")}</p>
        </div>
        <a
          href="#contact"
          className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-8 py-4 font-bold hover:brightness-110 transition-all text-center whitespace-nowrap rounded-lg"
        >
          {t("cta.button")}
        </a>
      </div>
    </section>
  );
}
