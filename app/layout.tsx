import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import SocialBar from "@/components/SocialBar/SocialBar";

export const metadata = {
  title: "Kamlesh | Portfolio",
  description: "Developer & Architect Portfolio",
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
        <SocialBar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}