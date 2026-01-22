import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | BuildSupply",
  description: "Get in touch with BuildSupply. Contact us for product inquiries, technical support, quotes, or general information.",
  keywords: "contact, support, inquiry, phone, email",
  openGraph: {
    title: "Contact Us | BuildSupply",
    description: "Contact BuildSupply for product inquiries and support.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
