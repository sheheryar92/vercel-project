import React from 'react'
import { motion } from "framer-motion"
import SkillGrid from './SkillGrid'


export type Props = {

  component: React.ComponentType<Props>;
};


function Skills() {
  return (
    <motion.div
    initial={{
      opacity: 0
    }}
    whileInView={{
      opacity: 1
    }}
    transition={{
      duration: 1.5
    }}
    className='h-screen max-w-7xl mx-auto  items-center      space-y-5   px-5  text-center
    flex  
       justify-center 
    flex-col'>
        <h3
        className="text-gray-500 tracking-[20px] uppercase 
 text-xl"
      >
        Skills
      </h3>
    
        <h3 className='uppercase  md:tracking-[13px] text-sm 
        text-gray-500 
        '>hover over a skill for current proficiency</h3>


<div className='grid grid-cols-3 md:grid-cols-4 gap-5'>
    <SkillGrid skillIcon="https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage-1024x768.jpg"/>
    <SkillGrid skillIcon="https://cdn-icons-png.flaticon.com/512/1532/1532556.png"/>

    <SkillGrid skillIcon="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png"/>

    <SkillGrid skillIcon="https://www.clipartmax.com/png/small/147-1474351_javascript-icon.png"/>

    <SkillGrid skillIcon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>

    <SkillGrid skillIcon="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png"/>

    <SkillGrid skillIcon="https://cms-assets.tutsplus.com/uploads/users/34/posts/29527/preview_image/mongoose.jpg"/>

    <SkillGrid skillIcon="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"/>
   
    <SkillGrid skillIcon="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"/>
   
   

    <SkillGrid skillIcon=" https://mms.businesswire.com/media/20220628005411/en/1498574/5/Sanity.io_logo.jpg"/>

</div>


    </motion.div>
  )
}

export default Skills



