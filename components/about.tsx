import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function About() {
  const t = await getTranslations("about");

  return (
    <section className="max-w-7xl mx-auto px-8 mb-48" id="about">
      <div className="grid md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-5 aspect-square bg-surface-container relative">
          <Image
            src="/jonatas.png"
            alt="Jônatas Fernandes Pimenta"
            fill
            className="object-cover grayscale brightness-90"
          />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 border-r-2 border-b-2 border-primary/40" />
        </div>
        <div className="md:col-span-7">
          <h2 className="text-3xl font-bold mb-8">{t("heading")}</h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p className="text-sm text-slate-500">{t("credentials")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
