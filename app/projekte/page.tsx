"use client";
import { HeroSection, LeftItem } from "@/components/hero-section";
import Section from "@/components/section";
import { Heading, Paragraph } from "@/components/";
import YourContact from "@/components/content/your-contact";

import Link from "next/link";
import SimpleGrid from "@/components/layout/grids";
import { projects } from "@/projects";
import { motion } from "motion/react";
import TechBubbles from "./[project-title]/tech-bubble";

export default function Page() {
  const projectList = Object.entries(projects);
  const projectListLength = projectList.length;
  const p = new Set(projectList.map(([, data]) => data.technology).flat());
  return (
    <>
      <HeroSection title={"Unsere Projekte"}>
        <LeftItem>
          <Paragraph size="lg" className="leading-8 text-gray-300 max-w-3xl">
            Unsere Arbeit spricht für sich. Tauchen Sie ein in unsere
            Projektwelt und sehen Sie selbst, wie wir durch Technologie und
            Expertise echten Mehrwert schaffen.
          </Paragraph>
        </LeftItem>
      </HeroSection>

      <Section className="bg-gray-100">
        {projectList.reverse().map(([key, data], index) => (
          <Link
            key={key}
            className="hover:text-secondary"
            href={`/projekte/${key}`}
          >
            <motion.div
              initial={{
                x: 20,
                opacity: 0,
                filter: "blur(2px)",
              }}
              animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <SimpleGrid
                cols={3}
                className={`mb-4 pb-4 ${
                  index !== projectListLength - 1 ? "border-b" : ""
                }`}
              >
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
                  <Paragraph size="sm" className="pb-0 !mb-0 text-gray-500">
                    {data.customer}
                  </Paragraph>
                </div>

                <div className="col-span-2 pt-4 ">
                  <Heading level={3} className="!py-0 !my-0 inline-block">
                    {data.title}
                  </Heading>
                  <Paragraph size="sm" className="pb-0 mb-0 text-gray-500">
                    {data.description}
                  </Paragraph>
                </div>
              </SimpleGrid>
            </motion.div>
          </Link>
        ))}
      </Section>

      <Section className="text-white">
        <Heading className="text-center" level={1}>
          Unsere Technologie im Überblick
        </Heading>
        <TechBubbles technology={[...p]} />
      </Section>

      <Section className="bg-gray-100">
        <YourContact></YourContact>
      </Section>
    </>
  );
}
