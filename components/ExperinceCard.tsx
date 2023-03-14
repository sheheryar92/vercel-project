
import Image from "next/image";
import React from "react";
import { FaReact } from "react-icons/fa";
import { StaticImageData } from "next/image"
import { motion } from "framer-motion"
export type ExperinceProps = {
  title: string;
  position: string;
  date: string;
  photo: StaticImageData,
  directionLeft?: boolean;
};

function ExperinceCard({ title, position, date , photo ,directionLeft}: ExperinceProps) {
  return (
    <div
      className=" 
 flex flex-col rounded-lg items-center
 space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl-w[600px]
 snap-center bg-gray-800  p-10  hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden
 text-white
    "
    >
      <div className="px-0 md:px-10">
      <motion.div
             initial={{
              x: directionLeft ? -20 : 100,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }} 
        >

     
      <Image
          alt=""
          src={photo}
          height="250"
          width="250"
          className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover text-center items-center m-auto mt-5"
        />
   </motion.div>
        <h4 className="text-4xl font-light ">{title}</h4>
        <p className="text-2xl font-bold mt-1 ">{position}</p>
        <div className="space-x-2 flex my-2  text-center justify-center">
          <FaReact />
          <FaReact />
          <FaReact />
          <FaReact />
        </div>
        <p className="uppercase  font-bold font-serif">{date}</p>
        {/* <ul className=' ml-5  text-lg'>
    <li>Responsive website Using bootstrap</li>
    <li>PSD to HTML</li>
    <li>Responsive & Cross Browsers Compatibility</li>
    <li>React Native Mobile App</li>
  </ul> */}
      </div>
    </div>
  );
}

export default ExperinceCard;
