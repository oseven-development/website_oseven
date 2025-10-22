"use client";
import { Heading, Paragraph } from "@/components/";
import { motion } from "motion/react";
import Image from "next/image";

interface SimpleCardProps {
  imageSrc?: string;
  imageAlt?: string;
  imgWidth?: number;
  imgHeight?: number;
  heading: string;
  paragraph: string;
  style?: "dark" | "light";
}

const itemVariants = {
  hidden: { opacity: 0, x: 0 },
  show: { opacity: 1, x: 0 },
};

export default function SimpleCard({
  imageSrc,
  imageAlt,
  heading,
  paragraph,
  imgWidth,
  imgHeight,
  style = "light",
}: SimpleCardProps) {
  return (
    <div
      className={`flex flex-col items-center text-center ${
        imageSrc && imageAlt ? "pt-8" : ""
      } pt-8 px-4 shadow-md ${
        style === "dark" ? "border border-secondary" : ""
      }`}
    >
      {imageSrc && imageAlt && (
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 1 }}
          className="mb-4"
          transition={{ type: "tween", duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imgWidth ? imgWidth : 100}
            height={imgHeight ? imgHeight : 100}
          />
        </motion.div>
      )}
      <Heading level={2}>{heading}</Heading>
      <Paragraph>{paragraph}</Paragraph>
    </div>
  );
}
