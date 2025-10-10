import SimpleGrid from "@/components/layout/grids";
import SimpleCard from "@/components/layout/simple-card";
import Section from "@/components/section";
import { Heading, Paragraph } from "@/components";
import Steps from "@/components/content/steps";
import { HeroSection, LeftItem } from "@/components/hero-section";
import YourContact from "@/components/content/your-contact";
import React from "react";
import Image from "next/image";
import ListWithIcons from "@/components/layout/list-with-icons";
const pillars = [
  {
    headline: "Betriebsmodell",
    subline:
      "Klare Zuständigkeiten zwischen Kunde, oseven und Microsoft schaffen Transparenz im täglichen Betrieb.",
  },
  {
    headline: "Security",
    subline:
      "Zero-Trust-Prinzip, starke Identitäts- und Zugriffskontrollen und kontinuierliche Überwachung sind Pflicht.",
  },
  {
    headline: "Kostenmanagement",
    subline:
      "Volle Transparenz über Budgets, Forecasts und Einsparpotenziale durch FinOps-Steuerung.",
  },
  {
    headline: "Prozesse",
    subline:
      "Strukturierte Abläufe für Monitoring, Change- und Incident-Management sichern Stabilität.",
  },
  {
    headline: "Governance",
    subline:
      "Technische und organisatorische Leitplanken sorgen für Compliance und nachhaltiges Wachstum.",
  },
];

const processSteps = [
  {
    headline: "Change-Management",
    subline:
      "Alle Änderungen erfolgen dokumentiert, versioniert und werden vor Produktivsetzung in Staging-Umgebungen getestet.",
  },
  {
    headline: "Incident-Management",
    subline:
      "Vom Service Desk bis zum Microsoft Support sind Eskalationsstufen definiert und lückenlos dokumentiert.",
  },
  {
    headline: "Monitoring & Betrieb",
    subline:
      "24/7-Überwachung, Frühwarnsysteme und regelmäßige Backup-Tests halten produktive Ressourcen verfügbar.",
  },
  {
    headline: "Kostenmanagement (FinOps)",
    subline:
      "Budgets, Alerts und automatisierte Optimierungen gewährleisten Kostentransparenz und Effizienz.",
  },
];

const modules = [
  {
    title: "Microsoft 365-Integration",
    description:
      "Einheitliche Identitäten, Single Sign-On und zentrale Rechteverwaltung über Entra ID.",
  },
  {
    title: "Managed Kubernetes (AKS)",
    description:
      "Betrieb von Container-Workloads mit Patch-Management, CI/CD-Integration und Auto-Scaling.",
  },
  {
    title: "Geo-Backup & Disaster Recovery",
    description:
      "Regionale Redundanz, Notfallpläne und regelmäßige Wiederherstellungstests mit Azure Site Recovery.",
  },
  {
    title: "App-Management",
    description:
      "Lifecycle-Management individueller Anwendungen inklusive Health-Checks und Deployment-Automatisierung.",
  },
  {
    title: "Compliance & Audit",
    description:
      "Azure Policy und Blueprints zur Abbildung von DSGVO, ISO 27001 oder BSI Grundschutz.",
  },
  {
    title: "Hybrid Operations (Arc)",
    description:
      "Einbindung von On-Prem- und Multi-Cloud-Ressourcen in Governance und Monitoring.",
  },
];

const reviewPoints = [
  { h: "", p: "Sicherheitslage (Secure Score, Defender Reports)" },
  { h: "", p: "Kostenentwicklung und Einsparpotenziale" },
  { h: "", p: "Prozess- und Incident-KPIs" },
  { h: "", p: "Offene Risiken und Verbesserungsmaßnahmen" },
  { h: "", p: "Anpassung von Policies und Governance-Strukturen" },
];

export default function Page() {
  return (
    <>
      <HeroSection title="Azure Betriebsleitfaden für den Mittelstand">
        <LeftItem>
          <Paragraph size="lg" className="leading-8 text-gray-200 max-w-3xl">
            Wir strukturieren, sichern und betreiben Ihre Microsoft Azure
            Umgebung revisionssicher. Ziel ist ein stabiler Cloud-Betrieb mit
            klaren Verantwortlichkeiten, transparenten Prozessen und modularen
            Erweiterungsoptionen.
          </Paragraph>
          <Paragraph className="text-gray-200">
            Dieser Leitfaden richtet sich an Unternehmen, die ihren Azure-Tenant
            professionell betreiben lassen möchten, Governance und Sicherheit
            vereinheitlichen oder bestehende Umgebungen durch oseven managen
            lassen wollen.
          </Paragraph>
        </LeftItem>
      </HeroSection>

      <Section className="bg-gray-100">
        <div className="text-center max-w-4xl mx-auto">
          <Heading level={1}>Ebene 1 – Strategische Grundlage</Heading>
          <Paragraph>
            Ein professioneller Azure-Betrieb basiert auf einem klaren Zielbild
            und fünf tragenden Säulen, die Stabilität, Sicherheit und
            Transparenz gewährleisten.
          </Paragraph>
        </div>
      </Section>

      <Section className="text-white">
        <Steps
          headline="Das Zielbild für Ihren Azure-Betrieb"
          subline="So schaffen wir die Grundlage für eine sichere und skalierbare Cloud."
          steps={pillars}
        />
      </Section>

      <Section className="bg-gray-100">
        <div className="text-center max-w-4xl mx-auto">
          <Heading level={1}>Betriebsmodell</Heading>
          <Paragraph>
            Wir bieten zwei Betriebsmodelle, die sich am gewünschten Grad an
            Verantwortungsübergabe orientieren.
          </Paragraph>
        </div>
        <SimpleGrid cols={2} className="mt-8">
          <SimpleCard
            imageSrc="/window.svg"
            imageAlt="Azure Betriebsmodell"
            heading="Managed (Full Control)"
            paragraph="oseven übernimmt Verwaltung, Sicherheit, Monitoring, Kostenkontrolle und Reporting Ihrer Azure-Umgebung."
          />
          <SimpleCard
            imageSrc="/globe.svg"
            imageAlt="Azure Governance"
            heading="Unmanaged (Governed)"
            paragraph="Der Tenant verbleibt beim Kunden; oseven steuert Betrieb und Überwachung im Rahmen definierter Zugriffsrechte."
          />
        </SimpleGrid>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-gray-100 p-6">
            <Heading level={3}>Kernprinzipien</Heading>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                Shared Responsibility Model zwischen Microsoft, Kunde und
                oseven.
              </li>
              <li>
                Automatisierung und DevOps-Kultur mit Infrastructure as Code.
              </li>
              <li>
                Cloud Center of Excellence als Regelwerk für Best Practices.
              </li>
              <li>Hybrid-Integration von Identitäten und Netzwerken.</li>
            </ul>
          </div>
          <div className="rounded-lg bg-gray-100 p-6">
            <Heading level={3}>Governance &amp; Sicherheit</Heading>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                Kontrollierter Umgang mit Storage inklusive Backups und RBAC.
              </li>
              <li>
                Aktive Sicherheitsüberwachung mit Microsoft Defender for Cloud.
              </li>
              <li>
                Identity &amp; Access Governance über Entra ID, MFA und
                Policies.
              </li>
              <li>
                Regelmäßige Reviews, Audit-Protokolle und Netzwerksegmentierung.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="text-white">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Heading level={1}>Ebene 2 – Operativer Betrieb</Heading>
          <Paragraph>
            Rollen, Prozesse und Monitoring sorgen für einen transparenten,
            nachvollziehbaren Betrieb, der Incidents minimiert und Compliance
            sicherstellt.
          </Paragraph>
        </div>
        <SimpleGrid cols={3} className="mt-10">
          <div className="rounded-lg bg-gray-900 p-6 shadow-sm">
            <Heading level={2}>Kunde</Heading>
            <Paragraph>
              Trifft strategische Entscheidungen, priorisiert Anforderungen und
              verantwortet Budgetfreigaben.
            </Paragraph>
          </div>
          <div className="rounded-lg  bg-gray-900  p-6 shadow-sm">
            <Heading level={2}>oseven Operations Team</Heading>
            <Paragraph>
              Steuert laufenden Betrieb, Monitoring, Security, Deployments,
              Backups und FinOps.
            </Paragraph>
          </div>
          <div className="rounded-lg  bg-gray-900  p-6 shadow-sm">
            <Heading level={2}>Microsoft Support</Heading>
            <Paragraph>
              Übernimmt als 3rd Level Hersteller-Support bei
              Plattform-Vorfällen.
            </Paragraph>
          </div>
        </SimpleGrid>
      </Section>

      <Section className="bg-gray-100">
        <Steps
          headline="Betriebs- und Supportprozesse"
          subline="Strukturierte Abläufe garantieren Sicherheit und Transparenz."
          steps={processSteps}
        />
      </Section>

      <Section className="text-white">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Heading level={1}>
            Ebene 3 – Modularer Aufbau &amp; Weiterentwicklung
          </Heading>
          <Paragraph>
            Erweiterungsbausteine ergänzen den Standardbetrieb und ermöglichen
            eine maßgeschneiderte Weiterentwicklung Ihrer Azure-Umgebung.
          </Paragraph>
        </div>

        <SimpleGrid cols={3} className="mt-10">
          {modules.map((module) => (
            <React.Fragment key={module.title}>
              {/* <Heading level={2}>{module.title}</Heading>
              <Paragraph>{module.description}</Paragraph> */}
              <SimpleCard
                imageSrc="/icons/geheimnisvoll.png"
                imageAlt="CloudConsult Pro Logo"
                heading={module.title}
                paragraph={module.description}
              />
            </React.Fragment>
          ))}
        </SimpleGrid>
      </Section>

      <Section className="bg-gray-100">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Heading level={1}>Ebene 4 – Governance &amp; Review</Heading>
        </div>
        <SimpleGrid cols={5}>
          <div className="col-span-2 flex flex-col justify-center">
            <Paragraph>
              Kontinuierliche Reviews sichern die fortlaufende Verbesserung
              Ihres Azure-Betriebs nach ITIL und Azure Best Practices.
            </Paragraph>
            <Image
              src="/cloud-review-dark.png"
              alt="CloudConsult Pro Logo"
              width={160}
              height={60}
              className="w-full h-auto mt-8"
            />
          </div>
          <div className="col-span-3 pl-0 md:pl-16 py-8">
            <Heading level={2}>Regelmäßige Review-Inhalte</Heading>
            <ListWithIcons elements={reviewPoints}></ListWithIcons>
          </div>
        </SimpleGrid>
      </Section>

      <Section className="text-white">
        <Heading level={1}>Fazit &amp; Kontakt</Heading>
        <Paragraph>
          Ein professionell strukturierter Azure-Betrieb sorgt für Sicherheit,
          Transparenz und Kostenkontrolle. Wir integrieren den Leitfaden nahtlos
          in Ihre bestehenden IT-Strukturen – vom initialen Aufbau bis zur
          kontinuierlichen Optimierung.
        </Paragraph>
        <Paragraph>
          Kontaktieren Sie uns, wenn Sie Ihre Azure-Umgebung bewerten oder
          professionalisieren möchten. oseven GmbH – Azure Governance &amp;
          Operations für den Mittelstand.
        </Paragraph>
      </Section>

      <Section className="bg-gray-100">
        <YourContact />
      </Section>
    </>
  );
}
