import React, { useState } from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ContactMe from "./ContactMe";
import Experince from "./Experince";
import Skills from "./Skills";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import Link from "next/link";

type Props = {};

function Main({}: Props) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className="snap-mandatory snap-y h-screen overflow-scroll
        scrollbar-thin   scrollbar-track-gray-400/20
    
        scrollbar-thumb-[#F7AB0A]/80
      overflow-x-hidden
      dark:bg-[rgb(36,36,36)]
      "
      >

{/* scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 */}
        {/* NAV */}
        <div
          className="flex flex-row justify-between p-5 
      
      sticky top-0 z-20
      max-w-7xl mx-auto
     items-center"
        >
          {/* left icons */}
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            className=""
          >
            <SocialIcon
              url="https://www.linkedin.com/in/syed-sheheryar-qazi-836a827a/"
              fgColor="gray"
              bgColor="none"
            />
               <SocialIcon
              url="https://github.com/sheheryar92"
              fgColor="gray"
              bgColor="none"
            />
          
               <SocialIcon
              url="https://dribbble.com/sharryDesigner"
              fgColor="gray"
              bgColor="none"
            />
               <SocialIcon
              url="https://www.behance.net/sheheryarqazi"
              fgColor="gray"
              bgColor="none"
            />
         
            <SocialIcon
              url="https://www.youtube.com/channel/UCq1lMQkcVhK2LZnrKQBHITA"
              fgColor="gray"
              bgColor="none"
            />
          </motion.div>
          {/* left icons */}

          {/* right icons */}
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            className="space-x-5 flex items-center "
          >
            {darkMode ? (
              <BsMoonStars
                color="gray"
                size={20}
                className=" cursor-pointer"
                onClick={() => setDarkMode(!darkMode)}
              />
            ) : (
              <BsSun
                color="gray"
                size={20}
                className=" cursor-pointer"
                onClick={() => setDarkMode(!darkMode)}
              />
            )}

<Link href="#contact"> 
            <TfiEmail
              className=" cursor-pointer"
              color="gray"
              size={20}
              href="contact"
            />
            </Link>
            <p className="hidden md:inline-flex text-gray-500">get in touch</p>
          </motion.div>
          {/* right icons */}
        </div>
        {/* NAV */}

        <section className="snap-start">
          <Hero />
        </section>
        <section className="snap-center" id="about">
          <About />
        </section>
        <section className="snap-center" id="experience">
          <Experince />
        </section>
        <section className="snap-center" id="projects">
          <Projects />
        </section>
        <section className="snap-center" id="skills">
          <Skills />
        </section>
        <section id="contact" className="snap-center" >
          <ContactMe />
        </section>
      </div>
    </div>
  );
}

export default Main;
