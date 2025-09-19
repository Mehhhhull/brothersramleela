export default function SponsorsSection() {
  const sponsors = [
    {
      id: 1,
      name: "Sponsor 1",
      logo: "https://via.placeholder.com/400x200?text=Sponsor+1",
    },
    {
      id: 2,
      name: "Sponsor 2",
      logo: "https://via.placeholder.com/400x200?text=Sponsor+2",
    },
    {
      id: 3,
      name: "Sponsor 3",
      logo: "https://via.placeholder.com/400x200?text=Sponsor+3",
    },
    {
      id: 4,
      name: "Sponsor 4",
      logo: "https://via.placeholder.com/400x200?text=Sponsor+4",
    },
  ];

  return (
    <section
      id="sponsors"
      className="bg-[#fff6e9] pt-4 pb-12 px-6 md:px-12 lg:px-20 text-center relative"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-8">
        Our Sponsors
      </h2>

      {/* Grid - Always 2x2 */}
      <div className="grid grid-cols-2 gap-10 max-w-5xl mx-auto">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="flex flex-col items-center w-full">
            {/* Wide Box with Image */}
            <div className="w-full h-36 bg-white border border-black rounded-xl shadow-md flex items-center justify-center hover:shadow-lg transition">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-28 max-w-[80%] object-contain"
              />
            </div>
            {/* Name outside box */}
            <h3 className="mt-3 text-lg font-semibold text-red-800">
              {sponsor.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
