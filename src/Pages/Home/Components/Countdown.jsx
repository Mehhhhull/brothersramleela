import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("September 22, 2025 00:00:00").getTime();
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
    <section className="bg-[#FDEEDC] py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#fff7ec] to-[#fff] border border-yellow-400 rounded-xl shadow-lg p-8">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-[#B22222]">
          Ramleela begins on
        </h2>
        <p className="text-gray-700 mt-1 mb-6">22nd September 2025</p>

        {/* Countdown */}
        <div className="flex justify-center gap-4 md:gap-6 mb-6">
          <div className="bg-[#7B0000] text-yellow-400 px-4 py-3 rounded-lg shadow">
            <span className="block text-2xl md:text-3xl font-bold">
              {timeLeft.days}
            </span>
            <span className="text-xs md:text-sm text-white">DAYS</span>
          </div>
          <div className="bg-[#7B0000] text-yellow-400 px-4 py-3 rounded-lg shadow">
            <span className="block text-2xl md:text-3xl font-bold">
              {timeLeft.hours}
            </span>
            <span className="text-xs md:text-sm text-white">HOURS</span>
          </div>
          <div className="bg-[#7B0000] text-yellow-400 px-4 py-3 rounded-lg shadow">
            <span className="block text-2xl md:text-3xl font-bold">
              {timeLeft.minutes}
            </span>
            <span className="text-xs md:text-sm text-white">MINUTES</span>
          </div>
          <div className="bg-[#7B0000] text-yellow-400 px-4 py-3 rounded-lg shadow">
            <span className="block text-2xl md:text-3xl font-bold">
              {timeLeft.seconds}
            </span>
            <span className="text-xs md:text-sm text-white">SECONDS</span>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-gray-600 text-sm md:text-base">
          ✨ Get ready for an unforgettable spiritual journey ✨
        </p>
      </div>
    </section>
  );
}
