import React from "react";

const Chaplaincy: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#de9642] flex items-center justify-center py-10">
      <div className="max-w-9xl rounded-xl mx-auto overflow-hidden">
        <div className="w-full relative">
          <img  
            src="/chaplaincy1.webp"
            alt="chaplaincy image"
            className="w-full min-h-[600px] object-cover"
          
          />
          <div className="absolute inset-0 bg-black opacity-30"/>
          <div className=" absolute inset-0 flex flex-col justify-center items-center text-left px-4 sm:px-12 text-gray-200">
            <h1 className="text-4xl md:text-7xl font-bold mb-8">
              Chaplaincy
            </h1>
            <div className="w-24 h-1 bg-[#de9642] mb-10"></div>
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
        </div>
      </div>
     
    </section>
  );
};

export default Chaplaincy;
