import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Articles | BuildSupply",
  description: "Read expert insights, installation guides, and industry tips from BuildSupply. Learn best practices for construction materials.",
  keywords: "blog, articles, guides, tips, construction, installation",
  openGraph: {
    title: "Blog & Articles | BuildSupply",
    description: "Expert insights and industry tips for construction professionals.",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
