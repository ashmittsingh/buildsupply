import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | BuildSupply - Premium Construction Materials",
  description: "Browse our complete range of construction materials including adhesives, waterproofing solutions, grouts, coatings, and decorative finishes.",
  keywords: "products, construction materials, adhesive, grout, waterproofing, coating",
  openGraph: {
    title: "Products | BuildSupply",
    description: "Browse our complete range of premium construction materials and solutions.",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
