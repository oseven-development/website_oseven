import React from "react";

interface ListProps {
  children: React.ReactNode;
  className?: string;
  ordered?: boolean;
}

export const List: React.FC<ListProps> = ({
  children,
  className,
  ordered = false,
}) => {
  const Tag = ordered ? "ol" : "ul";
  return <Tag className={`mb-4 ${className}`}>{children}</Tag>;
};

interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

export const ListItem: React.FC<ListItemProps> = ({ children, className }) => {
  return <li className={`mb-2 ${className}`}>{children}</li>;
};
