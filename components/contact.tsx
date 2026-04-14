import { getTranslations } from "next-intl/server";

export async function Contact() {
  const t = await getTranslations("contact");

  return (
    <section className="max-w-7xl mx-auto px-8 mb-48" id="contact">
      <div className="bg-surface-container p-12 md:p-20 border border-outline-variant/10 relative overflow-hidden rounded-lg">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">{t("heading")}</h2>
          <p className="text-on-surface-variant mb-12">{t("description")}</p>
          <a
            href="https://app.pipefy.com/public/form/4id1Zwjt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-10 py-5 font-bold text-lg hover:brightness-110 transition-all rounded-lg"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
