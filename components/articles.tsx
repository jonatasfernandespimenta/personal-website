import Image from "next/image";
import { articles } from "@/lib/data";

export function Articles() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-48" id="writing">
      <h2 className="text-3xl font-bold mb-12">I Share What I Learn</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {articles.map((article) => (
          <a key={article.title} href={article.url} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
            <div className="aspect-video bg-surface-container-highest mb-6 overflow-hidden relative">
              <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="mono-label text-slate-500 mb-4 block">{article.date} · {article.readTime}</span>
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{article.title}</h3>
            <p className="text-on-surface-variant text-sm mt-2">{article.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
