import Link from "next/link";

export default function CallToAction() {
  return (
    <Link
      className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      href={"/kontakt"}
    >
      Jetzt Vertrieb kontaktieren
    </Link>
  );
}
