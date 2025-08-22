import ImageWith4Elements from "@/components/content/image-with-4-elements";
import Steps from "@/components/content/steps";
import { HeroSection } from "@/components/hero-section";
import SimpleGrid from "@/components/layout/grids";
import Section from "@/components/section";
import { Heading, Paragraph } from "@/components/typography/Typography";
import Image from "next/image";

import { Cloud } from "lucide-react";
import ListWithIcons from "@/components/layout/list-with-icons";
import SimpleCard from "@/components/layout/simple-card";
import FAQs, { FAQItem } from "@/components/content/faqs";
import YourContact from "@/components/content/your-contact";
export default function Page() {
  return (
    <>
      <HeroSection title={"Cloud Audit"}>
        <Paragraph size="lg" className="leading-8 text-gray-300 max-w-3xl">
          Maximale Sicherheit, Transparenz und Effizienz für Ihre
          Cloud-Infrastruktur. Wir identifizieren Risiken, optimieren Kosten und
          stellen Compliance sicher – damit Sie sich auf Ihr Kerngeschäft
          konzentrieren können.
        </Paragraph>
      </HeroSection>

      <Section className="bg-gray-100">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Heading level={1}>
            Warum Sie auf jeden Fall ein Cloud-Audit brauchen!
          </Heading>
        </div>

        <SimpleGrid cols={2}>
          <SimpleCard
            imageSrc="/icons/geheimnisvoll.png"
            imageAlt="CloudConsult Pro Logo"
            heading="Unkontrollierte Kosten"
            paragraph="Ohne Transparenz wachsen die Cloud-Ausgaben unbemerkt, was zu Budgetüberschreitungen und versteckten Kostentreibern führt."
          />
          <SimpleCard
            imageSrc="/icons/spyware.png"
            imageAlt="CloudConsult Pro Logo"
            heading="Sicherheitslücken"
            paragraph="Mangelnde kontinuierliche Überprüfung setzt Systeme Fehlkonfigurationen, Compliance-Verletzungen und Sicherheitsrisiken aus."
          />
          <SimpleCard
            imageSrc="/icons/keylogger.png"
            imageAlt="CloudConsult Pro Logo"
            heading="Ineffizienter Betrieb"
            paragraph="Ungenutzte oder falsch dimensionierte Ressourcen verlangsamen Prozesse und erhöhen die Komplexität, anstatt die Effizienz zu steigern."
          />
          <SimpleCard
            imageSrc="/icons/knacken.png"
            imageAlt="CloudConsult Pro Logo"
            heading="Fehlende Governance"
            paragraph="Ohne klare Standards und Best Practices baut jedes Team auf seine eigene Weise – das Ergebnis sind Chaos und mangelnde Verantwortlichkeit."
          />
        </SimpleGrid>
      </Section>

      <Section className="text-white">
        <Steps
          headline="Unser 3-stufiger Cloud-Audit-Prozess"
          subline="Wir verfolgen einen systematischen Ansatz, um eine umfassende Bewertung Ihrer Cloud-Sicherheit und Compliance zu gewährleisten."
          steps={[
            {
              headline:
                "Vorgehen des Audits Durchführung eines Audits der Cloud-Infrastruktur",
              subline:
                "Umfassende Überprüfung der Cloud-Umgebung hinsichtlich Architektur, Konfiguration und Performance.",
            },
            {
              headline: "Scope und Assessment der Cloud-Infrastruktur",
              subline:
                "Festlegung der in den Audit-Prozess einbezogenen Konten, Dienste und Regionen, um eine klare Abgrenzung des Prüfumfangs zu gewährleisten. Durchführung von Stakeholder-Befragungen zur ganzheitlichen Erfassung der Anforderungen und Zielsetzungen. Evaluierung der Infrastruktur im Hinblick auf die Umsetzung und Einhaltung der Non- Functional-Requirements (NFA), insbesondere auch der IT-Standards.",
            },
            {
              headline: "Erstellung eines Review-Dokuments",
              subline:
                "Erstellung eines umfassenden Audit-Reports mit klarer  Darstellung des Ist-Zustands, Verweisen zu den gesammelten Nachweisen  sowie identifizierten Risiken. Dokumentation des aktuellen Zustands der  Infrastruktur, technische und prozessuale Bewertung des Cloud-Stacks zur  Transparenz-zwecken.",
            },
          ]}
        />
      </Section>

      <Section className="bg-gray-100">
        <ImageWith4Elements
          headline="Die Perspektiven eines Cloud Audits"
          subline="Wir analysieren Ihre Cloud-Umgebung aus vier zentralen Perspektiven für maximale Transparenz und Kontrolle."
          image={{
            src: "/4-steps-random.png",
            alt: "CloudConsult Pro Logo",
            width: 160,
            height: 60,
          }}
          steps={[
            {
              headline: "Landing-Zone",
              subline:
                "Analyse der Infrastruktur hinsichtlich Design, Skalierbarkeit und Redundanz.",
            },
            {
              headline: "Cloud-Governance",
              subline:
                "Prüfung der Einhaltung von regulatorischen und internen Standards.",
            },
            {
              headline: "Security Review",
              subline:
                "Bewertung von Sicherheitsmaßnahmen, Zugriffskontrollen und Verschlüsselung.",
            },
            {
              headline: "FinOps Review",
              subline:
                "Analyse der Kostentransparenz und des Ressourceneinsatzes.",
            },
          ]}
        />
      </Section>

      <Section className="text-white">
        <SimpleGrid cols={5}>
          <div className="col-span-2 flex flex-col justify-center">
            <Heading level={1}>Inhalte des Cloud-Audits im Detail</Heading>
            <Image
              src="/cloud-review-dark.png"
              alt="CloudConsult Pro Logo"
              width={160}
              height={60}
              className="w-full h-auto mt-8"
            />
          </div>
          <div className="col-span-3 pl-0 md:pl-16 py-8">
            <ListWithIcons></ListWithIcons>
          </div>
        </SimpleGrid>
      </Section>

      <Section className="bg-gray-100">
        <SimpleGrid cols={5}>
          <div className="col-span-3 bg-red-300">
            <Cloud />
            <Heading level={2}>Test</Heading>
            <Paragraph>Cloud</Paragraph>
          </div>
          <div className="col-span-2 bg-red-200">
            <Cloud />
            <Heading level={2}>Test</Heading>
            <Paragraph>Cloud</Paragraph>
          </div>
          <div className="col-span-2 bg-red-200">
            <Cloud />
            <Heading level={2}>Test</Heading>
            <Paragraph>Cloud</Paragraph>
          </div>{" "}
          <div className="col-span-3 bg-red-300">
            <Cloud />
            <Heading level={2}>Test</Heading>
            <Paragraph>Cloud</Paragraph>
          </div>
        </SimpleGrid>
      </Section>

      <Section className="text-white">
        <FAQs>
          <FAQItem title="Was ist ein Cloud-Audit?">
            Ein Cloud-Audit ist eine systematische Überprüfung Ihrer
            Cloud-Infrastruktur, um Sicherheit, Compliance, Kosten und Leistung
            zu bewerten. Es identifiziert Risiken, Schwachstellen und
            Optimierungspotenziale.
          </FAQItem>
          <FAQItem title="Warum ist ein Cloud-Audit wichtig?">
            Es hilft, Sicherheitslücken zu schließen, unkontrollierte Kosten zu
            vermeiden, die Einhaltung von Vorschriften (wie DSGVO)
            sicherzustellen und die Gesamtleistung und Effizienz Ihrer
            Cloud-Umgebung zu verbessern.
          </FAQItem>
          <FAQItem title="Wie oft sollte ein Cloud-Audit durchgeführt werden?">
            Wir empfehlen mindestens einmal jährlich ein umfassendes Audit. Bei
            häufigen Änderungen an der Infrastruktur oder neuen
            Compliance-Anforderungen können auch häufigere, gezielte
            Überprüfungen sinnvoll sein.
          </FAQItem>
          <FAQItem title="Welche Bereiche werden bei einem Audit abgedeckt?">
            Ein umfassendes Audit deckt typischerweise die Bereiche Sicherheit,
            Kostenmanagement (FinOps), Compliance und Governance, Performance,
            Architektur, Automatisierung (DevOps) und Disaster Recovery ab.
          </FAQItem>
          <FAQItem title="Was ist das Ergebnis eines Cloud-Audits?">
            Sie erhalten einen detaillierten Audit-Bericht. Dieser enthält eine
            Zusammenfassung der Ergebnisse, eine Liste der identifizierten
            Schwachstellen und Risiken sowie konkrete, priorisierte
            Handlungsempfehlungen.
          </FAQItem>
          <FAQItem title="Kann ein Audit den laufenden Betrieb stören?">
            Nein. Unsere Audits werden so konzipiert, dass sie den laufenden
            Betrieb nicht beeinträchtigen. Wir arbeiten hauptsächlich mit
            Lesezugriffen und analysieren Konfigurationen und Metadaten.
          </FAQItem>
          <FAQItem title="Welche Cloud-Anbieter können auditiert werden?">
            Wir führen Audits für alle großen Cloud-Plattformen durch,
            einschließlich Amazon Web Services (AWS), Microsoft Azure und Google
            Cloud Platform (GCP), sowie für hybride und Multi-Cloud-Umgebungen.
          </FAQItem>
          <FAQItem title="Wie lange dauert ein typisches Cloud-Audit?">
            Die Dauer variiert je nach Umfang und Komplexität Ihrer
            Cloud-Infrastruktur, dauert aber in der Regel zwischen einer und
            vier Wochen.
          </FAQItem>
          <FAQItem title="Was kostet ein Cloud-Audit?">
            Die Kosten sind abhängig vom Umfang des Audits. Kontaktieren Sie uns
            für ein individuelles Angebot, das auf Ihre Bedürfnisse
            zugeschnitten ist.
          </FAQItem>
          <FAQItem title="Was passiert nach dem Audit?">
            Nach dem Audit unterstützen wir Sie bei der Umsetzung der
            empfohlenen Maßnahmen, um Ihre Cloud-Umgebung sicherer, effizienter
            und kostengünstiger zu gestalten.
          </FAQItem>
          <FAQItem title="Welche Hyperscaler auditieren wir?">
            Wir auditieren die führenden Hyperscaler, insbesondere Amazon Web
            Services (AWS) und Microsoft Azure. Unsere Expertise umfasst auch
            die Google Cloud Platform (GCP) sowie hybride und
            Multi-Cloud-Szenarien.
          </FAQItem>
        </FAQs>
      </Section>

      <Section className="bg-gray-100">
        <YourContact />
      </Section>
    </>
  );
}
