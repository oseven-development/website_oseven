export interface Project {
  title: string;
  description: string;
  image: string;
  duration: { start: string; end?: string };
  position: string;
  customer: string;
  industry: string;
  technology: string[];
  challanges: string[];
  content: {
    activities: string[];
    ownership: string[];
  };
}

export const projects: {
  [key: string]: Project;
} = {
  talos: {
    image: "startup.png",
    title: "Talos - AI Basierte Informations-aufbereitung",
    description: "Ein KI Basiertes Model zum Extrahieren von Informationen.",
    duration: {
      start: "2018-04",
      end: "2019-06",
    },
    position: "CO-FOUNDER, CTO & Cloud-Architect",
    customer: "Talos-Insights (Startup)",
    industry: "IT-Software",
    technology: [
      "AWS",
      "S3",
      "Route53",
      "Lambda",
      "DynamoDB",
      "SQS",
      "ECS",
      "EKS",
      "Cognito",
      "IAM",
      "CloudFront",
      "API-Gateway",
      "Serverless",
      "Terraform",
      "Typescript",
      "Python",
      "Golang",
      "Pytorch",
      "React",
      "Redux",
    ],
    challanges: [
      "Unternehmensinformationen liegen heute in einer Vielzahl von Quellen vor – von Webseiten über Pressemitteilungen und Geschäftsberichte bis  hin zu branchenspezifischen Datenbanken. Diese Informationen sind zwar öffentlich zugänglich, aber selten strukturiert oder direkt vergleichbar.",
      "Für Marktanalysten bedeutet das: aufwendige Recherchen, manuelle Extraktion einzelner Datenpunkte und eine zeitintensive Prüfung der Relevanz. Hinzu kommt, dass relevante Details häufig in unübersichtlichen Textmengen verborgen sind. Ohne den Einsatz spezialisierter Methoden droht ein Informationsverlust oder es besteht die Gefahr, dass Trends und Entwicklungen zu spät erkannt werden.",
      "Je größer das Datenvolumen wird, desto schwerer ist es, den Überblick zu behalten und fundierte Entscheidungen zeitnah zu treffen. Die zentrale Herausforderung besteht also darin, offene Unternehmensdaten effizient nutzbar zu machen, manuelle Routinetätigkeiten zu reduzieren und gleichzeitig die Qualität sowie Aktualität der gewonnenen Erkenntnisse sicherzustellen.",
    ],
    content: {
      activities: [
        "TALOS Insights extrahiert offen verfügbare Unternehmensinformationen und nutzt natürliche Sprachverarbeitung, um gefundene Datenpunkte zu analysieren und den manuellen Aufwand für Marktanalysten zu minimieren.",
      ],
      ownership: [
        "Verantwortlich für die komplette IT-Architektur, einschließlich des Betriebs und der Bereitstellung der Infrastruktur, das Entwickeln des Frontends sowie der Backend-Microservices",
        "Erstellen der Berechtigungskonzepte für externe User mit AWS Cognito",
        "Nutzung von Terraform zur Provisionierung der Infrastruktur",
      ],
    },
  },
  "codecamp-n": {
    image: "startup.png",
    title: "RAG Chatbot für kommunale Versorgungsunternehmen  ",
    description: "",
    duration: {
      start: "2019-06",
      end: "2020-04",
    },
    position: "",
    customer: "",
    industry: "",
    technology: [],
    challanges: [],
    content: {
      activities: [],
      ownership: [],
    },
  },
  aerwatch: {
    image: "startup.png",
    title: "AERWATCH - KI-gestützte Überwachung von Luftqualität",
    description: "",
    duration: {
      start: "2020-04",
      end: "2021-02",
    },
    position: "",
    customer: "",
    industry: "",
    technology: [],
    challanges: [],
    content: {
      activities: [],
      ownership: [],
    },
  },
  "ai-insurance-app": {
    image: "startup.png",
    title: "AI-gestützte Versicherungsanwendung für die BU",
    description: "",
    duration: {
      start: "2021-02",
      end: "2021-05",
    },
    position: "",
    customer: "",
    industry: "",
    technology: [],
    challanges: [],
    content: {
      activities: [],
      ownership: [],
    },
  },
  "transnet-bw": {
    image: "startup.png",
    title: "Kritis Plattform für den Redispatch",
    description: "",
    duration: {
      start: "2021-04",
      end: "2022-10",
    },
    position: "",
    customer: "Transnet BW/EnBW",
    industry: "",
    technology: [],
    challanges: [],
    content: {
      activities: [],
      ownership: [],
    },
  },
  "siemens-si-dev-ops": {
    image: "startup.png",
    title: "DevOps Plattform als IDP",
    description: "",
    duration: {
      start: "2022-07",
      end: "2023-02",
    },
    position: "",
    customer: "Siemens Si",
    industry: "",
    technology: [],
    challanges: [],
    content: {
      activities: [],
      ownership: [],
    },
  },
  "db-regio-cloud-architect": {
    image: "startup.png",
    title: "Migration einen kritischen Anwendung",
    description: "Migration einer kritischen Anwendung in die AWS-Cloud.",
    duration: {
      start: "2023-03",
    },
    position: "Lead Cloud Architect (AWS)",
    customer: "DB-Regio",
    industry: "Personenverkehr",
    technology: [
      "VPC",
      "S3",
      "EC2",
      "ECS",
      "Elastic-Loadbalancer",
      "Lambda",
      "RDS",
      "DynamoDB",
      "Cloudwatch",
      "Stepfunctions",
      "AppSync",
      "Opensearch Serverless",
      "MSK (Kafka)",
      "Typescript",
      "Python",
      "Rust",
      "CICD Gitlab",
      "Gitlab-Pipelines",
    ],
    challanges: [
      "Die Umstellung bestehender Anwendungen auf ein modernes Cloud-Native Design bringt nicht nur technische, sondern auch organisatorische Herausforderungen mit sich. Ein häufiges Problem liegt in der fehlenden Reife der bestehenden CI/CD-Pipelines: Build- und Deployment-Prozesse sind oft historisch gewachsen, fehleranfällig oder unzureichend automatisiert. Dies führt dazu, dass Deployments nicht reproduzierbar sind und Fehler erst spät im Betrieb sichtbar werden.",
      "Ein weiteres Risiko entsteht durch unzureichend implementierte Infrastructure as Code (IaC)-Ansätze. Wenn States nicht konsistent verwaltet oder regelmäßig mit der produktiven Umgebung abgeglichen werden, kommt es schnell zu „Configuration Drift“. Dadurch verlieren Teams den Überblick, und Infrastrukturänderungen erfolgen manuell oder unkontrolliert – ein Bruch mit den Grundprinzipien von Cloud-Native.",
      "Hinzu kommt, dass während der Migration häufig hybride Phasen entstehen, in denen alte und neue Systeme parallel betrieben werden müssen. Ohne saubere Deployment- und IaC-Prozesse steigen dadurch die Komplexität, die Fehleranfälligkeit und die Betriebskosten erheblich.",
      "Die zentrale Herausforderung besteht darin, robuste CI/CD-Pipelines aufzubauen, Infrastructure as Code konsistent und versionssicher umzusetzen sowie einen stabilen und nachvollziehbaren Migrationspfad zu gestalten. Nur so lässt sich die Vision eines wirklich Cloud-Nativen Betriebsmodells erreichen.",
    ],
    content: {
      activities: [
        "Migration einer kritischen 30 Jahre alten Anwendung für den Personennahverkehr",
        "Refactoring der gesamten Architektur sowie Business-Logik",
        "Aufbau der gesamten Architektur nach Serverless-Pattern und den passenden Serverless-Services",
        "Stärkung der Operational Excellence",
      ],
      ownership: [
        "Aufbau von DevOps-praktiken",
        "Aufbau der Release und DevOps Pipelines",
        "Erzeugen und Pflegen von DevOps-IaC Libraries mit hilfe von CDK",
        "Support der Entwicklungsteams in der AWS-Infrastruktur",
        "Einführen von CICD-Standards und Templates in GitLab",
        "Design der grundsätzlichen AWS-Architektur",
        "Aufbau eines Integration-Test-Setups unter berücksichtigung von Serverless-komponenten",
      ],
    },
  },
  "azure-data-lake-municipal-utility": {
    image: "startup.png",
    title: "Datalake Konzept für einen kommunalen Versorger",
    description: "",
    duration: {
      start: "2023-10",
      end: "2024-01",
    },
    position: "",
    customer: "",
    industry: "",
    technology: [],
    challanges: [],
    content: {
      activities: [],
      ownership: [],
    },
  },
  "azure-payment-architektur": {
    image: "startup.png",
    title: "Azure Kritis Plattform",
    description: "",
    duration: {
      start: "2023-11",
      end: "2024-04",
    },
    position: "",
    customer: "",
    industry: "",
    technology: [],
    challanges: [],
    content: {
      activities: [],
      ownership: [],
    },
  },
  "rag-chatbot-municipal-utility": {
    image: "startup.png",
    title: "RAG Chatbot für kommunale Versorgungsunternehmen  ",
    description: "",
    duration: {
      start: "2023-12",
      end: "2024-03",
    },
    position: "",
    customer: "",
    industry: "",
    technology: [],
    challanges: [],
    content: {
      activities: [],
      ownership: [],
    },
  },
  "ihkd-azure-cloud-audit": {
    image: "startup.png",
    title: "Auditierung einer Azure Umgebung",
    description:
      "Durchführung einer umfassenden Auditierung der Azure Umgebung der IHK Digital.",
    duration: {
      start: "2024-10",
      end: "2025-03",
    },
    position: "Externer Berater (Azure)",
    customer: "IHK Digital",
    industry: "IT-Software",
    technology: [
      "Azure",
      "AKS Kubernetes",
      "Azure Entra ID",
      "Azure Policy",
      "Azure Monitor",
      "Azure Key Vault",
      "Azure Blob Storage",
      "Azure Database for PostgreSQL",
      "Azure Virtual Network",
      "Azure Firewall",
      "Azure Cost Management",
      "Azure Resource Manager",
    ],
    challanges: [
      "Viele Unternehmen stehen nach der Einführung von Azure-Umgebungen vor erheblichen Problemen. Häufig wurden Cloud-Lösungen durch externe Dienstleister implementiert, ohne dass der Kunde die Architektur, die eingesetzten Dienste oder die Sicherheitsmechanismen im Detail nachvollziehen konnte. Das führt zu Intransparenz und Abhängigkeiten.",
      "Darüber hinaus fehlt oft eine konsequente Ausrichtung an Compliance- und Sicherheitsstandards. Fehlende Richtlinien, unklare Rollen- und Rechtekonzepte oder nicht abgesicherte Schnittstellen können erhebliche Risiken nach sich ziehen – bis hin zu Verstößen gegen regulatorische Vorgaben.",
      "Ein weiteres Problem sind die Kosten: Ohne Governance, FinOps-Strategien und kontinuierliches Monitoring laufen Ausgaben schnell aus dem Ruder. Unnötig bereitgestellte Ressourcen, fehlende Skalierungsmechanismen oder falsche Serviceauswahl verursachen vermeidbare Kostensteigerungen.",
      "Die zentrale Herausforderung besteht somit darin, Transparenz herzustellen, Compliance sicherzustellen und gleichzeitig die Wirtschaftlichkeit der Azure-Umgebung wieder in den Griff zu bekommen.",
    ],
    content: {
      activities: [
        "Vorgehen des Audits",
        "Durchführung eines Audits der Cloud-Infrastruktur",
        "Scope und Assessment der Cloud-Infrastruktur",
        "Durchführung von Stakeholder-Befragungen",
        "Erstellung eines Review-Dokuments",
        "Inhalte des Cloud-Audits im Detail",
        "Überprüfung der Cloud-Architektur",
        "Sicherheitsanalyse (Security Audit)",
        "Compliance- und Governance-Check",
        "Performance-Analyse:",
        "Prüfung der Non-Functional-Requirements (NFA)",
        "Prüfung von Cloud-Best-Practices",
        "Review der Automatisierung und DevOps-Prozesse",
        "Erstellung eines Audit-Reports mit Handlungsempfehlungen",
      ],
      ownership: [
        "Gesamtprojektverantwortung",
        "Durchführung des Audit",
        "Präsentation der Ergebnisse beim CTO",
      ],
    },
  },
  "ihkd-azure-pki-tool": {
    image: "startup.png",
    title: "Design und Entwicklung eines PKI-Tools",
    description:
      "Entwicklung eines PKI-Tools zur Verwaltung von Zertifikaten für die IHK Digital.",
    duration: {
      start: "2025-02",
      end: "2025-08",
    },
    position: "Projektleiter und Engineer",
    customer: "IHK Digital",
    industry: "IT-Software",
    technology: [
      "ACME",
      "OpenSSL",
      "Nextjs",
      "nestjs",
      "Azure ContainerApps",
      "Bamboo",
      "PostgresDB",
    ],
    challanges: [
      "Die Absicherung von Service-zu-Service-Kommunikation stellt Unternehmen vor erhebliche technische und organisatorische Hürden. Mit zunehmender Verteilung von Anwendungen über Microservices, Cloud-Plattformen und hybride Umgebungen steigt die Komplexität, vertrauenswürdige Identitäten und verschlüsselte Verbindungen zuverlässig bereitzustellen.",
      "Eine Public Key Infrastructure (PKI) muss nicht nur hochverfügbar und skalierbar sein, sondern auch den gesamten Lebenszyklus von Zertifikaten – von der Ausstellung über die Verteilung bis hin zur rechtzeitigen Erneuerung oder Sperrung – automatisiert abdecken. Ohne solche Prozesse drohen Sicherheitslücken, abgelaufene Zertifikate oder hohe manuelle Aufwände im Betrieb.",
      "Besonders herausfordernd ist, dass moderne Data Services häufig in dynamischen Infrastrukturen (z. B. Kubernetes, Multi-Cloud oder Edge-Umgebungen) laufen. Hier müssen Zertifikate in Sekundenbruchteilen bereitgestellt und überprüft werden, während gleichzeitig Compliance-Anforderungen (z. B. BSI, ISO, GDPR) eingehalten werden müssen.",
      "Damit wird die PKI zum kritischen Fundament für sichere Datenplattformen: Nur mit konsequent umgesetztem mTLS, klar definierten Vertrauenskettens und automatisierter Verwaltung lässt sich die Grundlage für vertrauenswürdige Data Services schaffen.",
    ],
    content: {
      activities: [
        "Verwaltung von Zertifikaten und zugehörigen Schlüsseln",
        "Aufbau eines ACME-Servers",
        "Ausstellung neuer Zertifikate gemäß vordefinierter Richtlinien",
        "Automatisierte oder manuelle Verlängerung bestehender Zertifikate",
        "Sicheres Speichern und Abrufen von Zertifikaten",
        "Verwaltung von Berechtigungen und Zugriffen",
        "Deployment der Anwendung in ContainerApps zur Sicherstellung von Skalierbarkeit und Hochverfügbarkeit",
      ],
      ownership: [
        "Gesamtprojektverantwortung",
        "Planung, Design und umsetzung",
        "Deployment und Betrieb der Anwendung",
      ],
    },
  },
};
