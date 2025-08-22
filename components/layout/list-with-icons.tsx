"use client";

import { Heading, Paragraph } from "../typography/Typography";
import Image from "next/image";
import { motion } from "motion/react";

const ele = [
  {
    h: "Überprüfung der Cloud-Architektur",
    p: "Analyse der Infrastruktur hinsichtlich Design, Skalierbarkeit und Redundanz.",
  },
  {
    h: "Sicherheitsanalyse (Security Audit)",
    p: "Bewertung der Sicherheitsmaßnahmen, einschließlich Identitätsmanagement, Zugriffskontrollen und Verschlüsselung",
  },
  {
    h: "Compliance- und Governance-Check",
    p: "Prüfung der Einhaltung von regulatorischen und internen Standards wie GDPR, BSI-Grundschutz oder ISO 27001.",
  },
  {
    h: "Performance-Analyse",
    p: "Bewertung der Ressourcenauslastung, Skalierungsfähigkeit und Latenz der Infrastruktur.",
  },
  {
    h: "Prüfung der Non-Functional-Requirements (NFA)",
    p: "Validierung der Umsetzung und Einhaltung von Verfügbarkeit, Resilienz und Skalierbarkeit sowie Überprüfung ggü. den IT-Standards.",
  },
  {
    h: "Kosten- und Nachhaltigkeit (FinOps)",
    p: "Erfassung des aktuellen Ressourceneinsatzes sowie der Kostentransparenz zur klaren Darstellung des Ist-Zustands.",
  },
  {
    h: "Prüfung von Cloud-Best-Practices",
    p: "Abgleich der aktuellen Implementierung mit etablierten Frameworks und Best Practices.",
  },
  {
    h: "Review der Automatisierung und DevOps-Prozesse",
    p: "Untersuchung der Nutzung von Infrastructure as Code (IaC) und der CI/CD-Pipelines, fokussiert auf den Aufbau der Cloud-Komponenten. (Nicht teil davon ist die CI/CD Struktur genannt: Werkzeugkette für den Rollout von Applikationen) Backup- und Disaster-Recovery-Strategie: Überprüfung der Datensicherungs- und Wiederherstellungsstrategien zur Sicherstellung der Resilienz.",
  },
  {
    h: "Erstellung eines Audit-Reports",
    p: "Zusammenfassung der Analyseergebnisse mit klar definierten Schwachstellen, Risiken und priorisierten Handlungsempfehlungen.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0 },
};

export default function ListWithIcons({}: {}) {
  return (
    <motion.ol
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {ele.map((item, i) => (
        <motion.li key={i} variants={itemVariants} className="flex items-start">
          <Image
            src="/file.svg"
            alt="CloudConsult Pro Logo"
            width={15}
            height={15}
            className="w-8 pt-4"
          />
          <div className="pl-4">
            <Heading level={3}>{item.h}</Heading>
            <Paragraph>{item.p}</Paragraph>
          </div>
        </motion.li>
      ))}
      <li></li>
    </motion.ol>
  );
}
