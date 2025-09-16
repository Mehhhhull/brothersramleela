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
          
          {/* Image 1 */}
          <div>
            <img
              src="/assets/ramleela1.jpeg"
              alt="Ramleela 1"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Image 2 */}
          <div>
            <img
              src="/assets/ramleela2.jpeg"
              alt="Ramleela 2"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Image 3 */}
          <div>
            <img
              src="/assets/ramleela3.jpeg"
              alt="Ramleela 3"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Image 4 */}
          <div>
            <img
              src="/assets/ramleela4.jpeg"
              alt="Ramleela 4"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Image 5 */}
          <div>
            <img
              src="/assets/ramleela5.jpeg"
              alt="Ramleela 5"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Image 6 */}
          <div>
            <img
              src="/assets/ramleela6.jpeg"
              alt="Ramleela 6"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Image 7 */}
          <div>
            <img
              src="/assets/ramleela2.jpeg"
              alt="Ramleela 7"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Image 8 */}
          <div>
            <img
              src="/assets/ramleela2.jpeg"
              alt="Ramleela 8"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Image 9 */}
          <div>
            <img
              src="/assets/ramleela2.jpeg"
              alt="Ramleela 9"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Image 10 */}
          <div>
            <img
              src="/assets/ramleela2.jpeg"
              alt="Ramleela 10"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Image 11 */}
          <div>
            <img
              src="/assets/ramleela2.jpeg"
              alt="Ramleela 11"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Image 12 */}
          <div>
            <img
              src="/assets/ramleela2.jpeg"
              alt="Ramleela 12"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
