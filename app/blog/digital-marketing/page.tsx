import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Strategy in 2026",
  description:
    "Modern performance-driven digital marketing strategies explained.",
};

export default function DigitalMarketing() {
  return (
    <article className="section">
      <div style={{ maxWidth: "750px", margin: "0 auto" }}>
        <h1>Digital Marketing Strategy in 2026</h1>

        <p style={{ marginTop: "20px" }}>
          The modern digital landscape is performance-driven,
          automation-first, and data-backed.
        </p>

        <h2 style={{ marginTop: "40px" }}>
          1. Performance Marketing First
        </h2>
        <p>
          Campaigns must be measurable. Every click should have
          attribution clarity.
        </p>

        <h2 style={{ marginTop: "30px" }}>
          2. SEO + Content Architecture
        </h2>
        <p>
          Structured content with technical SEO wins long term.
        </p>

        <h2 style={{ marginTop: "30px" }}>
          3. Automation Pipelines
        </h2>
        <p>
          Email, CRM, retargeting — automated flows outperform
          manual marketing.
        </p>
      </div>
    </article>
  );
}