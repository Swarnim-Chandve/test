import React from "react";
import {motion} from "framer-motion"

const fadeIn = {
  hidden: {
    opacity: 0,
    y:300
  },
  show:{
    opacity: 1, y:0,
    transition:{
      duration: 3
    }
  },
};

const Hero = () => {
  return (
    <div className="pt-20 flex flex-col md:flex-row justify-around ">
      <div className="md:w-1/3 p-5 flex flex-col justify-between ">
        <div className="space-y-10">
            <h3 className="text-xl">GDSC GHRCE Presents </h3>
          <h1 className="text-5xl md:text-6xl font-bold ">
            India's First
                <br />
            <motion.span initial="hidden" animate="show" variants={fadeIn}> TechUtsav</motion.span> 
          </h1>
          <h4 className="text-xl text-yellow-400">Sunday , 21 April 2024</h4>
          <p className="text-sm md:text-base ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            tenetur incidunt obcaecati dolorem iure ducimus suscipit maxime
            impedit quidem nisi?
          </p>
          <div className="space-x-5">
          <button class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
      <span class="relative z-10">Get Early Bird !!</span>
    </button>
          
          </div>
         
        </div>

      
      </div>
      <div className="md:w-1/">
        <motion.img initial="hidden" animate="show" variants={fadeIn} src="https://devfestnagpur.in/static/media/Map.f161c0cacbe5d56485a5.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;