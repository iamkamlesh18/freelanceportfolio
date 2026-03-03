"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 bg-[#1E1F22]/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#C6A75E]">
          Kamlesh
        </Link>

        <div className="flex gap-8 text-gray-300">
          <Link href="/about" className="hover:text-[#C6A75E] transition">
            About
          </Link>
          <Link href="/services" className="hover:text-[#C6A75E] transition">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-[#C6A75E] transition">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-[#C6A75E] transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}