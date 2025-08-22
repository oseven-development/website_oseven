import { HeroSection } from "@/components/hero-section";
import Section from "@/components/section";
import { Paragraph } from "@/components/typography/Typography";
import YourContact from "@/components/content/your-contact";

export default function Page() {
  return (
    <>
      <HeroSection title={"Unsere Projekte"}>
        <Paragraph size="lg" className="leading-8 text-gray-300 max-w-3xl">
          Unsere Arbeit spricht für sich. Tauchen Sie ein in unsere Projektwelt
          und sehen Sie selbst, wie wir durch Technologie und Expertise echten
          Mehrwert schaffen.
        </Paragraph>
      </HeroSection>

      <Section className="bg-gray-100">
        <YourContact></YourContact>
      </Section>
    </>
  );
}
