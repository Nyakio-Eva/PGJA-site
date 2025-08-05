import React from "react";

const Pathways: React.FC = () => {
  return (
    <section
      className="flex flex-wrap px-2 py-8 min-h-screen bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(16, 17, 17, 0.42), rgba(31, 31, 32, 0.5)), url('/pathways2.webp')",
      }}
    >
      <div className="w-full flex flex-wrap max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center px-4 my-20 lg:my-40">
          <h1 className="text-left text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed">
            Our students are taken through the CBE Curriculum, and we major on <br />
            <p>
            Science, Technology, Engineering and Mathematics. </p>
          </h1>
          <a
            href="/pathway-details"
            className="bg-[#f4a024] text-white font-bold text-xl px-6 py-4 rounded shadow hover:brightness-110 transition mt-10 md:w-1/3 whitespace-nowrap"
          >
            Discover Pathway Details
          </a>
        </div>

        {/* Button Section */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center items-center gap-6 px-4 my-20 lg:my-40">
          

          <button
            onClick={() =>
              (window.location.href =
                "/junior-aviator/")
            }
            className="bg-[#bfdae9ff] text-gray-900 font-bold text-xl px-8 py-3 rounded shadow min-w-[320px] hover:bg-gray-100 transition" 
          >
            Aviation
          </button>

          <button
            onClick={() =>
              (window.location.href =
                "/junior-seafarer/")
            }
            className="bg-[#bfdae9ff] text-gray-900 font-bold text-xl px-8 py-3 rounded shadow min-w-[320px] hover:bg-gray-100 transition"
          >
            Marine Time Studies
          </button>

          <button
            onClick={() =>
              (window.location.href =
                "/junior-coder/")
            }
            className="bg-[#bfdae9ff] text-gray-900 font-bold text-xl px-8 py-3 rounded shadow min-w-[320px] hover:bg-gray-100 transition"
          >
            Coding
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pathways;
