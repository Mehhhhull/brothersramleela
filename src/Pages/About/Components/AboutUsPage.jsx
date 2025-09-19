import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Clock, Star } from 'lucide-react';

const AboutUsPage = () => {
  const [currentMember, setCurrentMember] = useState(0);

  const committeeMembers = [
    {
      name: "Mr. Arjun Kumar",
      role: "President",
      subtitle: "The Backbone of Brothers Ramleela Committee",
      description: "A visionary leader whose dedication and passion have elevated the Brothers Ramleela Committee to new heights over the past decade.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Mr. Subhash Goyal",
      role: "Secretary",
      subtitle: "The Organizational Force",
      description: "With meticulous planning and unwavering commitment, he ensures every aspect of our Ramleela runs smoothly year after year.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Mrs. Sunita Sharma",
      role: "Treasurer",
      subtitle: "The Financial Guardian",
      description: "Managing resources with transparency and wisdom, ensuring every rupee serves the divine purpose of our cultural celebration.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Mr. Rohit Verma",
      role: "Event Lead",
      subtitle: "The Creative Director",
      description: "Bringing artistic vision to life, coordinating performances and ensuring each scene captures the essence of the Ramayana.",
      image: "/api/placeholder/300/300"
    }
  ];

  const scheduleEvents = [
  { date: "21 Sep", event: "Bhaajan Sandhya (Shree Rahul Chaudhary Ji)" },
  { date: "22 Sep", event: "Mata Ki Chawki" },
  { date: "23 Sep", event: "Ram Janam - Sharavan Kumar Vadh" },
  { date: "24 Sep", event: "Tarkha Vadh- Sita Sayambar" },
  { date: "25 Sep", event: "Ram Vanvaas" },
  { date: "26 Sep", event: "Dashrath death-Bharat Milap" },
  { date: "27 Sep", event: "Panchvati /Ravan Entry" },
  { date: "28 Sep", event: "Vali Vadh" },
  { date: "29 Sep", event: "Lanka Dehan/Kumbhkaran Death" },
  { date: "30 Sep", event: "Laxman Moorcha" },
  { date: "1 Oct", event: "Megnath Ravaan Vadh" },
  { date: "2 Oct", event: "Dusshara Fair" }
  ];

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % committeeMembers.length);
  };

  const prevMember = () => {
    setCurrentMember((prev) => (prev - 1 + committeeMembers.length) % committeeMembers.length);
  };

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#F5E6D3' }}>
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12">

        {/* About Us Section */}
        <section className="mb-16">
          {/* Header */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-left" style={{ color: '#8B2635' }}>
            <span className="block whitespace-nowrap">46 Years of Devotion,</span>
            <span className="block whitespace-nowrap">Tradition & Culture</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 w-full order-2 lg:order-1">
              <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                The <span className="font-semibold text-black-700">Brothers Ramleela Committee</span>, registered under the <span className="font-semibold text-black-700">Societies Registration Act, 1860,</span>
                has been staging one of the most loved Ramleelas in Delhi for over four decades.
                Founded in 1979, we have proudly kept alive the cultural and spiritual tradition of <span className="font-semibold text-black-700">Ramayan
                katha </span>for the residents of <span className="font-semibold text-black-700">Bhai Parmanand Colony and across Delhi.</span>
                Every year, our Ramleela attracts thousands of devotees, school children, senior citizens, and
                visitors from all walks of life. Beyond being a theatrical performance, it is a community festival
                that unites people in devotion, culture, and service. Join Us for 10 nights of Shri Ram-leela.
              </p>
            </div>
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 order-1 lg:order-2">
              <img
                src="/assets/ramleela2.jpeg"
                alt="Ramleela Performance"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Cultural Significance Section */}
        <section className="mb-16">
          {/* Header */}
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center lg:text-left" style={{ color: '#8B2635' }}>
            <span className="block text-left break-words text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              The Origins of <br className="block sm:hidden"/>Brothers Ramleela
            </span>
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 w-full order-2 lg:order-2">
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Brothers Ramleela, a grand celebration of culture and tradition, has its roots deeply embedded in India's spiritual and theatrical history. It began as a tribute to the epic Ramayana, focusing on the story of Lord Rama's twin sons, Luv and Kush. The origins of this event date back to ancient times when Ramleela performances first began to take shape in India. The tradition of enacting the Ramayana started as a means to bring the story to the people, transforming it from written scripture into a vivid, theatrical experience. Initially, Ramleela was performed in temples and small community gatherings, but over time, it evolved into a grand festival celebrated by millions.
              </p>
            </div>
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 order-1 lg:order-1">
              <img
                src="/assets/ramleela1.jpeg"
                alt="Ramleela Origins"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Committee Members Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 px-4" style={{ color: '#8B2635' }}>
            Meet Our<br/>Committee Members
          </h2>

          <div className="relative max-w-4xl mx-auto px-2 sm:px-4">
            <div className="flex items-center justify-center gap-2 md:gap-8">
              <button
                onClick={prevMember}
                className="p-1 md:p-2 rounded-full text-white hover:opacity-80 transition-opacity z-10 flex-shrink-0"
                style={{ backgroundColor: '#8B2635' }}
                aria-label="Previous member"
              >
                <ChevronLeft size={20} className="md:hidden" />
                <ChevronLeft size={24} className="hidden md:block" />
              </button>

              <div className="flex-1 bg-white rounded-lg shadow-lg p-2 sm:p-4 md:p-8 min-w-[220px]">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
                  <div className="w-full md:w-2/5 flex justify-center mb-4 md:mb-0">
                    <img
                      src={committeeMembers[currentMember].image}
                      alt={committeeMembers[currentMember].name}
                      className="w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-xl object-cover mx-auto shadow-2xl"
                    />
                  </div>
                  <div className="w-full md:w-3/5 text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-800">
                      <span className="block whitespace-nowrap text-left">{committeeMembers[currentMember].name}</span>
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg mb-2 md:mb-4" style={{ color: '#8B2635' }}>{committeeMembers[currentMember].subtitle}</p>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{committeeMembers[currentMember].description}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={nextMember}
                className="p-1 md:p-2 rounded-full text-white hover:opacity-80 transition-opacity z-10 flex-shrink-0"
                style={{ backgroundColor: '#8B2635', alignSelf: 'center' }}
                aria-label="Next member"
              >
                <ChevronRight size={20} className="md:hidden" />
                <ChevronRight size={24} className="hidden md:block" />
              </button>
            </div>

            {/* Member indicators */}
            <div className="flex justify-center mt-2 sm:mt-4 md:mt-6 space-x-2">
              {committeeMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMember(index)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-colors ${index === currentMember ? 'bg-red-800' : 'bg-gray-300'
                    }`}
                  style={index === currentMember ? { backgroundColor: '#8B2635' } : {}}
                  aria-label={`Go to member ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#8B2635' }}>
           Ramleela 2025<br/>Schedule
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col mb-6 text-gray-700">
                  <div className="flex items-center gap-4">
                    <span className="w-6 h-6 flex items-center justify-center">
                      <Calendar style={{ color: '#8B2635' }} size={20} />
                    </span>
                    <span className="text-lg font-bold">Dates:</span>
                    <span className="text-lg">22nd September – 2nd October 2025</span>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="w-6 h-6 flex items-center justify-center">
                      <MapPin style={{ color: '#8B2635' }} size={20} />
                    </span>
                    <span className="text-lg font-bold">Venue:</span>
                    <span className="text-lg">Brothers Ramleela Ground, Bhai Parmanand Colony, <br/>Delhi-110009</span>
                  </div>
                </div>

              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {scheduleEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-orange-50 rounded-lg shadow-sm px-3 py-3 gap-3 border-l-4 min-h-[56px]"
                      style={{ borderLeftColor: '#8B2635' }}
                    >
                      <span className="flex items-center justify-center w-6 h-6">
                        <Calendar style={{ color: '#8B2635' }} size={20} />
                      </span>
                      <span className="font-bold text-sm text-gray-800 w-20 flex-shrink-0">{event.date}</span>
                      <span className="text-sm text-gray-700 flex-1">{event.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUsPage;