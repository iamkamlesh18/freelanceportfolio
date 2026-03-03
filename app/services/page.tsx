export default function Services() {
  return (
    <section className="section">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12 text-center">Services</h1>

        <div className="grid md:grid-cols-2 gap-12 text-gray-400 text-lg">
          <div>
            <h2 className="text-2xl font-semibold text-[#C6A75E] mb-4">
              Digital Marketing
            </h2>
            <ul className="space-y-2">
              <li>SEO</li>
              <li>Social Media Marketing</li>
              <li>Paid Advertising</li>
              <li>Account Handling</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#C6A75E] mb-4">
              Content Marketing
            </h2>
            <ul className="space-y-2">
              <li>Content Strategy</li>
              <li>Blog Writing</li>
              <li>Website Copy</li>
              <li>Ad Copywriting</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#C6A75E] mb-4">
              Graphic Design
            </h2>
            <ul className="space-y-2">
              <li>Logo Design</li>
              <li>Pamphlet & Flyers</li>
              <li>Social Media Creatives</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#C6A75E] mb-4">
              Website Development
            </h2>
            <ul className="space-y-2">
              <li>Business Websites</li>
              <li>Landing Pages</li>
              <li>E-Commerce Websites</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}