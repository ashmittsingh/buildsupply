import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Documentation | BuildSupply",
  description: "Access comprehensive installation guides, technical datasheets, training materials, and industry standards for BuildSupply products.",
  keywords: "resources, documentation, guides, technical specs, training",
  openGraph: {
    title: "Resources & Documentation | BuildSupply",
    description: "Comprehensive guides, technical specs, and training materials for construction professionals.",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
