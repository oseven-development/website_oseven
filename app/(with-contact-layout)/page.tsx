import { HeroSection, LeftItem } from "@/components/hero-section";
import Section from "@/components/section";
import { Heading, Paragraph } from "@/components/";
import { Cloud, Server, Shield, Globe2, Zap, Users } from "lucide-react";
import SimpleGrid from "@/components/layout/grids";
import SimpleCard from "@/components/layout/simple-card";

export default function Page() {
  return (
    <>
      <HeroSection title={" Dein Partner für Exzellenz in Deiner Cloud."}>
        <LeftItem>
          <Paragraph size="lg" className="leading-8 text-gray-300 max-w-3xl">
            Effiziente Cloud-Lösungen aus Nürnberg – mit Best Practices statt
            kompliziertem Customizing.
          </Paragraph>
        </LeftItem>
      </HeroSection>

      <OfferSection />
      <WhyUsSection />
    </>
  );
}
const offerModules = [
  {
    icon: <Server className="h-16 w-16 text-primary" />,
    title: "AWS-Beratung",
    description:
      "Fachkundige Beratung zu Amazon Web Services Infrastruktur, von Migration bis Optimierung",
  },
  {
    icon: <Globe2 className="h-16 w-16 text-primary" />,
    title: "Azure-Lösungen",
    description:
      "Microsoft Azure Implementierung und Verwaltung für Unternehmensanwendungen",
  },
  {
    icon: <Cloud className="h-16 w-16 text-primary" />,
    title: "Google Cloud Platform",
    description:
      "Nutzen Sie die neueste Technologie von GCP für Ihre geschäftliche Innovation",
  },
];

function OfferSection() {
  return (
    <Section be="light" id="services">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <Heading level={1}> Unsere Cloud-Dienstleistungen</Heading>
        <Paragraph>
          Umfassende Cloud-Lösungen, die auf Ihre Geschäftsanforderungen
          zugeschnitten sind
        </Paragraph>
      </div>
      <SimpleGrid cols={3} className="mt-10">
        {offerModules.map((module) => (
          <SimpleCard
            key={module.title}
            style="light"
            icon={module.icon}
            heading={module.title}
            paragraph={module.description}
          />
        ))}
      </SimpleGrid>
    </Section>
  );
}

function WhyUsSection() {
  return (
    <Section className="text-white">
      <div className={`grid gap-6 lg:grid-cols-2 lg:gap-12`}>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Warum uns wählen?
            </h2>
            <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Wir bringen jahrelange Erfahrung in der Cloud-Architektur und
              Implementierung mit.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start space-x-4">
              <Shield className="mt-1 h-6 w-6 text-secondary" />
              <div className="space-y-1">
                <h3 className="font-bold">Sicherheit zuerst</h3>
                <p className="text-sm dark:text-gray-400">
                  Sicherheitsimplementierungen in Unternehmensqualität
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Zap className="mt-1 h-6 w-6 text-secondary" />
              <div className="space-y-1">
                <h3 className="font-bold">Leistung</h3>
                <p className="text-sm dark:text-gray-400">
                  Optimierte Cloud-Infrastruktur
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="mt-1 h-6 w-6 text-secondary" />
              <div className="space-y-1">
                <h3 className="font-bold">Expertenteam</h3>
                <p className="text-sm  dark:text-gray-400">
                  Zertifizierte Cloud-Profis
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Cloud className="mt-1 h-6 w-6 text-secondary" />
              <div className="space-y-1">
                <h3 className="font-bold">Multi-Cloud</h3>
                <p className="text-sm dark:text-gray-400">
                  Plattformübergreifende Expertise
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            Bereit loszulegen?
            <p className="dark:text-gray-400">
              Kontaktieren Sie uns für eine kostenlose Beratung und lassen Sie
              uns Ihre Cloud-Strategie besprechen.
            </p>
          </div>
          {/* <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-4">
                  <Input placeholder="Ihr Name" type="text" />
                  <Input placeholder="Ihre E-Mail" type="email" />
                  <Button type="submit" className="w-full">
                    Beratung anfordern
                  </Button>
                </form>
              </div> */}
        </div>
      </div>
    </Section>
  );
}
