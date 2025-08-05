import React from "react";

const Pathways: React.FC = () => {
  return (
    <section
      className="flex flex-wrap px-2 py-8 min-h-screen bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(145, 145, 150, 0.32), rgba(64, 64, 66, 0.5)), url('/sciencelab.jpg')",
      }}
    >
      <div className="w-full flex flex-wrap max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center px-4 my-20 lg:my-40">
          <h1 className="text-left text-gray-200 text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed">
            Our students are taken through the CBE Curriculum, and we major on <br />
            <p>
            Science, Technology, Engineering and Mathematics. </p>
          </h1>
          <a
            href="/pathway-details"
            className="bg-[#de9642] text-gray-200 hover:text-black font-bold text-xl px-6 py-4 rounded hover:bg-[#bdd6f0] hover:brightness-110 transition mt-10 md:w-1/3 whitespace-nowrap"
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
            className="bg-[#de9642] hover:text-black text-gray-200 font-bold text-xl px-8 py-3 rounded shadow min-w-[320px]  hover:bg-[#bdd6f0] transition" 
          >
            Aviation
          </button>

          <button
            onClick={() =>
              (window.location.href =
                "/junior-seafarer/")
            }
            className="bg-[#de9642] hover:text-black text-gray-200 font-bold text-xl px-8 py-3 rounded shadow min-w-[320px]  hover:bg-[#bdd6f0] transition"
          >
            Marine Time Studies
          </button>

          <button
            onClick={() =>
              (window.location.href =
                "/junior-coder/")
            }
            className="bg-[#de9642] hover:text-black text-gray-200 font-bold text-xl px-8 py-3 rounded shadow min-w-[320px]  hover:bg-[#bdd6f0] transition"
          >
            Coding
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pathways;
