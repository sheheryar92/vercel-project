import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import HeroCircles from "./HeroCircles";
import Link from "next/link";
import Image from 'next/image'
import I from '../public/pp.jpg'

type Props = {};

function Hero({}: Props) {


  const [text, flags] = useTypewriter({
    words: ["Hi , The Name's Sheheryar Qazi", "Love To Code", "Karachi"],
    loop: 2000,
    // typeSpeed: 20,
    onLoopDone: () => console.log("done from typewriter hook"),
  });
  return (
    <div
      className="h-screen flex justify-center 
    text-center flex-col overflow-hidden space-y-8 items-center"
    >
      <HeroCircles />

      <Image    alt="Picture of the author"  src={I} 
      className="rounded-full w-32 h-32"
      />
      <div className="z-20">
        <h2 className="text-gray-500 uppercase tracking-[15px] pb-2">
          web developer
        </h2>
        <h1 className="text-xl lg:text-5xl font-semibold scroll-px-10 uppercase text-gray-500">
          {text}
          <span className="">
          <Cursor cursorColor="orange" />
          </span>  
        </h1>

        <div className="pt-6">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
         
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
