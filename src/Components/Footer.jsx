import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#7B0000" }} className="text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Left Section - Organization Name */}
          <div>
            <h2 className="text-2xl font-bold tracking-wider leading-snug">
              BROTHERS RAMLEELA <br />
              COMMITTEE
            </h2>
          </div>

          {/* Middle Section - Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Useful Links</h3>
            <nav className="space-y-4">
              <a
                href="/"
                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 justify-center md:justify-start"
              >
                🏠 Home
              </a>
              <a
                href="/about"
                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 justify-center md:justify-start"
              >
                👥 About Us
              </a>
              <a
                href="/gallery"
                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 justify-center md:justify-start"
              >
                🖼️ Gallery & Participation
              </a>
              <a
                href="/contactus"
                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 justify-center md:justify-start"
              >
                💸 Donations & Contact
              </a>
            </nav>
          </div>

          {/* Right Section - Contact Info */}
          <div className="md:text-right space-y-4">
            <h3 className="text-xl font-semibold mb-4">Brothers Ramleela Committee</h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center gap-2 justify-center md:justify-end">
                📞{" "}
                <a href="tel:+919876543210" className="hover:text-white">
                  +91 9876543210
                </a>
              </p>
              <p className="flex items-center gap-2 justify-center md:justify-end">
                📞{" "}
                <a href="tel:+919910972300" className="hover:text-white">
                  +91 9910972300
                </a>
              </p>
              <p className="flex gap-2 justify-center md:justify-end leading-relaxed text-sm md:text-base">
                <span>
                  📍 Brothers Ramlila Ground, <br />
                  Bhai Parmanand Colony, Mukherjee Nagar, <br />
                  Delhi, 110009
                </span>
              </p>
              <p className="flex items-center gap-2 justify-center md:justify-end">
                ✉️{" "}
                <a
                  href="mailto:brothersramleela@gmail.com"
                  className="hover:text-white"
                >
                  brothersramleela@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-10 flex justify-center gap-6">
        <a
          href="https://www.facebook.com/share/1HskD5acKL/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white text-2xl"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/brothersramleelacommittee?igsh=eHpzZ3MzdjVreDh3&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://youtube.com/@brothersramleelacommittee?si=7XiH9BS7nJUWwRMw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white text-2xl"
        >
          <FaYoutube />
        </a>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-red-800 mt-12 pt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-3">
            <p className="text-gray-400 text-sm">
              Brothers Ramleela Committee © 2025 All Rights Reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-center">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-500">
                  Designed & Developed by{" "}
                  <span className="text-blue-400 font-medium">THREESIXTYSPACE</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <span className="text-gray-500">
                  Managed by{" "}
                  <span className="text-blue-400 font-medium">AUM CONSULTANTS</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
