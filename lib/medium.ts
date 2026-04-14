import Parser from "rss-parser";

export interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  snippet: string;
  categories: string[];
}

const FEED_URL =
  "https://medium.com/feed/@jonatasfernandespimenta";

export async function getMediumArticles(): Promise<MediumArticle[]> {
  const parser = new Parser();
  const feed = await parser.parseURL(FEED_URL);

  return (feed.items ?? []).map((item) => {
    const raw = (item["content:encoded"] ?? item.content ?? "") as string;
    const text = raw.replace(/<[^>]+>/g, "").trim();

    return {
      title: item.title ?? "",
      link: item.link ?? "",
      pubDate: item.pubDate ?? "",
      snippet: text.slice(0, 160) + (text.length > 160 ? "…" : ""),
      categories: (item.categories ?? []) as string[],
    };
  });
}
