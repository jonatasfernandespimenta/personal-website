import { getTranslations } from "next-intl/server";
import { LocaleSwitcher } from "./locale-switcher";

const navLinks = [
  { labelKey: "work", href: "#work" },
  { labelKey: "services", href: "#services" },
  { labelKey: "about", href: "#about" },
  { labelKey: "writing", href: "#writing" },
];

export async function Nav() {
  const t = await getTranslations("nav");

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0D1117]/60 backdrop-blur-xl shadow-[0_4px_48px_rgba(0,230,118,0.04)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-16">
        <div className="font-label text-xl font-bold tracking-tighter text-[#00E676]">JFP</div>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} className="font-headline tracking-tight text-sm font-bold text-slate-400 hover:text-slate-100 transition-colors duration-150" href={link.href}>
              {t(link.labelKey)}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <LocaleSwitcher />
          <a href="#contact" className="bg-primary-container text-on-primary-container px-6 py-2 text-sm font-bold hover:bg-[#75ff9e] transition-colors duration-150 rounded-lg">
            {t("getInTouch")}
          </a>
        </div>
      </div>
    </nav>
  );
}
