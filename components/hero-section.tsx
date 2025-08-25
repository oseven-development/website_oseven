import React from "react";
import Link from "next/link";
import Section from "./section";
import Image from "next/image";

export function HeroSection({
  title,
  children,
  image,
}: {
  title: string;
  children: React.ReactNode;
  image?: {
    alt: string;
    src: string;
  };
}) {
  const getChildByDisplayName = (displayName: string) => {
    const child = React.Children.map(children, (child) => {
      // you can access displayName property by child.type.displayName
      if (child?.type.displayName === displayName) return child;
      return null;
    });
    return child;
  };
  getChildByDisplayName("ChildOne");
  return (
    <Section className="relative overflow-hidden">
      <Image
        alt={image ? image.alt : "Hero Image"}
        src={image ? image.src : "/hero-image.webp"}
        fill
        className="object-cover -z-20"
        priority
      />
      <div
        className={`absolute inset-0  -z-10  ${image ? "bg-black/70" : ""}`}
      />
      <div className={`relative z-10 grid gap-6 lg:grid-cols-2 lg:gap-12 `}>
        <div className="text-white flex flex-col justify-center space-y-4">
          <h1 className=" font-bold text-3xl  sm:text-4xl md:text-5xl lg:text-6xl/none">
            {title}
          </h1>
          {getChildByDisplayName("LeftItem")}

          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 self-start"
            href={"/kontakt"}
          >
            Kontakt
          </Link>
        </div>
        <div> {getChildByDisplayName("RightItem")}</div>
      </div>
    </Section>
  );
}

const LeftItem = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
LeftItem.displayName = "LeftItem";

const RightItem = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
RightItem.displayName = "RightItem";

export { LeftItem, RightItem };
