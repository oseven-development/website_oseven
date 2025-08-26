import CallToAction from "../layout/call-to-action-button";
import { Heading, Paragraph } from "@/components";
import Image from "next/image";

interface StepProps {
  headline: string;
  subline: string;
  image: { src: string; alt: string; width: number; height: number };
  callToAction?: boolean;
}

export default function HeadlineWithImage({
  headline,
  subline,
  image,
  callToAction,
}: StepProps) {
  return (
    <>
      <div className="text-center mb-16">
        <Heading level={1}>{headline}</Heading>
        <Paragraph className="text-gray-500" size="lg">
          {subline}
        </Paragraph>
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="100vw"
        className="w-full h-auto"
      />
      {callToAction && (
        <div className="text-center mt-16">
          <CallToAction />
        </div>
      )}
    </>
  );
}
