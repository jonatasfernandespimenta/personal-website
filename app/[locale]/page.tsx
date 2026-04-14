import { setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { Positioning } from "@/components/positioning";
import { Services } from "@/components/services";
import { CaseStudies } from "@/components/case-studies";
import { Engineering } from "@/components/engineering";
import { Products } from "@/components/products";
import { Articles } from "@/components/articles";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Nav />
      <main className="relative pt-32 overflow-hidden">
        <Hero />
        <SocialProof />
        <Positioning />
        <About />
        <Services />
        <CaseStudies />
        <Engineering />
        <Products />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
