import { getTranslations } from "next-intl/server";
import { products } from "@/lib/data";

export async function Products() {
  const t = await getTranslations("products");

  return (
    <section className="max-w-7xl mx-auto px-8 mb-48">
      <h2 className="text-3xl font-bold mb-16">{t("heading")}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.name} className="p-8 bg-surface-container border border-outline-variant/10 rounded-lg">
            <div className="text-2xl font-bold mb-2">{product.name}</div>
            <div className="mono-label text-primary mb-6">{product.subtitle}</div>
            <p className="text-on-surface-variant text-sm mb-8">{product.description}</p>
            <a href={product.url} target="_blank" rel="noopener noreferrer" className="text-primary flex items-center gap-2 font-bold hover:gap-4 transition-all">
              {t("explore")} <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
