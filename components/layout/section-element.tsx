import type { HTMLAttributes, ReactNode } from "react";
import { maxWidthCenter, paddingsGlobal, sectionMargins } from "@/static";

type SectionElementProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  be?: "dark" | "light";
};

const variantClasses: Record<NonNullable<SectionElementProps["be"]>, string> = {
  dark: "bg-primary text-white",
  light: "bg-gray-100 text-primary",
};

const SectionElement = ({
  be = "dark",
  children,
  className,
  ...rest
}: SectionElementProps) => {
  const sectionClassName = [
    "w-full",
    paddingsGlobal,
    sectionMargins,
    variantClasses[be],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClassName} {...rest}>
      <div className={maxWidthCenter}>{children}</div>
    </section>
  );
};

export default SectionElement;
