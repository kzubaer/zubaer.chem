import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ResearchSection from "@/components/research-section";
import PublicationsSection from "@/components/publications-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral">
      <Header />
      <main>
        <HeroSection />
        <ResearchSection />
        <PublicationsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
