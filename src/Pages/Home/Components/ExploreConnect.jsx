import { User, Calendar, Image, Heart, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function ExploreConnect() {
  const links = [
    { name: "About Us", icon: <User size={20} />, to: "/about", type: "internal" },
    { name: "Events", icon: <Calendar size={20} />, to: "/events", type: "internal" },
    { name: "Gallery", icon: <Image size={20} />, to: "/gallery", type: "internal" },
    { name: "Volunteer", icon: <Heart size={20} />, to: "https://forms.gle/your-volunteer-form", type: "external" },
    { name: "Donate", icon: <span className="font-bold text-lg">₹</span>, to: "/contactus#donations", type: "internal" },
    { name: "Contact Us", icon: <Phone size={20} />, to: "/contactus", type: "internal" },
  ];

  return (
    <section className="bg-[#FDEEDC] py-16 px-6 text-center">
      <h2 className="text-xl md:text-2xl font-semibold text-[#7B0000] mb-10">
        Explore & Connect
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {links.map((link, index) => (
          link.type === "internal" ? (
            <Link
              key={index}
              to={link.to}
              className="bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 rounded-lg shadow-md py-6 flex flex-col items-center justify-center text-[#7B0000] font-medium"
            >
              <div className="mb-2">{link.icon}</div>
              <span>{link.name}</span>
            </Link>
          ) : (
            <a
              key={index}
              href={link.to}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 rounded-lg shadow-md py-6 flex flex-col items-center justify-center text-[#7B0000] font-medium"
            >
              <div className="mb-2">{link.icon}</div>
              <span>{link.name}</span>
            </a>
          )
        ))}
      </div>
    </section>
  );
}
