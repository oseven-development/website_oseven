import { Heading, Paragraph } from "@/components";
import FAQs, { FAQItem } from "@/components/content/faqs";
import { HeroSection, LeftItem, RightItem } from "@/components/hero-section";
import ListWithIcons from "@/components/layout/list-with-icons";
import SimpleCard from "@/components/layout/simple-card";
import SimpleGrid from "@/components/layout/grids";
import Section from "@/components/section";
import ImageWith4Elements from "@/components/content/image-with-4-elements";
import Steps from "@/components/content/steps";
import HubSpotDownloadCard from "@/components/content/hubspot-download-card";
import buildMetaData from "@/lib/meta-data-builder";

export const metadata = buildMetaData({
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
  ],
  image: {
    src: "/og-images/azure-admin.png",
    alt: "Azure Administrator Service",
  },
  url: "/services/azure/azure-administrator",
});

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
      src: "/azure/entra-id.png",
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

const faqs = [
  {
    question: "Was genau ist der oseven Azure Administrator Service?",
    answer:
      "Mit dem Azure Administrator Service übernimmt ein zertifizierter Azure-Administrator den professionellen Betrieb, die Sicherheit und die Optimierung Ihrer Microsoft-Azure-Umgebung. Sie erhalten Cloud-Expertise auf Abruf – ohne eigenes internes Team aufbauen zu müssen.",
  },
  {
    question: "Für wen ist dieser Service gedacht?",
    answer:
      "Der Service richtet sich an kleine und mittelständische Unternehmen, die Azure bereits nutzen oder einführen möchten, aber keine internen Kapazitäten für den laufenden Betrieb haben. Typische Kunden sind IT-arme Unternehmen, Start-ups oder Organisationen mit hohen Compliance-Anforderungen.",
  },
  {
    question: "Welche Zertifizierungen besitzen Ihre Administratoren?",
    answer:
      "Alle oseven Azure Administratoren sind Microsoft Certified: Azure Administrator Associate (AZ-104) und Azure Fundamentals (AZ-900). Viele verfügen zusätzlich über Spezialisierungen wie Azure Security Engineer (AZ-500) oder Solutions Architect Expert (AZ-305).",
  },
  {
    question: "Welche Aufgaben übernimmt der Administrator?",
    answer:
      "Ihr Administrator kümmert sich um den gesamten Azure-Betrieb – von virtuellen Maschinen, Datenbanken und Netzwerken bis zu Backup, Monitoring und Sicherheitsrichtlinien. Er optimiert Kosten, implementiert Governance und sorgt für DSGVO- und ISO-27001-Konformität.",
  },
  {
    question:
      "Behalten wir weiterhin Zugriff und Kontrolle über unsere Umgebung?",
    answer:
      "Ja, selbstverständlich. Sie bleiben jederzeit Eigentümer Ihrer Azure-Subscription. Unsere Administratoren arbeiten innerhalb vereinbarter Rollen und dokumentieren alle Änderungen transparent. Sie behalten die volle Kontrolle und Entscheidungsfreiheit.",
  },
  {
    question: "Wie wird Sicherheit und Compliance gewährleistet?",
    answer:
      "Wir setzen Microsoft-Best-Practices um: Rollenbasierte Zugriffe, Multi-Faktor-Authentifizierung, Netzwerksegmentierung, Defender for Cloud und Azure Policy. Regelmäßige Audits und Sicherheitsberichte stellen die Einhaltung von DSGVO und ISO 27001 sicher.",
  },
  {
    question: "Wie werden Backups und Wiederherstellung umgesetzt?",
    answer:
      "Alle geschäftskritischen Workloads werden mit Azure Backup und Site Recovery abgesichert. Regelmäßige Wiederherstellungstests prüfen die Datenintegrität, und automatische Failover-Pläne garantieren Business-Continuity im Notfall.",
  },
  {
    question: "Wie funktioniert die Kostenoptimierung?",
    answer:
      "Wir analysieren Ihre Azure-Kosten mit Cost Management und Advisor, passen Ressourcen an, schalten ungenutzte VMs ab und nutzen Savings Plans oder Reserved Instances. Monatliche Reports zeigen Einsparpotenziale und Optimierungsempfehlungen.",
  },
  {
    question: "Ist der Service skalierbar, wenn unser Bedarf wächst?",
    answer:
      "Ja. Der Azure Administrator Service wächst mit Ihrer Umgebung. Wir können das Monitoring erweitern, DevOps-Pipelines integrieren oder Kubernetes- und PaaS-Dienste übernehmen, sobald Ihre Infrastruktur komplexer wird.",
  },
  {
    question: "Wie läuft die Kommunikation mit dem Administrator ab?",
    answer:
      "Jeder Kunde erhält einen festen Ansprechpartner. Die Kommunikation erfolgt per E-Mail, Telefon oder Ticket-Portal. Regelmäßige Review-Calls und Statusberichte halten Sie über Systemzustand und Verbesserungen auf dem Laufenden.",
  },
  {
    question:
      "Was passiert, wenn der Administrator einmal nicht verfügbar ist?",
    answer:
      "oseven verfügt über ein eingespieltes Operationsteam mit vollständiger Dokumentation und Übergabeprozessen. Fällt ein Administrator aus, übernimmt ein anderer zertifizierter Kollege sofort – ohne Unterbrechung Ihres Betriebs.",
  },
  {
    question:
      "Unterstützen Sie auch bei Migrationen oder bestehenden Umgebungen?",
    answer:
      "Ja. Vor dem laufenden Betrieb führen wir auf Wunsch ein Azure-Audit oder eine initiale Migration durch. Wir analysieren Ihre bestehende Umgebung, strukturieren sie nach Best Practices und bereiten sie für den Managed Betrieb vor.",
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
        <RightItem>
          <div className="flex flex-col items-center lg:items-end justify-center h-full">
            <HubSpotDownloadCard
              title="Azure Administrator Service"
              description="Optimieren Sie Ihre Azure-Umgebung mit unserem zertifizierten Administrator."
              cta="https://eu1.hubs.ly/H0p2FY40"
              imageSrc="/og-images/azure-admin.png"
            />
          </div>
        </RightItem>
      </HeroSection>

      <Section be="light">
        <Steps
          headline=" Was unsere Azure Administratoren für Sie tun"
          subline="Wir liefern Ende-zu-Ende-Betrieb für Azure – von täglicher Ressourcenverwaltung bis zur proaktiven Optimierung – damit sich Ihr Team auf den geschäftlichen Mehrwert konzentrieren kann."
          steps={serviceHighlights.map((item) => ({
            headline: item.heading,
            subline: item.paragraph,
          }))}
        />
      </Section>

      <Section be="dark">
        <Heading level={1}>
          Zertifizierte Expertise, der Sie vertrauen können
        </Heading>
        <Paragraph size="lg">
          Jeder oseven Administrator hält zentrale Microsoft-Zertifizierungen
          und erweitert sein Wissen kontinuierlich durch Microsoft-Learn-Labs
          sowie praktische Projekte. Diese Zertifikate sind die
          Grundvoraussetzung für einen zuverlässigen und sicheren Azure-Betrieb
          – sie belegen nicht nur technisches Know-how, sondern auch die
          Fähigkeit, Best Practices im täglichen Betrieb konsequent umzusetzen.
        </Paragraph>
        <SimpleGrid cols={2} className="gap-6 mt-8">
          {certifications.map((cert) => (
            <SimpleCard
              imgWidth={200}
              imgHeight={200}
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
        <Heading level={1} className="!mt-12">
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
          Wir betreiben Ihre Azure-Umgebung mit dem Toolset, auf das auch
          Microsoft selbst setzt – für maximale Transparenz, Sicherheit und
          einen konsistenten Betrieb. Unsere Administratoren nutzen modernste
          Werkzeuge für Überwachung, Automatisierung und Fehlerbehebung, sodass
          Sie jederzeit volle Kontrolle und Einblick in Ihre Cloud-Ressourcen
          behalten. So profitieren Sie von Best Practices, die in
          internationalen Enterprise-Umgebungen erprobt sind, und erhalten einen
          Betrieb, der sowohl effizient als auch nachvollziehbar dokumentiert
          ist.
        </Paragraph>
        <SimpleGrid cols={3}>
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
          {faqs.map((faq) => (
            <FAQItem key={faq.question} title={faq.question}>
              <Paragraph>{faq.answer}</Paragraph>
            </FAQItem>
          ))}
        </FAQs>
      </Section>
    </>
  );
}
