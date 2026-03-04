import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import type { Metadata } from "next";

const siteUrl = "https://iamkamlesh18.github.io/freelanceportfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Kamlesh | Freelancer",
    template: "%s | Kamlesh",
  },

  description:
    "Portfolio of Kamlesh — A Digital Studio for Marketing, Branding, Graphics & Website Development.",

  icons: {
    icon: "/freelanceportfolio/favicon.svg",
    shortcut: "/freelanceportfolio/favicon.svg",
    apple: "/freelanceportfolio/favicon.svg",
  },

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
  return (
    <html lang="en">
      <body className="app">
        <Navbar />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}