import { useEffect, useState } from "react";

export default function Countdown() {
  // Set countdown to 10th October 2026 at midnight
  const targetDate = new Date('2026-10-10T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let time = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      time.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      time.hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      time.minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      time.seconds = Math.floor((difference % (1000 * 60)) / 1000);
    }

    return time;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#FDEEDC] py-12 md:py-16 px-4 sm:px-6 text-center">
      {/* Mandala Confetti Background behind all content */}
      <div className="absolute inset-0 w-full h-full bg-[url('/assets/mandala.png')] bg-repeat opacity-10 pointer-events-none z-0"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto bg-gradient-to-r from-[#fff7ec] to-[#fff] border-4 border-yellow-400 rounded-2xl shadow-2xl p-4 md:p-8">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#B22222]">
          Ramleela begins on
        </h2>
        <p className="text-[#B22222] mt-2 mb-6 text-lg sm:text-xl font-bold tracking-wide">
          10th October 2026
        </p>

        {/* Countdown - clean vibrant cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8">
          <div className="bg-gradient-to-br from-yellow-300 via-pink-200 to-orange-200 text-[#7B0000] px-4 py-5 md:px-6 md:py-6 rounded-xl shadow-lg border-2 border-yellow-300 flex flex-col items-center justify-center">
            <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold">
              {timeLeft.days}
            </span>
            <span className="text-xs sm:text-sm md:text-base font-bold text-[#B22222]">DAYS</span>
          </div>
          <div className="bg-gradient-to-br from-pink-200 via-yellow-200 to-orange-200 text-[#7B0000] px-4 py-5 md:px-6 md:py-6 rounded-xl shadow-lg border-2 border-yellow-300 flex flex-col items-center justify-center">
            <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold">
              {timeLeft.hours}
            </span>
            <span className="text-xs sm:text-sm md:text-base font-bold text-[#B22222]">HOURS</span>
          </div>
          <div className="bg-gradient-to-br from-orange-200 via-yellow-200 to-pink-200 text-[#7B0000] px-4 py-5 md:px-6 md:py-6 rounded-xl shadow-lg border-2 border-yellow-300 flex flex-col items-center justify-center">
            <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold">
              {timeLeft.minutes}
            </span>
            <span className="text-xs sm:text-sm md:text-base font-bold text-[#B22222]">MINUTES</span>
          </div>
          <div className="bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200 text-[#7B0000] px-4 py-5 md:px-6 md:py-6 rounded-xl shadow-lg border-2 border-yellow-300 flex flex-col items-center justify-center">
            <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold">
              {timeLeft.seconds}
            </span>
            <span className="text-xs sm:text-sm md:text-base font-bold text-[#B22222]">SECONDS</span>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-[#B22222] text-base sm:text-lg md:text-xl font-semibold tracking-wide">
          Get ready for an unforgettable spiritual journey
        </p>
      </div>
    </section>
  );
}
