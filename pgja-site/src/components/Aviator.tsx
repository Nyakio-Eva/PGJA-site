
// import React from "react";

const Aviation = () => {
  return (
    <div className="flex flex-col gap-0 bg-slate-200">
      {/* Background Section 1 */}
      <section
        className="flex flex-wrap w-full p-2 min-h-[300px] md:min-h-[500px] lg:min-h-[700px] bg-center bg-cover bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(42,44,46,0.3), rgba(42,44,46,0.3)), url('/aviationtoy.webp')",
        }}
      >
        <div className="container mx-auto flex flex-wrap p-4 my-32 md:my-64">
          {/* Empty content section */}
        </div>
      </section>

      {/* Text Content Section */}
      <section className="flex flex-wrap w-full p-4 my-16">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full min-w-[250px] break-words flex flex-col">
            <h1 className="text-left text-xl md:text-2xl text-[#2a2c2e]">
              The Junior Aviator program at Pioneer Girls Junior Academy is an
              initiative aimed at sparking interest in aviation among young
              girls.
            </h1>
          </div>
        </div>
      </section>

      {/* Background Section 2 - Full height with overlay */}
      <section
        className="relative flex flex-wrap w-full min-h-[600px] md:min-h-[800px] bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url('/junioraviators.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative container-fluid mx-auto flex flex-wrap p-0 z-10">
          <div className="flex-grow flex flex-col justify-center min-w-[250px] w-full"></div>
        </div>
      </section>

      {/* Text Content Section 2 */}
      <section className="flex flex-wrap w-full p-4 my-16">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full min-w-[250px] break-words flex flex-col">
            <h1 className="text-left text-xl md:text-2xl text-[#2a2c2e]">
              This program introduces students to the fascinating world of
              aviation, blending theoretical knowledge with hands-on experiences
              to cultivate their passion for flying and aeronautical sciences.
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aviation;
