import styles from "./About.module.css";
import { aboutData } from "./data";
import type { Metadata } from "next";

const siteUrl =
  "https://iamkamlesh18.github.io/freelanceportfolio";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Kamlesh — Developer, Architect, and Digital Systems Builder.",
  alternates: {
    canonical: `${siteUrl}/about/`,
  },
  openGraph: {
    title: "About Kamlesh",
    description:
      "Developer & Architect building modular scalable systems.",
    url: `${siteUrl}/about/`,
    type: "article",
  },
};

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Kamlesh",
    url: `${siteUrl}/about/`,
    mainEntity: {
      "@type": "Person",
      name: "Kamlesh",
      jobTitle: "Developer & Architect",
      email: "patilkamlesh1811@gmail.com",
      telephone: "+91-7770000347",
      sameAs: [
        "https://github.com/iamkamlesh18",
        "https://linkedin.com/in/iamkamlesh18",
        "https://iamkamlesh18.github.io/iamkamlesh18/",
        "https://iamkamlesh18.github.io/my-portfolio/",
      ],
    },
  };

  return (
    <>
      <main className="section">
        <div className={styles.card}>
          <h1>{aboutData.heading}</h1>
          <p>{aboutData.content}</p>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </>
  );
}