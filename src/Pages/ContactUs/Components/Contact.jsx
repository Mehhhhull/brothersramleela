// ContactUs.jsx
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      className="py-16 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden scroll-mt-24 md:scroll-mt-28"
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-red-800 mb-10">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="shadow-lg rounded-2xl border border-orange-200 bg-white w-full">
            <div className="p-6 sm:p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-orange-700 mb-4 text-center sm:text-left">
                Get in Touch
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Phone className="text-orange-600 w-6 h-6" />
                  <span className="text-base sm:text-lg">
                    <a href="tel:+919876543210" className="hover:text-red-700">
                      +91 9876543210
                    </a>
                    <br />
                    <a href="tel:+919910972300" className="hover:text-red-700">
                      +91 9910972300
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <Mail className="text-orange-600 w-6 h-6" />
                  <span className="text-base sm:text-lg">
                    <a
                      href="mailto:brothersramleela@gmail.com"
                      className="hover:text-red-700"
                    >
                      brothersramleela@gmail.com
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <MapPin className="text-orange-600 w-7 h-7" />
                  <span className="text-base sm:text-lg">
                    Brothers Ramlila Ground <br />
                    Bhai Parmanand Colony, Mukherjee Nagar, <br />
                    Delhi, 110009
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="shadow-lg rounded-2xl border border-orange-200 overflow-hidden bg-white w-full">
            <div className="w-full h-64 sm:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.273684018455!2d77.20957454999999!3d28.71136585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfde3ad65a467%3A0x5d0a1cb35d86a771!2sBrothers%20Ramlila%20Ground%2C%20Bhai%20Parmanand%20Colony%2C%20Mukherjee%20Nagar%2C%20Delhi%2C%20110033!5e0!3m2!1sen!2sin!4v1757772724834!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-12">
          <a
            href="https://www.facebook.com/share/1HskD5acKL/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <FaFacebook className="w-10 h-10 text-blue-600" />
          </a>
          <a
            href="https://www.instagram.com/brothersramleelacommittee?igsh=eHpzZ3MzdjVreDh3&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <FaInstagram className="w-10 h-10 text-pink-600" />
          </a>
          <a
            href="https://youtube.com/@brothersramleelacommittee?si=7XiH9BS7nJUWwRMw"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <FaYoutube className="w-10 h-10 text-red-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
