"use client";
import { PropsWithChildren, ReactNode } from "react";
import { Heading, Paragraph } from "../typography/Typography";

// Main container component
export default function FAQs({ children }: PropsWithChildren<{}>) {
  return (
    <div className="space-y-4">
      <div className="text-center mb-16">
        <Heading level={1}>Häufig gestellte Fragen</Heading>
        <Paragraph>
          Hier finden Sie die Antworten auf häufig gestellte Fragen.
        </Paragraph>
      </div>
      {children}
    </div>
  );
}

// Individual FAQ item component using <details> and <summary> for a native HTML/CSS accordion
interface FAQItemProps {
  title: ReactNode;
}

export function FAQItem({ title, children }: PropsWithChildren<FAQItemProps>) {
  return (
    <details className="group border-b border-gray-200 pb-4">
      <summary className="flex cursor-pointer list-none items-center justify-between text-left text-lg font-semibold">
        {title}
        <div className="transition-transform duration-200 group-open:rotate-180">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </summary>
      <div className="mt-2">{children}</div>
    </details>
  );
}
