import styles from "./Services.module.css";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Kamlesh Patil – Digital Marketing & Creative Specialist
        </h1>

        <p className={styles.subtitle}>
          Helping brands grow through strategy, content, creativity, and technology.
        </p>

        <div className={styles.grid}>
          <ServiceCard
            icon="📈"
            title="Digital Marketing"
            items={[
              "SEO (Search Engine Optimization)",
              "Social Media Marketing (SMM)",
              "Paid Advertising (Meta & Google Ads)",
              "Account Handling & Growth Strategy",
            ]}
          />

          <ServiceCard
            icon="✍️"
            title="Content Marketing"
            items={[
              "Content Strategy",
              "Blog Writing",
              "Website Copywriting",
              "Social Media Captions",
              "Ad Copywriting",
              "SEO-Optimized Articles",
            ]}
          />

          <ServiceCard
            icon="🎨"
            title="Graphic Design"
            items={[
              "Logo Design",
              "Pamphlet / Flyer Design",
              "Social Media Creatives",
              "Poster & Banner Design",
              "Business Cards & Branding Materials",
            ]}
          />

          <ServiceCard
            icon="🎬"
            title="Video Editing"
            items={[
              "Reels Editing",
              "Promotional Videos",
              "Ad Video Editing",
              "YouTube Video Editing",
            ]}
          />

          <ServiceCard
            icon="💻"
            title="Website Development"
            items={[
              "Business Websites",
              "Landing Pages",
              "Portfolio Websites",
              "E-Commerce Websites",
            ]}
          />
        </div>

        <div className={styles.cta}>
          <h2>Let’s Build Something Powerful Together.</h2>
          <Link href="/contact" className={styles.button}>
            Get In Touch
          </Link>
        </div>

        
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  items,
}: {
  icon: string;
  title: string;
  items: string[];
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.icon}>{icon}</span>
        <h3>{title}</h3>
      </div>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}