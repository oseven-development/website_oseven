import { Heading, Paragraph } from "@/components/typography/Typography";
import Image from "next/image";

interface SimpleCardProps {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  paragraph: string;
}

export default function SimpleCard({
  imageSrc,
  imageAlt,
  heading,
  paragraph,
}: SimpleCardProps) {
  return (
    <div className="flex flex-col items-center text-center px-4 shadow-md">
      <Image src={imageSrc} alt={imageAlt} width={100} height={100} />
      <Heading level={2}>{heading}</Heading>
      <Paragraph>{paragraph}</Paragraph>
    </div>
  );
}
