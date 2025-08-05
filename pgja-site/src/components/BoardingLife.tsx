import React from "react";

const BoardingLife: React.FC = () => {
  return (
    <section className="relative w-full md:py-10 bg-[#de9642] min-h-screen flex items-center">
      <div className="max-w-9xl mx-auto rounded-2xl shadow-xl overflow-hidden">
        {/* Image with text overlay */}
        <div className="w-full relative">
          <img
            src="/boardinglife.webp"
            alt="Comfortable boarding house room"
            className="w-full  min-h-[600px] object-cover inset-0 "
          />

          {/* dark overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-10" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-200 mb-6">
             Boarding Life
           </h1>
           <p className="text-lg md:text-3xl text-gray-200 font-semibold">
              Our boarding facilities offer a safe, comfortable, and welcoming
              environment that quickly feels like a second home. 
           </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardingLife;
