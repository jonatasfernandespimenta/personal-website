"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLocale("en")}
        className={`mono-label text-xs px-2 py-1 rounded transition-colors ${
          locale === "en"
            ? "text-primary bg-surface-container-highest"
            : "text-slate-500 hover:text-slate-300"
        }`}
      >
        EN
      </button>
      <span className="text-slate-600">/</span>
      <button
        onClick={() => switchLocale("pt-BR")}
        className={`mono-label text-xs px-2 py-1 rounded transition-colors ${
          locale === "pt-BR"
            ? "text-primary bg-surface-container-highest"
            : "text-slate-500 hover:text-slate-300"
        }`}
      >
        PT
      </button>
    </div>
  );
}
