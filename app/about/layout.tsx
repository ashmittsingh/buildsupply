import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | BuildSupply",
  description: "Learn about BuildSupply's mission, values, and commitment to providing premium construction materials and solutions.",
  keywords: "about, company, mission, values, team",
  openGraph: {
    title: "About Us | BuildSupply",
    description: "Learn about BuildSupply's mission and commitment to excellence.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
