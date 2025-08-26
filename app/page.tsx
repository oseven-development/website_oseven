import YourContact from "@/components/content/your-contact";
import { HeroSection, LeftItem } from "@/components/hero-section";
import Section from "@/components/section";
import { Paragraph } from "@/components/";
import { Cloud, Server, Shield, Globe2, Zap, Users } from "lucide-react";

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
      <Section className="bg-gray-100">
        <YourContact />
      </Section>
    </>
  );
}

function OfferSection() {
  return (
    <Section
      id="services"
      className={"bg-gradient-to-b from-white to-gray-300"}
    >
      <div className={``}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Unsere Cloud-Dienstleistungen
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Umfassende Cloud-Lösungen, die auf Ihre Geschäftsanforderungen
              zugeschnitten sind
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Server className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">AWS-Beratung</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Fachkundige Beratung zu Amazon Web Services Infrastruktur, von
              Migration bis Optimierung
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Globe2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Azure-Lösungen</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Microsoft Azure Implementierung und Verwaltung für
              Unternehmensanwendungen
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Cloud className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Google Cloud Platform</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Nutzen Sie die neueste Technologie von GCP für Ihre geschäftliche
              Innovation
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Server className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">AWS-Beratung</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Fachkundige Beratung zu Amazon Web Services Infrastruktur, von
              Migration bis Optimierung
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Globe2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Azure-Lösungen</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Microsoft Azure Implementierung und Verwaltung für
              Unternehmensanwendungen
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Cloud className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Google Cloud Platform</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Nutzen Sie die neueste Technologie von GCP für Ihre geschäftliche
              Innovation
            </p>
          </div>
        </div>
      </div>
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
            <h3 className="text-xl font-bold">Bereit loszulegen?</h3>
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
