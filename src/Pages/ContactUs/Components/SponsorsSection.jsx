import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SponsorsSection() {
  const sponsors = [
    {
      id: 1,
      name: "Sponsor 1",
      logo: "https://via.placeholder.com/250x150?text=Sponsor+1",
      about: "Leading company in stage equipment and lighting solutions.",
    },
    {
      id: 2,
      name: "Sponsor 2",
      logo: "https://via.placeholder.com/250x150?text=Sponsor+2",
      about: "Supporting cultural events and traditional art forms for decades.",
    },
    {
      id: 3,
      name: "Sponsor 3",
      logo: "https://via.placeholder.com/250x150?text=Sponsor+3",
      about: "Dedicated to community service and social welfare initiatives.",
    },
    {
      id: 4,
      name: "Sponsor 4",
      logo: "https://via.placeholder.com/250x150?text=Sponsor+4",
      about: "A proud supporter of Brothers Ramleela Committee for many years.",
    },
  ];

  return (
    <section
      id="sponsors"
      className="bg-[#fff6e9] py-12 px-6 md:px-12 lg:px-20 text-center relative overflow-hidden"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-3">
        Our Sponsors
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-10">
        We thank our generous sponsors for supporting Brothers Ramleela Committee
        and helping us keep this tradition alive.
      </p>

      {/* Mobile → Slider */}
      <div className="block md:hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {sponsors.map((sponsor) => (
            <SwiperSlide key={sponsor.id}>
              <div className="bg-white shadow-md rounded-xl flex overflow-hidden min-h-[200px] border border-black hover:shadow-lg hover:scale-[1.02] transition duration-300">
                {/* Logo */}
                <div className="w-1/2 flex items-center justify-center bg-gray-50">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-24 object-contain"
                  />
                </div>
                {/* About */}
                <div className="w-1/2 flex flex-col justify-center p-5 text-left">
                  <h3 className="text-lg font-bold text-red-800">
                    {sponsor.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{sponsor.about}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop → Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="bg-white shadow-md rounded-xl flex overflow-hidden min-h-[200px] border border-black hover:shadow-lg hover:scale-[1.02] transition duration-300"
          >
            {/* Logo */}
            <div className="w-1/2 flex items-center justify-center bg-gray-50">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-24 object-contain"
              />
            </div>
            {/* About */}
            <div className="w-1/2 flex flex-col justify-center p-5 text-left">
              <h3 className="text-lg font-bold text-red-800">{sponsor.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{sponsor.about}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
