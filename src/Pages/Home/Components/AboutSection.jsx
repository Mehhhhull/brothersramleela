export default function AboutSection() {
  return (
    <section className="bg-[#FDEEDC] py-16 px-6 text-center relative overflow-hidden">
      {/* Mandala Confetti Background behind all content */}
      <div className="absolute inset-0 w-full h-full bg-[url('/assets/mandala.png')] bg-repeat opacity-10 pointer-events-none z-0"></div>
  <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#7B0000] mb-6 font-serif">
          Welcome to Our Sacred Journey
        </h2>

        {/* Paragraph */}
  <p className="text-gray-700 text-lg leading-relaxed text-left sm:text-justify">
          Welcome to the <span className="font-semibold">46th year of Brothers Ramleela Committee</span>, proudly held at the <span className="font-semibold">Brothers
          Ramleela Ground, Bhai Parmanand Colony, Delhi.</span> Since 1979, our committee has been
          devoted to bringing the sacred story of <span className="font-semibold">Lord Ram and the Ramayan</span> alive on stage with
          grandeur, devotion, and community spirit.
          This year, <span className="font-semibold">Ramleela 2025</span> will run from <span className="font-semibold">22nd September to 2nd October,</span> featuring majestic
          stage sets, devotional music, and soul-stirring performances. Thousands of devotees, families,
          and visitors gather with us each year to celebrate the eternal victory of good over evil. <br/>
          👉 Join us this year in our <span className="font-semibold">46th celebration and be part of Delhi’s most cherished cultural</span>
          heritage.
        </p>
      </div>
    </section>
  );
}
