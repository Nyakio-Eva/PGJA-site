// import React from "react";

const JuniorCoder = () => {
  return (
    <div className="flex flex-col gap-0 min-h-screen bg-slate-300">
      {/* Background Hero Section */}
      <section
        className="relative flex flex-wrap w-full min-h-[900px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/juniorcoder.webp')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative container-fluid mx-auto flex flex-wrap justify-center items-center z-10 py-40 md:py-60">
          {/* Empty block can be used for title or spacing if needed */}
        </div>
      </section>

      {/* Text Content Section */}
      <section className="flex flex-wrap w-full p-4">
        <div className="container mx-auto flex flex-wrap my-10">
          <div className="w-full min-w-[250px] break-words flex flex-col">
            <h1 className="text-left text-2xl font-bold text-[#2a2c2e]">
              Discover Our Junior Coders
            </h1>
            <p className="text-left text-lg mt-4 text-[#2a2c2e]">
              We are committed to providing our students with the best
              educational resources, and our state-of-the-art computer labs are
              a testament to this commitment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JuniorCoder;
