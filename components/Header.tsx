import React, { useState } from "react";
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import { BsMoonStars } from "react-icons/bs";

type Props = {};

function Header({}: Props) {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div  className="flex flex-row justify-between p-5 
    
    sticky top-0 z-20
    max-w-7xl mx-auto
   items-center">
      {/* left icons */}
      <motion.div 
      initial={{
        x:-200,
        opacity: 0
      }}

      animate={{
        x: 0,
        opacity: 1
      }}
      transition={{
        duration: 1.2
      }}
className="md:space-x-2"
      >
   <SocialIcon url="https://www.linkedin.com/in/syed-sheheryar-qazi-836a827a/"
fgColor='gray'
bgColor='none'
/>
<SocialIcon url="https://www.linkedin.com/in/syed-sheheryar-qazi-836a827a/"
fgColor='gray'
bgColor='none'
/>
<SocialIcon url="https://www.linkedin.com/in/syed-sheheryar-qazi-836a827a/"
fgColor='gray'
bgColor='none'
/>
<SocialIcon url="https://www.linkedin.com/in/syed-sheheryar-qazi-836a827a/"
fgColor='gray'
bgColor='none'
/>

      </motion.div>
      {/* left icons */}

      {/* right icons */}
      <motion.div
       initial={{
        x:100,
        opacity: 0
      }}

      animate={{
        x: 0,
        opacity: 1
      }}
      transition={{
        duration: 1.2
      }}
      className="space-x-2 flex items-center"
    >
<SocialIcon url="https://www.linkedin.com/in/syed-sheheryar-qazi-836a827a/"
fgColor='gray'
bgColor='none'
/>
<BsMoonStars 

    size={25}
    className='text-teal-500' onClick={() => setDarkMode(!darkMode) } />
      <p className="hidden md:inline-flex">get in touch</p>
      </motion.div>
      {/* right icons */}
    </div>
  );
}

export default Header;
