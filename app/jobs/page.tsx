import { HeroSection } from "@/components/hero-section";
import Section from "@/components/section";
import { Paragraph } from "@/components/typography/Typography";
import YourContact from "@/components/content/your-contact";

export default function Page() {
  return (
    <>
      <HeroSection title={"Über uns"}>
        <Paragraph size="lg" className="leading-8 text-gray-300 max-w-3xl">
          Erfahren Sie mehr über unser Unternehmen, unsere Geschichte und unser
          Team. Wir entwickeln mit Leidenschaft innovative Lösungen und
          engagieren uns für den Erfolg unserer Kunden. Entdecken Sie, was uns
          antreibt.
        </Paragraph>
      </HeroSection>

      <Section className="bg-gray-100">
        <YourContact></YourContact>
      </Section>
    </>
  );
}
