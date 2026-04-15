import { getTranslations } from "next-intl/server";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="max-w-7xl mx-auto px-8 mb-32 grid-bg">
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 max-w-5xl">
        {t("headline1")}
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
          {t("headline2")}
        </span>
        <br />
        {t("headline3")}
      </h1>
      <p className="text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
        {t("subheadline")}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#contact" className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-8 py-4 font-bold text-lg hover:brightness-110 transition-all text-center rounded-lg">
          {t("cta1")}
        </a>
        <a href="#work" className="border border-outline-variant/50 px-8 py-4 font-bold text-lg hover:bg-surface-container-highest transition-all text-center rounded-lg">
          {t("cta2")}
        </a>
      </div>
    </section>
  );
}
