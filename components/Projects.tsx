import React from "react";
import { motion } from "framer-motion";
import { projectData } from "./projectJason";

import Image from "next/image";

type Props = {};

function Projects({}: Props) {
  return (
    <div className="h-screen 
    relative flex flex-col justify-center items-center overflow-hidden text-left md:flex-row mx-w-full mx-auto     ">
      <h3
        className="text-2xl uppercase tracking-[20px] text-gray-500
        absolute top-24
        "
      >
        projects
      </h3>

      <div className="w-full flex relative overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {projectData.map((p, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center items-center
    transition duration-300 flex flex-col space-y-5 justify-center p-20  
    "
          >
            <motion.div
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
            >
              <a href={p.siteLink} target="_blank">
                <Image
                  src={p.source}
                  width="400"
                  height="400"
                  className="w-48 h-32 md:w-96 md:h-96  object-contain"
                  alt={p.title}
                />
              </a>
            </motion.div>

            <div className="space-y-2 px-0 md:px-5 max-w-6xl">
              <h3 className="text-xl  md:text-2xl uppercase font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50 text-gray-500">
                  case study   <span className="text-black dark:text-white">{i + 1} of {projectData.length}</span> 
                </span>
            
                
              
              </h3>
              <h4 className="text-center text-white uppercase font-semibold">
                <a href={p.siteLink} target="_blank" className="dark:text-white text-black text-xl font-semibold">
                  {p.title}
                </a>
              </h4>
              <p className="text-xl  text-center md:text-left text-gray-500">
                {p.des}
              </p>
            </div>
          </div>
        ))}
        {/* projects */}
        {/* projects */}
        {/* projects */}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}

export default Projects;
