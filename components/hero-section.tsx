import Link from "next/link";
import Section from "./section";
import Image from "next/image";

export function HeroSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Section className="relative overflow-hidden">
      <Image
        alt="Hero background"
        src="/hero-image.webp" // Replace with your image path
        fill
        className="object-cover -z-20"
        priority
      />
      <div className="absolute inset-0  -z-10" />
      <div className={`relative z-10 grid gap-6 lg:grid-cols-2 lg:gap-12 `}>
        <div className="text-white flex flex-col justify-center space-y-4">
          <h1 className=" font-bold text-3xl  sm:text-4xl md:text-5xl lg:text-6xl/none">
            {title}
          </h1>

          {children}
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 self-start"
            href={"/kontakt"}
          >
            Kontakt
          </Link>
        </div>
      </div>
    </Section>
  );
}
