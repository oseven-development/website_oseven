import CallToAction from "../layout/call-to-action-button";
import SimpleGrid from "../layout/grids";
import { Heading, Paragraph } from "@/components";
import Image from "next/image";

export default function YourContact() {
  return (
    <>
      <div className="text-center mb-16">
        <Heading level={1}>Dein Kontakt</Heading>
      </div>
      <SimpleGrid cols={2}>
        <div className="flex justify-center md:justify-end md:pr-16">
          <Image
            src={"/ah-small.png"}
            alt={"Alexandra"}
            width={160}
            height={160}
            className="w-60 h-60 rounded-full border-4 border-gray-200 shadow-lg object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <Heading level={2}>Alexandra</Heading>
          <Heading level={3}>Sales-Expertin für Cloud und Governance</Heading>
          <Paragraph>
            Vereinbare jetzt ein kostenloses und unverbindliches Erstgespräch!
          </Paragraph>
          <CallToAction />
        </div>
      </SimpleGrid>
    </>
  );
}
