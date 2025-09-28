export default function SponsorsSection() {
  const sponsors = [
    { id: 1, name: "Sponsor 1", logo: "assets/sponsor1.jpg" },
    { id: 2, name: "Sponsor 2", logo: "assets/sponsor2.jpg" },
    { id: 3, name: "Sponsor 3", logo: "assets/sponsor3.jpg" },
    { id: 4, name: "Sponsor 4", logo: "assets/sponsor4.jpg" },
  ];

  return (
    <section
      id="sponsors"
      className="bg-[#fff6e9] pt-12 pb-16 px-6 md:px-12 lg:px-20 text-center relative"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-16">
        Our Sponsors
      </h2>

      {/* Grid - 1 column on mobile, 2 columns on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="flex items-center justify-center w-full"
          >
            {/* Large image with subtle hover effect */}
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
