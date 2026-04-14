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
              I started coding at 12 with RPG Maker and building neural networks by 17. That curiosity turned into a career spanning enterprise architecture, AI engineering, and product development — building CxMapper for SulAmérica and Caixa Seguradora, architecting an end-to-end IoT intelligence platform at Koru, and reducing a 12-month document workflow to 2 months at Zurich Santander.
            </p>
            <p>
              Today I work with companies of all sizes — from startups to enterprises — who need someone to architect scalable systems, ship real features, and unblock their engineering teams. I also build my own products: Livo (a reading platform with AI features), Cronock (a B2B2C booking SaaS), and ClaudIA (an open-source multi-agent assistant). The best engineers understand what it means to own something end-to-end.
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
