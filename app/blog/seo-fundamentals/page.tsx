import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Fundamentals That Still Work",
  description:
    "Technical SEO principles that consistently rank.",
};

export default function SEOFundamentals() {
  return (
    <article className="section">
      <div style={{ maxWidth: "750px", margin: "0 auto" }}>
        <h1>SEO Fundamentals That Still Work</h1>

        <p style={{ marginTop: "20px" }}>
          SEO is not dead. It evolved.
        </p>

        <h2 style={{ marginTop: "40px" }}>
          1. Technical Structure
        </h2>
        <p>
          Clean HTML structure and semantic layout improve ranking.
        </p>

        <h2 style={{ marginTop: "30px" }}>
          2. Core Web Vitals
        </h2>
        <p>
          Speed and UX metrics directly affect search position.
        </p>

        <h2 style={{ marginTop: "30px" }}>
          3. Authority Building
        </h2>
        <p>
          Backlinks still matter — but relevance matters more.
        </p>
      </div>
    </article>
  );
}