import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Material Coverage Calculator | BuildSupply",
  description: "Calculate the exact quantity of construction materials needed for your project. Advanced formula-based calculator for adhesives, waterproofing, coatings and more.",
  keywords: "calculator, material coverage, coverage rate, quantity calculator",
  openGraph: {
    title: "Material Coverage Calculator | BuildSupply",
    description: "Calculate exact material quantities needed for your construction project.",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
