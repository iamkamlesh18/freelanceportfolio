export default function Footer() {
  return (
    <footer className="bg-[#26282C] py-10 mt-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
        © {new Date().getFullYear()} Kamlesh Patil. All rights reserved.
      </div>
    </footer>
  );
}