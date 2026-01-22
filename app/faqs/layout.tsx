import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | BuildSupply",
  description: "Frequently asked questions about BuildSupply products, installation, coverage rates, and technical specifications.",
  keywords: "FAQ, questions, answers, help, support",
  openGraph: {
    title: "FAQs | BuildSupply",
    description: "Find answers to common questions about BuildSupply products and services.",
  },
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
