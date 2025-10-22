import { Heading, Paragraph } from "@/components";
import YourContact from "@/components/content/your-contact";
import FAQs, { FAQItem } from "@/components/content/faqs";
import { HeroSection, LeftItem } from "@/components/hero-section";
import ListWithIcons from "@/components/layout/list-with-icons";
import SimpleCard from "@/components/layout/simple-card";
import SimpleGrid from "@/components/layout/grids";
import Section from "@/components/section";
import { Metadata } from "next";
import ImageWith4Elements from "@/components/content/image-with-4-elements";
import Steps from "@/components/content/steps";

export const metadata: Metadata = {
  title: "Azure Administrator",
  description:
    "Zertifizierte Azure Administratoren von oseven betreiben, sichern und optimieren Ihre Microsoft Azure Umgebung – mit Governance in Enterprise-Qualität, zugeschnitten auf den Mittelstand.",
  keywords: [
    "Azure",
    "Azure Administrator",
    "Managed Service",
    "Cloud Betrieb",
    "Azure Governance",
    "FinOps",
    "Cloud Sicherheit",
    "Azure Monitoring",
    "Disaster Recovery",
    "Automation",
  ].join(", "),
  openGraph: {
    title: "Azure Administrator",
    description:
      "Zertifizierte Azure Administratoren von oseven betreiben, sichern und optimieren Ihre Microsoft Azure Umgebung – mit Governance in Enterprise-Qualität, zugeschnitten auf den Mittelstand.",
    url: "/services/azure/azure-administrator",
    images: "/og-images/azure-admin.png",
    siteName: "azure-administrator",
    locale: "de_DE",
    type: "website",
  },
};

const serviceHighlights = [
  {
    heading: "Umfassender Betrieb und Ressourcenmanagement",
    paragraph:
      "Wir übernehmen die komplette Verantwortung für Bereitstellung, Konfiguration und Verwaltung Ihrer Azure-Workloads – von virtuellen Maschinen über Datenbanken bis hin zu Netzwerken. Durch Best-Practice-Ressourcengruppen, Tagging und Richtlinien bleibt jede Subscription transparent, skalierbar und auditierbar.",
  },
  {
    heading: "Kontinuierliches Monitoring und Kostenoptimierung",
    paragraph:
      "Mit Azure Monitor, Log Analytics und Azure Advisor überwachen wir Zustand, Performance und Kosten in Echtzeit. Rightsizing, Budgetwarnungen und automatisierte Abschaltungen außerhalb der Geschäftszeiten sorgen für planbare Abrechnungen und messbaren ROI.",
  },
  {
    heading: "Security, Compliance und Governance",
    paragraph:
      "Identitäten und Zugriffe bleiben mit Azure AD, MFA und rollenbasierten Richtlinien unter strenger Kontrolle. Key Vaults, Firewalls, Defender for Cloud und Azure Policy stellen sicher, dass ISO 27001, DSGVO und BSI-Vorgaben dauerhaft erfüllt werden.",
  },
  {
    heading: "Backup und Disaster Recovery",
    paragraph:
      "Azure Backup und Site Recovery schützen Workloads in VMs, Datenbanken und Storage Accounts. Regelmäßig getestete Restore-Runbooks und automatisches Failover minimieren Ausfallzeiten selbst im Worst-Case.",
  },
  {
    heading: "Automatisierung, Effizienz und Skalierbarkeit",
    paragraph:
      "Wir beschreiben die Infrastruktur mit Bicep, ARM und Terraform und automatisieren Routineaufgaben mit Azure CLI und PowerShell. Serverless-Patterns und Auto-Scaling halten Ihre Workloads reaktionsschnell, ohne Überprovisionierung.",
  },
];

const certifications = [
  {
    imageAlt: "Azure AZ 104 Logo",
    imageSrc: "/azure/az-104.png",
    heading: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
    paragraph:
      "Belegt fundierte Expertise in der Konfiguration virtueller Netzwerke, der Verwaltung von Compute und Storage, der Identitätssteuerung sowie dem Monitoring komplexer Azure-Umgebungen.",
  },
  {
    imageAlt: "Azure AZ 900 Logo",
    imageSrc: "/azure/az-900.webp",
    heading: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    paragraph:
      "Schafft ein solides Fundament zu Azure-Architektur, Kostenmodellen und Cloud-Prinzipien und verbindet technische Tiefe mit geschäftlicher Ausrichtung.",
  },
];

const optionalSpecializations = [
  {
    h: "Azure Security Engineer (AZ-500)",
    p: "Für erweitertes Sicherheitsmanagement, Threat Detection und proaktive Abwehrmaßnahmen.",
    img: {
      src: "/azure/az-500.png",
      alt: "Azure AZ-500 Logo",
      width: 80,
      height: 300,
    },
  },
  {
    h: "Azure Solutions Architect (AZ-305)",
    p: "Für das Design robuster, skalierbarer Infrastrukturen, abgestimmt auf komplexe Workloads.",
    img: {
      src: "/azure/az-305.png",
      alt: "Azure AZ-305 Logo",
      width: 80,
      height: 300,
    },
  },
  {
    h: "Microsoft 365 / Entra ID Integration",
    p: "Für hybride Identitäten, Kollaboration und vereinheitlichte Zugriffsszenarien.",
    img: {
      src: "/azure/entra-id.webp",
      alt: "Azure Entra ID Logo",
      width: 80,
      height: 300,
    },
  },
];

const toolStack = [
  {
    heading: "Azure Portal",
    paragraph:
      "Visuelle Dashboards und Management-Ansichten, die jede Ihrer Subscriptions transparent halten.",
    image: {
      src: "/azure/azure.png",
      alt: "Azure Portal Screenshot",
      width: 120,
      height: 120,
    },
  },
  {
    heading: "Azure CLI & PowerShell Az",
    paragraph:
      "Automationsfähige Werkzeuge für Massenoperationen, Skripting und Infrastruktur-Orchestrierung.",
    image: {
      src: "/azure/powershell.png",
      alt: "Azure CLI Screenshot",
      width: 120,
      height: 120,
    },
  },
  {
    heading: "Azure Monitor & Log Analytics",
    paragraph:
      "End-to-End-Observability mit Alerts, Metriken und tiefgehender Diagnose.",
    image: {
      src: "/azure/monitor.png",
      alt: "Azure Monitor Screenshot",
      width: 120,
      height: 120,
    },
  },
  {
    heading: "Defender for Cloud",
    paragraph:
      "Security-Posture-Management in Echtzeit und Schutz vor Bedrohungen über alle Subscriptions hinweg.",
    image: {
      src: "/azure/defender.jpg",
      alt: "Defender for Cloud Screenshot",
      width: 120,
      height: 120,
    },
  },
  {
    heading: "Azure Automation & DevOps Pipelines",
    paragraph:
      "Continuous-Deployment-Workflows und Runbooks, die Umgebungen konsistent halten.",
    image: {
      src: "/azure/devops.jpg",
      alt: "Azure DevOps Screenshot",
      width: 120,
      height: 120,
    },
  },
  {
    heading: "Azure Backup, Site Recovery & Storage Explorer",
    paragraph:
      "Resilienter Datenschutz, Replikation und operative Transparenz für geschäftskritische Assets.",
    image: {
      src: "/azure/backup.jpg",
      alt: "Azure Backup Screenshot",
      width: 120,
      height: 120,
    },
  },
];

const smbFocus = [
  {
    heading: "Kosteneffizienz",
    paragraph:
      "Wir right-sizen Compute-Ressourcen, setzen Lifecycle-Regeln durch und etablieren klare Budgetwarnungen, damit Sie nur das bezahlen, was Sie wirklich benötigen.",
  },
  {
    heading: "Skalierbarkeit",
    paragraph:
      "Ihre Infrastruktur wächst automatisch mit dem Geschäft, ohne Überprovisionierung oder technische Schulden.",
  },
  {
    heading: "Sicherheit & Compliance",
    paragraph:
      "Schutz auf Enterprise-Niveau inklusive DSGVO-Konformität schafft Vertrauen bei Stakeholdern und Auditoren.",
  },
  {
    heading: "Einfachheit",
    paragraph:
      "Klare Kommunikation, persönliche Betreuung und Dokumentation, die Ihr Team sofort anwenden kann.",
  },
];

export default function Page() {
  return (
    <>
      <HeroSection title="Azure Administration">
        <LeftItem>
          <Paragraph size="lg" className="leading-8 text-gray-200 max-w-3xl">
            Viele kleine und mittlere Unternehmen setzen auf Microsoft Azure,
            doch nur wenige verfügen über Zeit, Personal oder internes Know-how,
            um die Plattform sicher und effizient zu betreiben.
          </Paragraph>
          <Paragraph className="text-gray-200 max-w-3xl">
            Bei oseven erhalten Sie einen zertifizierten Azure Administrator,
            der Ihre Umgebung behandelt, als wäre es seine eigene: sicher,
            optimiert, compliant und jederzeit verfügbar.
          </Paragraph>
          <Paragraph className="text-gray-200 max-w-3xl">
            Unsere Administratoren verbinden Cloud-Expertise auf
            Enterprise-Niveau mit einem pragmatischen Mindset für den
            Mittelstand – fokussiert auf Zuverlässigkeit, Kosteneffizienz und
            klare Kommunikation.
          </Paragraph>
        </LeftItem>
      </HeroSection>

      <Section be="light">
        <Steps
          headline=" Was unsere Azure Administratoren für Sie tun"
          subline="Wir liefern Ende-zu-Ende-Betrieb für Azure – von täglicher Ressourcenverwaltung bis zur proaktiven Optimierung – damit sich Ihr Team auf den geschäftlichen Mehrwert konzentrieren kann."
          steps={serviceHighlights.map((item) => ({
            headline: item.heading,
            subline: item.paragraph,
          }))}
          // steps={[
          //   {
          //     headline:
          //       "Vorgehen des Audits Durchführung eines Audits der Cloud-Infrastruktur",
          //     subline:
          //       "Umfassende Überprüfung der Cloud-Umgebung hinsichtlich Architektur, Konfiguration und Performance.",
          //   },
          //   {
          //     headline: "Scope und Assessment der Cloud-Infrastruktur",
          //     subline:
          //       "Festlegung der in den Audit-Prozess einbezogenen Konten, Dienste und Regionen, um eine klare Abgrenzung des Prüfumfangs zu gewährleisten. Durchführung von Stakeholder-Befragungen zur ganzheitlichen Erfassung der Anforderungen und Zielsetzungen. Evaluierung der Infrastruktur im Hinblick auf die Umsetzung und Einhaltung der Non- Functional-Requirements (NFA), insbesondere auch der IT-Standards.",
          //   },
          //   {
          //     headline: "Erstellung eines Review-Dokuments",
          //     subline:
          //       "Erstellung eines umfassenden Audit-Reports mit klarer  Darstellung des Ist-Zustands, Verweisen zu den gesammelten Nachweisen  sowie identifizierten Risiken. Dokumentation des aktuellen Zustands der  Infrastruktur, technische und prozessuale Bewertung des Cloud-Stacks zur  Transparenz-zwecken.",
          //   },
          // ]}
        />
      </Section>

      <Section be="dark">
        <Heading level={1}>
          Zertifizierte Expertise, der Sie vertrauen können
        </Heading>
        <Paragraph size="lg">
          Jeder oseven Administrator hält zentrale Microsoft-Zertifizierungen
          und erweitert sein Wissen kontinuierlich durch Microsoft-Learn-Labs
          sowie praktische Projekte.
        </Paragraph>
        <SimpleGrid cols={2} className="gap-6 mt-8">
          {certifications.map((cert) => (
            <SimpleCard
              imgWidth={300}
              imgHeight={300}
              imageAlt={cert.imageAlt}
              imageSrc={cert.imageSrc}
              key={cert.heading}
              heading={cert.heading}
              paragraph={cert.paragraph}
              style="dark"
            />
          ))}
        </SimpleGrid>
      </Section>

      <Section be="lightGradient">
        <Heading level={2} className="!mt-12">
          Optionale Spezialisierungen auf Anfrage
        </Heading>
        <Paragraph className="mt-8">
          Jede Administratorin und jeder Administrator hält die Fähigkeiten
          durch strukturierte Lernpfade, Sandbox-Projekte und wiederkehrende
          Reviews stets auf dem neuesten Stand.
        </Paragraph>
        <ListWithIcons elements={optionalSpecializations} />
      </Section>

      <Section be="dark">
        <Heading level={1}>Unsere Werkzeuge</Heading>
        <Paragraph size="lg">
          Wir betreiben Ihre Umgebung mit dem Toolset, auf das auch Microsoft
          selbst setzt – für Transparenz und einen konsistenten Betrieb.
        </Paragraph>
        <SimpleGrid cols={3} className="gap-6 mt-8">
          {toolStack.map((tool) => (
            <SimpleCard
              imageSrc={tool.image.src}
              imageAlt={tool.image.alt}
              imgWidth={tool.image.width}
              imgHeight={tool.image.height}
              key={tool.heading}
              heading={tool.heading}
              paragraph={tool.paragraph}
              style="dark"
            />
          ))}
        </SimpleGrid>
      </Section>

      <Section be="light">
        <ImageWith4Elements
          headline="Maßgeschneidert für den Mittelstand"
          subline="Erhalten Sie einen Azure Administrator, der Enterprise-Know-how mit pragmatischer Umsetzung für mittelständische Unternehmen verbindet."
          image={{
            src: "/4-steps-random.png",
            alt: "CloudConsult Pro Logo",
            width: 160,
            height: 60,
          }}
          steps={smbFocus.map((tool) => ({
            headline: tool.heading,
            subline: tool.paragraph,
          }))}
        />
      </Section>

      <Section be="dark">
        <FAQs>
          <FAQItem title="Für welche Unternehmen lohnt sich das?">
            <Paragraph>
              Der Service richtet sich an kleine und mittlere Unternehmen, die
              Azure produktiv nutzen möchten, ohne ein eigenes Cloud-Team
              aufzubauen. Wir übernehmen Betrieb, Governance und Sicherheit nach
              Best Practices.
            </Paragraph>
          </FAQItem>
          <FAQItem title="Wie schnell können wir starten?">
            <Paragraph>
              Nach einem kurzen Onboarding-Workshop analysieren wir Ihre
              Umgebung und definieren die nächsten Schritte. In der Regel sind
              erste Maßnahmen innerhalb weniger Wochen produktiv.
            </Paragraph>
          </FAQItem>
          <FAQItem title="Welche Leistungen sind im laufenden Betrieb enthalten?">
            <Paragraph>
              Dazu zählen tägliches Monitoring, Incident-Handling,
              Kostenoptimierung, Security-Reviews sowie regelmäßige Reports. Wir
              stimmen Umfang und SLA individuell auf Ihre Anforderungen ab.
            </Paragraph>
          </FAQItem>
        </FAQs>
      </Section>

      <Section be="light">
        <Heading level={1}>Auf den Punkt gebracht</Heading>
        <Paragraph size="lg">
          OSeven Rent-an-Admin stellt Ihnen einen vollständig zertifizierten
          Azure Administrator zur Seite, der Ihre Cloud managt, absichert und
          optimiert – damit Sie sich nicht darum kümmern müssen.
        </Paragraph>
        <Paragraph>
          Sie gewinnen Stabilität, Compliance und Kostentransparenz, ohne eigene
          Mitarbeitende einstellen, schulen oder halten zu müssen. Ihre Azure
          Umgebung läuft reibungslos, während sich Ihr IT-Team auf
          geschäftskritische Aufgaben konzentriert.
        </Paragraph>
        <YourContact />
      </Section>
    </>
  );
}
