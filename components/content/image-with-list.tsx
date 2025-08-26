import CallToAction from "../layout/call-to-action-button";
import SimpleGrid from "../layout/grids";
import { Heading, Paragraph } from "@/components";
import Image from "next/image";

interface StepProps {
  headline: string;
  subline: string;
  image: { src: string; alt: string; width: number; height: number };
  callToAction?: boolean;
}

export default function ImageWithList({
  headline,
  subline,
  image,
  callToAction,
}: StepProps) {
  return (
    <>
      <SimpleGrid cols={5}>
        <div className="col-span-2 flex flex-col justify-center">
          <Heading level={1}>{headline}</Heading>
          <Paragraph className="text-gray-500" size="lg">
            {subline}
          </Paragraph>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="w-full h-auto mt-8"
          />
        </div>
        <div className="col-span-3 pl-0 md:pl-16 py-8">
          <ul>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
          </ul>
        </div>
      </SimpleGrid>

      {callToAction && (
        <div className="text-center mt-16">
          <CallToAction />
        </div>
      )}
    </>
  );
}
