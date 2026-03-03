import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Kamlesh Patil | Digital Marketing Specialist",
  description:
    "Freelance Digital Marketing, SEO, Content Marketing, Graphic Design, Video Editing & Website Development services.",
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
        <div className="pt-24">{children}</div>
        <Footer />
      </body>
    </html>
  );
}