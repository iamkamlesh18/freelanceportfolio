import Link from "next/link";

export default function Home() {
  return (
    <main className="section text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-bold leading-tight mb-6">
          Digital Growth. Creative Strategy. Real Results.
        </h1>

        <p className="text-xl text-gray-400 mb-10">
          I help businesses and creators grow through digital marketing,
          content strategy, graphic design, video editing, and high-performing
          websites.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#C6A75E] text-black rounded-xl font-semibold hover:scale-105 transition"
          >
            Work With Me
          </Link>

          <Link
            href="/services"
            className="px-8 py-4 border border-gray-600 rounded-xl hover:bg-[#26282C] transition"
          >
            View Services
          </Link>
        </div>
      </div>
    </main>
  );
}