import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import type { Metadata } from "next";

const siteUrl = "https://iamkamlesh18.github.io/freelanceportfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kamlesh | Developer & Architect",
    template: "%s | Kamlesh",
  },
  description:
    "Portfolio of Kamlesh — Developer, Architect, and Digital Systems Builder.",
  keywords: [
    "Kamlesh",
    "Web Developer",
    "Frontend Architect",
    "Digital Marketing",
    "Salesforce Developer",
  ],
  openGraph: {
    title: "Kamlesh Portfolio",
    description:
      "Modular, scalable systems built with performance and clarity.",
    url: siteUrl,
    siteName: "Kamlesh Portfolio",
    type: "website",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kamlesh",
    url: siteUrl,
    sameAs: [
      "https://github.com/iamkamlesh18",
      "https://linkedin.com/in/iamkamlesh18",
    ],
    jobTitle: "Developer & Architect",
  };

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}