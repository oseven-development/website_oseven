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
            src={"/mh-small.png"}
            alt={"Max Hänsel"}
            width={160}
            height={160}
            className="w-60 h-60 rounded-full border-2 border-gray-200 shadow-lg object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <Heading level={2}>Max Hänsel</Heading>
          <Heading level={3}>Experte für Cloud und Governance</Heading>
          <Paragraph>
            Vereinbare jetzt ein kostenloses und unverbindliches Erstgespräch!
          </Paragraph>
          <CallToAction />
        </div>
      </SimpleGrid>
    </>
  );
}
