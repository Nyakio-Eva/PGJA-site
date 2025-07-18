import React from "react";
import {motion} from 'framer-motion';



const LandingPage: React.FC = () => {
  return (
    <div>
      <img src="/landingpage.webp" alt="heroimage" className="object-cover"/>
      <button className="bg-blue-700">
        Discover Who We Are
      </button>
    </div>
  );
};

export default LandingPage;
