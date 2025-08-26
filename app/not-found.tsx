"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Heading, Paragraph } from "@/components/";
import Section from "@/components/section";
import YourContact from "@/components/content/your-contact";

export default function NotFound() {
  return (
    <>
      <Section className="bg-gradient-to-b from-white to-gray-100  flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md mx-auto px-4">
          <div className="space-y-4">
            <Heading level={1} className="text-8xl font-bold text-gray-300">
              404
            </Heading>
            <Heading level={2} className="text-2xl font-semibold text-gray-700">
              Seite nicht gefunden
            </Heading>
            <Paragraph className="text-gray-500">
              Die Seite, die Sie suchen, existiert nicht oder wurde verschoben.
            </Paragraph>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück
            </button>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              <Home className="w-4 h-4 mr-2" />
              Zur Startseite
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            Falls Sie glauben, dass dies ein Fehler ist, kontaktieren Sie uns
            bitte.
          </div>
        </div>
      </Section>
      <Section className="text-white">
        <YourContact />
      </Section>
    </>
  );
}
