import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const headingStyles = {
  1: "text-3xl lg:text-5xl font-bold tracking-tight mb-4 mt-8",
  2: "text-2xl lg:text-3xl font-semibold tracking-tight mb-3 mt-6",
  3: "text-1xl lg:text-2xl font-semibold tracking-tight mb-2 mt-4",
  4: "text-xl lg:text-xl font-semibold tracking-tight mb-2 mt-4",
  5: "text-lg lg:text-lg font-semibold tracking-tight mb-2 mt-4",
  6: "text-base lg:text-base font-semibold tracking-tight mb-2 mt-4",
};

export const Heading: React.FC<HeadingProps> = ({
  children,
  level,
  className,
}) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  const defaultStyle = headingStyles[level] || "";
  return <Tag className={`${defaultStyle} ${className}`}>{children}</Tag>;
};
