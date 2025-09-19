import React from "react";

export function GalleryImg() {
  return (
    <section id="gallery" className="bg-[#fdf0e3] py-12">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#7d0a0a] mb-10">
        Gallery
      </h2>

      {/* Responsive Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Images */}
          <div><img src="/assets/ramleela1.jpeg" alt="Ramleela 1" className="w-full h-auto object-cover" /></div>
          <div><img src="/assets/ramleela2.jpeg" alt="Ramleela 2" className="w-full h-auto object-cover" /></div>
          <div><img src="/assets/ramleela3.jpeg" alt="Ramleela 3" className="w-full h-auto object-cover" /></div>
          <div><img src="/assets/ramleela4.jpeg" alt="Ramleela 4" className="w-full h-auto object-cover" /></div>
          <div><img src="/assets/ramleela5.jpeg" alt="Ramleela 5" className="w-full h-auto object-cover" /></div>
          <div><img src="/assets/ramleela6.jpeg" alt="Ramleela 6" className="w-full h-auto object-cover" /></div>

         

          {/* More Images */}
          <div><img src="/assets/ramleela7.jpg" alt="Ramleela 7" className="w-full h-auto object-cover" /></div>
          <div><img src="/assets/ramleela8.jpg" alt="Ramleela 8" className="w-full h-auto object-cover" /></div>
          <div><img src="/assets/ramleela9.jpg" alt="Ramleela 9" className="w-full h-auto object-cover" /></div>
          <div><img src="/assets/ramleela10.jpg" alt="Ramleela 10" className="w-full h-auto object-cover" /></div>
          <div><img src="/assets/ramleela11.JPG" alt="Ramleela 11" className="w-full h-auto object-cover" /></div>
          <div><img src="/assets/ramleela12.JPG" alt="Ramleela 12" className="w-full h-auto object-cover" /></div>
        </div>

        {/* Registration CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-[#7d0a0a] mb-6">
            Be the part of next gallery image
          </h3>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfB8QdElE7JAcRIY85h1DRmNQKgCYdfd3POgDsLERcr6QnnBQ/viewform?usp=sharing&ouid=112525111727756210413" // replace with your form link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#7d0a0a] text-white font-medium px-8 py-3 rounded-lg shadow-md hover:bg-[#a31212] hover:scale-105 transition-transform duration-200"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
