import React from "react";

const Chaplaincy: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(42,44,46,0.6), rgba(42,44,46,0.6)), url('/chaplaincy1.webp')",
      }}
    >
      <div className="text-left px-4 sm:px-12 text-white">
        <h1 className="text-4xl md:text-7xl font-bold text-[#FDC85E] mb-8">
          Chaplaincy
        </h1>
        <div className="w-24 h-px bg-yellow-700 mb-10"></div>
        <div className="text-lg md:text-2xl max-w-4xl mx-auto space-y-6">
          <p>
            Though the school was established as a Catholic institution, we are
            open to parents and students from all faiths.
          </p>
          <p>
            Our Pastoral team provides spiritual fellowship and guidance to all
            students.
          </p>
          <p>
            In addition, they organize safe spaces for clerics and students of
            other faiths.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Chaplaincy;
