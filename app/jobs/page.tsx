import { HeroSection, LeftItem } from "@/components/hero-section";
import Section from "@/components/section";
import { Paragraph } from "@/components/";
import YourContact from "@/components/content/your-contact";

export default function Page() {
  return (
    <>
      <HeroSection title={"Karriere"}>
        <LeftItem>
          <Paragraph size="lg" className="leading-8 text-gray-300 max-w-3xl">
            Werden Sie Teil unseres Teams und gestalten Sie die Zukunft mit uns.
            Wir suchen talentierte und motivierte Menschen, die unsere
            Leidenschaft für Technologie und Innovation teilen. Entdecken Sie
            unsere offenen Stellen.
          </Paragraph>
        </LeftItem>
      </HeroSection>

      <Section className="bg-gray-100">
        <YourContact></YourContact>
      </Section>
    </>
  );
}
