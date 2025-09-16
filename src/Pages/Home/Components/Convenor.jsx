export default function Convenor() {
  return (
    <section className="py-16 px-4 bg-[#FDEEDC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/assets/convenor1.jpeg"
                alt="Convenor of Brothers Ramleela"
                className="w-full h-64 md:h-80 lg:h-96 object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div className="text-gray-800 leading-relaxed text-justify space-y-4">
              <p className="text-lg">
                It is my privilege and blessing to welcome you all to the{" "}
                <span className="font-semibold">
                  46th year of Brothers Ramleela.
                </span>
                What started decades ago as a humble effort to bring our
                community together has now grown into one of Delhi’s most loved
                cultural and devotional events. Ramleela is not just about
                staging the Ramayan – it is about keeping alive our heritage,
                inspiring our youth, and spreading the eternal message of{" "}
                <span className="font-semibold">dharma, truth,and unity.</span>
                On behalf of our committee, I invite you and your family to join
                us this year at{" "}
                <span className="font-semibold">
                  Brothers Ramleela Ground, Bhai Parmanand Colony
                </span>
                , from{" "}
                <span className="font-semibold">
                  22nd September to 2nd October 2025.
                </span>
                May Lord Ram’s blessings be with you always.Rama.
              </p>

              <p className="text-lg font-semibold mt-4 text-left">
                -Shri Harvansh Gulati Ji,
                <br />
                Convener (Sanyojak),
                <br />
                Brothers Ramleela Committee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
