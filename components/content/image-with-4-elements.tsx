"use client";
import CallToAction from "../layout/call-to-action-button";
import SimpleGrid from "../layout/grids";
import { Heading, Paragraph } from "../typography/Typography";
import Image from "next/image";
import { motion } from "motion/react";

interface StepProps {
  headline: string;
  subline: string;
  image: { src: string; alt: string; width: number; height: number };
  steps: { headline: string; subline: string }[];
  callToAction?: boolean;
}

export default function ImageWith4Elements({
  headline,
  subline,
  image,
  steps,
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
      <SimpleGrid cols={4}>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Heading level={3}>{step.headline}</Heading>
            <Paragraph className="text-gray-500">{step.subline}</Paragraph>
          </motion.div>
        ))}
      </SimpleGrid>
      {callToAction && (
        <div className="text-center mt-16">
          <CallToAction />
        </div>
      )}
    </>
  );
}
