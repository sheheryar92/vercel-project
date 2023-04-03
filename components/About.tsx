import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutImage from "../public/about.jpg";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="h-screen flex flex-col
      items-center
      space-y-5
    justify-center  max-w-7xl mx-auto text-center px-5"
    >
      <h3 className="text-gray-500 tracking-[20px] uppercase text-xl">
        about
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
      >
        <Image
          alt="about"
          src={AboutImage}
          className=" flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-96
xl:w-[500px] xl:h-[600px]
"
        />
      </motion.div>
      <h4 className="text-xl md:text-4xl font-semibold  md:text-left text-center uppercase text-gray-500">
        here is a{" "}
        <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
        backgroud
      </h4>
      <p className="text-base md:text-xl text-gray-500">
      Hi, I’m Sheheryar Qazi, An experienced Front-End developer. I am skilled in responsive website development. Practical knowledge of website and application coding, quick to pick up and master new technologies, .Strong innovative and creative.
      </p>
    </div>
  );
}

export default About;
