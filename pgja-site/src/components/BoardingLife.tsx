import React from "react";

const BoardingLife: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 bg-slate-300 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden lg:flex">
        {/* Image on the left */}
        <div className="lg:w-1/2">
          <img
            src="/boardinglife.webp"
            alt="Comfortable boarding house room"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text on the right */}
        <div className="lg:w-1/2 p-12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FDC85E] mb-6">
            Boarding Life
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Our boarding facilities offer a safe, comfortable, and welcoming
            environment that quickly feels like a second home. We provide a
            structured and supportive atmosphere where students can thrive
            academically and socially.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BoardingLife;
