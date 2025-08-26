import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "lg" | "base";
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className,
  size = "base",
}) => {
  return (
    <p className={`text-${size} mb-4 leading-relaxed ${className}`}>
      {children}
    </p>
  );
};
