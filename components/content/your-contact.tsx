import CallToAction from "../layout/call-to-action-button";
import SimpleGrid from "../layout/grids";
import { Heading, Paragraph } from "../typography/Typography";
import Image from "next/image";

export default function YourContact() {
  return (
    <>
      <div className="text-center mb-16">
        <Heading level={1}>Dein Kontakt</Heading>
      </div>
      <SimpleGrid cols={2}>
        <div className="flex justify-center md:justify-end pr-16">
          <Image
            src={"/mh-small.png"}
            alt={"Max Hänsel"}
            width={160}
            height={160}
            className="w-60 h-60 rounded-full border-2 border-gray-200 shadow-lg object-cover"
          />
        </div>
        <div>
          <Heading level={2}>Max Hänsel</Heading>
          <Heading level={3}>Experte für Cloud und Governance</Heading>
          <Paragraph>
            Bitte fülle das Kontaktformular aus, damit wir uns umgehend mit dir
            in Verbindung setzen können.
          </Paragraph>
          <CallToAction />
        </div>
      </SimpleGrid>
    </>
  );
}
