import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://iamkamlesh18.github.io/freelanceportfolio"),
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
  authors: [{ name: "Kamlesh" }],
  openGraph: {
    title: "Kamlesh Portfolio",
    description:
      "Modular, scalable systems built with performance and clarity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}