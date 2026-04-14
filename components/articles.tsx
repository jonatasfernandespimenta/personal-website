import { getTranslations } from "next-intl/server";
import { getMediumArticles } from "@/lib/medium";

export async function Articles() {
  const t = await getTranslations("articles");
  const articles = await getMediumArticles();

  return (
    <section className="max-w-7xl mx-auto px-8 mb-48" id="writing">
      <h2 className="text-3xl font-bold mb-4">{t("heading")}</h2>
      <p className="text-on-surface-variant mb-12 max-w-xl">
        {t("subheading")}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => {
          const date = new Date(article.pubDate);
          const formatted = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });

          return (
            <a
              key={article.link}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-surface-container border border-outline-variant/10 hover:border-primary/20 transition-all rounded-lg"
            >
              <span className="mono-label text-slate-500 mb-4 block">
                {formatted}
              </span>
              <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                {article.snippet}
              </p>
              {article.categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {article.categories.slice(0, 3).map((cat) => (
                    <span
                      key={cat}
                      className="text-[10px] px-2 py-1 bg-surface-container-high border border-outline-variant/30 mono-label rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
}
