import { HeroSection } from "@/components/hero-section";
import Section from "@/components/section";
import { Paragraph } from "@/components/typography/Typography";
export default function Page() {
  return (
    <>
      <HeroSection title={"Buchen Sie ein Gespräch"}>
        <Paragraph size="lg" className="leading-8 text-gray-300 max-w-3xl">
          Wir freuen uns darauf, von Ihnen zu hören und gemeinsam an Ihren
          Projekten zu arbeiten.
        </Paragraph>
      </HeroSection>
      <Section className={"bg-gradient-to-b from-white to-gray-300"}>
        {/* <!-- Calendly inline widget begin --> */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/max-oseven/30min"
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
        {/* <!-- Calendly inline widget end --> */}
      </Section>
    </>
  );
}
