"use client";
import { HeroSection } from "@/components/hero-section";
import Section from "@/components/section";
import { Heading, Paragraph } from "@/components/typography/Typography";
import YourContact from "@/components/content/your-contact";

import Link from "next/link";
import SimpleGrid from "@/components/layout/grids";
import { projects } from "@/projects";
import { motion } from "motion/react";

export default function Page() {
  return (
    <>
      <HeroSection title={"Unsere Projekte"}>
        <Paragraph size="lg" className="leading-8 text-gray-300 max-w-3xl">
          Unsere Arbeit spricht für sich. Tauchen Sie ein in unsere Projektwelt
          und sehen Sie selbst, wie wir durch Technologie und Expertise echten
          Mehrwert schaffen.
        </Paragraph>
      </HeroSection>

      <Section className="bg-gray-100">
        {Object.entries(projects)
          .reverse()
          .map(([key, data], index) => (
            <motion.div
              key={key}
              initial={{
                x: 20,
                opacity: 0,
                filter: "blur(2px)",
              }}
              animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <SimpleGrid cols={3} className="mb-8 pb-4 border-b">
                <div className="col-span-1 pt-4 ">
                  {new Date(data.duration.start).toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "long",
                  })}
                  {" - "}
                  {data.duration.end ? (
                    new Date(data.duration.end).toLocaleDateString("de-DE", {
                      year: "numeric",
                      month: "long",
                    })
                  ) : (
                    <span className="text-gray-400">laufend</span>
                  )}
                </div>
                <div className="col-span-2 pt-4 ">
                  <Link
                    className="hover:text-secondary"
                    href={`/projekte/${key}`}
                  >
                    <Paragraph className="pb-0 mb-0 text-gray-500">
                      {data.customer}
                    </Paragraph>
                    <Heading level={3} className="pt-0 mt-0 inline-block mr-2">
                      {data.title}
                    </Heading>
                    <Paragraph size="sm" className="pb-0 mb-0 text-gray-500">
                      {data.description}
                    </Paragraph>
                  </Link>
                </div>
              </SimpleGrid>
            </motion.div>
          ))}
      </Section>

      <Section className="bg-gray-100">
        <YourContact></YourContact>
      </Section>
    </>
  );
}
