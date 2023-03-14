import React from "react";
import ExperinceCard from "./ExperinceCard";
import { ExperinceProps } from "./ExperinceCard";
import Ibex from '../public/ibex.jpg'
import Apg from '../public/apg.jpeg'



type Props = {
  // directionLeft?: boolean;
  // component: React.ComponentType<ExperinceProps>;
};

function Experince({  }: Props) {
  return (
    <div className="text-center max-w-7xl 
    mx-auto  flex flex-col h-screen justify-center px-5
    space-y-5
       
    
    ">
      <h3 className="text-gray-500 tracking-[20px] uppercase text-xl">
      experience
      </h3>
   
      <div className=" flex  space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin p-2">
        <ExperinceCard
          title="IBEX GLOBAL PAKISTAN"
          position="WEB AND MOBILE APP DEVELOPER INTERNSHIP"
          date="13-06-2022 - 24-08-2022"
          photo={Ibex}
 
        />
        <ExperinceCard
          title="APAG PVT LTD"
          position="KEY PUNCHING OPERATOR KPO"
          date="2017 - 2020"
          photo={Apg}
        />
        <ExperinceCard
          title="ibex"
          position="customer service representative"
          date="2015 - 2016"
          photo={Ibex}
        />
      </div>
    </div>
  );
}

export default Experince;
