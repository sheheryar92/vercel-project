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
        Hi this is Sheheryar, a professional web developer, Practical knowledge
        of website and application coding, quick to pick up and master new
        technologies, competent to work both independently and in team.
        excellent understanding of MERN, HTML, JavaScript, and React Native, as
        well as strong communication and problem-solving abilities. Always had a
        passion for web development. I am always looking for new technology and
        keeping up with business trends.
      </p>
    </div>
  );
}

export default About;
