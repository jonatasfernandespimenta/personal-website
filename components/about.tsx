import Image from "next/image";

export function About() {
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
          <h2 className="text-3xl font-bold mb-8">The Short Version</h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>
              I started coding at 12 with RPG Maker and building neural networks by 17. That curiosity turned into a career at the intersection of software architecture and AI — building CxMapper (used by SulAmérica and Caixa Seguradora), architecting AI copilots for IoT platforms at Koru, and shipping AI recommendation engines in production.
            </p>
            <p>
              Today I consult for CTOs and technical founders who need both: someone to architect their backend and someone to ship real AI features — not prototypes. I also build my own AI-powered products (Livo, ClaudIA) because the best consultants understand what it means to own something end-to-end.
            </p>
            <p className="text-sm text-slate-500">
              MBA in Software Architecture (2025) · MBA in AI Engineering (2026) · Portuguese (native) · English (fluent)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
