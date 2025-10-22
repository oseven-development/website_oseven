"use client";
import CallToAction from "../layout/call-to-action-button";
import { Heading, Paragraph } from "@/components";
import { motion } from "motion/react";

interface StepProps {
  headline: string;
  subline: string;
  steps: { headline: string; subline: string }[];
  callToAction?: boolean;
}
export default function Steps({
  headline,
  subline,
  steps,
  callToAction,
}: StepProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="text-center mb-16">
        <Heading level={1}>{headline}</Heading>
        <Paragraph size="lg">{subline}</Paragraph>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className={`grid grid-cols-1 md:grid-cols-${
          steps.length > 3 ? 3 : steps.length
        } gap-8`}
      >
        {steps.map((step, index) => (
          <motion.div key={index} variants={itemVariants}>
            <div className="mb-4">
              <span className="bg-secondary inline-block font-medium p-4 py-1 rounded-full">
                Schritt {index + 1}
              </span>
            </div>
            <Heading level={3}>{step.headline}</Heading>
            <Paragraph>{step.subline}</Paragraph>
          </motion.div>
        ))}
      </motion.div>
      {callToAction && (
        <div className="text-center mt-16">
          <CallToAction />
        </div>
      )}
    </>
  );
}
