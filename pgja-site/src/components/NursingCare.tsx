import React from "react";

const NursingCare: React.FC = () => {
  return (
    <section className="w-full text-white">
      {/* Section 1: Overview */}
      <div
        className="bg-cover bg-center bg-no-repeat bg-fixed min-h-[500px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(42, 44, 46, 0.51), rgba(42,44,46,0.36)), url('/nursing1.webp')",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-24 text-center">
          <h2 className="text-4xl font-bold text-[#FDC85E]">24 Hour Nursing Care</h2>
          <p className="mt-6 text-lg md:text-2xl">
            Our dedicated team of healthcare professionals are committed to
            providing compassionate and comprehensive nursing care to ensure
            the well-being and safety of all students.
          </p>
        </div>
      </div>

      {/* Section 2: Medicines */}
      <div
        className="bg-cover bg-center bg-no-repeat bg-fixed min-h-[500px] "
        style={{
          backgroundImage:
            "linear-gradient(rgba(42,44,46,0.51), rgba(42,44,46,0.51)), url('/nursing2.webp')",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-24 flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FDC85E]">
              Fully Stocked with Medicines
            </h2>
            <p className="mt-4 text-lg md:text-2xl">
              We provide free of charge medication to our students for minor
              injuries and illness. Our clinic is fully stocked with the
              appropriate medications to meet your child’s need.
            </p>
          </div>
          {/* Empty space / optional image */}
          <div className="w-full lg:w-1/2"></div>
        </div>
      </div>

      {/* Section 3: Doctors */}
      <div
        className="bg-cover bg-center bg-no-repeat bg-fixed  min-h-[500px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(42,44,46,0.37), rgba(42,44,46,0.37)), url('/nursing3.webp')",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-24 flex flex-col lg:flex-row items-center gap-12">
          {/* Empty space / optional image */}
          <div className="w-full lg:w-1/2"></div>
          {/* Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FDC85E]">
              Doctors That Care
            </h2>
            <p className="mt-4 text-lg md:text-2xl">
              We have regular clinic days run by highly qualified, local doctors.
              <br className="hidden md:block" />
              <br />
              Our mission is to provide a safe and nurturing environment for all
              patients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NursingCare;
