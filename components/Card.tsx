import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm ${
        hover ? "transition-shadow duration-200 hover:shadow-md" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
