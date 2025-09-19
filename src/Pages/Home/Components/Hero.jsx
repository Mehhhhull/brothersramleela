import { useEffect, useState } from "react";
import { FaYoutube, FaUsers, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Hero() {
  const images = [
    "/assets/ramleela1.jpeg",
    "/assets/ramleela2.jpeg",
    "/assets/ramleela3.jpeg",
    "/assets/ramleela4.jpeg",
    "/assets/ramleela5.jpeg",
    "/assets/ramleela6.jpeg"
  ];

  const [current, setCurrent] = useState(0);

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Ramleela ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#7B0000]/80 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-yellow-400 drop-shadow-md">
          Brothers <br /> Ramleela <br /> Committee
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Celebrating 46 Years of Brothers Ramleela in Delhi
          <br />
          <span className="text-yellow-400 drop-shadow-md font-bold">
            Tradition & Devotion
          </span>
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#live"
            className="flex items-center justify-center space-x-2 bg-yellow-500 text-[#7B0000] px-6 py-3 rounded font-semibold hover:bg-yellow-400 transition"
          >
            <FaYoutube />
            <span>Watch Live on YouTube</span>
          </a>
          <a
            href="#volunteer"
            className="flex items-center justify-center space-x-2 bg-white/10 border border-white px-6 py-3 rounded font-semibold hover:bg-white/20 transition"
          >
            <FaUsers />
            <span>Join as Volunteer</span>
          </a>
        </div>

        {/* Bottom Info */}
        <div className="mt-6 flex flex-col items-center space-y-2">
          <p className="text-sm text-gray-300">
            Since 1980 • Bhai Parmanand Colony
          </p>
        </div>

      </div>
    </section>
  );
}
