import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#7B0000] shadow z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 cursor-pointer">
          <img
            src="/assets/logo.jpg"
            alt="Brothers Ramleela Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="leading-tight">
            <h1 className="text-white text-lg font-semibold">
              Brothers Ramleela
            </h1>
            <p className="text-sm text-yellow-300">Committee</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
          <li><Link to="/gallery" className="hover:text-yellow-400">Gallery & Participation</Link></li>
          <li><a href="/contactus#contact" className="hover:text-yellow-400">Contact Us</a></li>
        </ul>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="/contactus"
            className="flex items-center space-x-2 bg-yellow-500 text-[#7B0000] font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition"
          >
            <span>₹ Donate</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1"
          aria-label="Toggle Menu"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#7B0000] text-white px-6 py-4 space-y-4">
          <Link to="/about" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/gallery" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Gallery & Participation</Link>
          <a href="/contactus#contact" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact Us</a>
          <a
            href="/contactus"
            className="inline-flex items-center space-x-2 bg-yellow-500 text-[#7B0000] font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            <span>₹ Donate</span>
          </a>
        </div>
      )}
    </header>
  );
}
