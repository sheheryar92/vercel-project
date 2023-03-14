import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Props from "./Skills";
type Props = {
  skillIcon: string;
};

export default function SkillGrid({ skillIcon }: Props) {
  {
    console.log(skillIcon, "this is sill prop");
  }
  return (
    <div className="group relative flex cursor-pointer justify-center">
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        <Image
          src={skillIcon}
          alt=""
          width="80"
          height="80"
          className="rounded-full border border-gray-500  object-contain
          h-20 w-20 md:h-32 md:w-32 p-2
          filter group-hover:grayscale transition duration-300 ease-out"
        />
      </motion.div>

      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-out group-hover:bg-white  rounded-full 
        h-20 w-20 md:h-32 md:w-32
      object-cover
      z-0"
      >
        <div className="flex items-center justify-center h-full ">
          <p className="text-xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}
