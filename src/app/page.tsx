import { Header } from "@/components/Header";
import AboutMeSection from "@/sections/AboutMeSection";
import HomeSection from "@/sections/HomeSection";
import ProjectsSection from "@/sections/ProjectsSection";

export default function Home() {
  return (
    <>
      <Header />
      <HomeSection />
      <AboutMeSection />
      <ProjectsSection />
    </>
  );
}
