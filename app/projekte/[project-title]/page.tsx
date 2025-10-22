import { LeftItem, RightItem, HeroSection } from "@/components/hero-section";
import Section from "@/components/section";
import { Heading, Paragraph } from "@/components/";
import YourContact from "@/components/content/your-contact";
import { notFound } from "next/navigation";
import SimpleGrid from "@/components/layout/grids";
import type { Metadata } from "next";
import { projects } from "@/projects";
import {} from "next/navigation";
import Comp from "./metainfo-header";
import TechBubbles from "./tech-bubble";

export default async function Page({
  params,
}: {
  params: Promise<{ "project-title": string }>;
}) {
  const { "project-title": title } = await params;

  if (!(title in projects)) notFound();

  const data = projects[title];
  return (
    <>
      <HeroSection
        title={data.title}
        image={{ alt: data.title, src: `/projects/${data.image}` }}
      >
        <RightItem>
          <Comp data={data} />
        </RightItem>
        <LeftItem>
          <Paragraph size="lg" className="leading-8 text-gray-300 max-w-3xl">
            {data.description}
          </Paragraph>
        </LeftItem>
      </HeroSection>

      <Section be="lightGradient" className="text-center">
        <Heading level={1}>Herausforderungen</Heading>
        {data.challanges.map((challange, index) => (
          <Paragraph key={index} size="lg" className="max-w-3xl mx-auto">
            {challange}
          </Paragraph>
        ))}
      </Section>

      <Section be="light">
        <SimpleGrid cols={5}>
          <div className="col-span-2">
            <Heading level={2}>Tätigkeiten</Heading>
          </div>
          <div className="col-span-3">
            <ol className="list-disc list-inside space-y-2">
              {data.content.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ol>
          </div>

          <div className="col-span-2">
            <Heading level={2}>Projektverantwortlichkeit</Heading>
          </div>
          <div className="col-span-3">
            <ol className="list-disc list-inside space-y-2">
              {data.content.ownership.map((ownership, index) => (
                <li key={index}>{ownership}</li>
              ))}
            </ol>
          </div>
        </SimpleGrid>
      </Section>

      <Section be="dark">
        <div className="text-center text-white">
          <Heading level={2}>Eingesetzte Technologien</Heading>
        </div>
        <TechBubbles technology={data.technology} />
      </Section>

      <Section be="light">
        <YourContact></YourContact>
      </Section>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ "project-title": string }>;
}): Promise<Metadata> {
  const { "project-title": title } = await params;
  if (title in projects) {
    return {
      title: projects[title].title,
      description: projects[title].description,
    };
  }
  return {
    title: "Projekt nicht gefunden",
    description: "Das angeforderte Projekt konnte nicht gefunden werden.",
  };
}
