import React from 'react'

type Props = {}

function HeroCircles({}: Props) {
  return (
    <div
    
    className='flex flex-row items-center justify-center 
    relative 
    z-1000
    '
    >

<div
        className="border border-[#F7ab0a]  w-[200px]
h-[200px]
rounded-full
mt-52
absolute
animate-ping
"
      /> 


<div
        className="border opacity-20  border-[#F7AB0A] w-[300px]
h-[300px]
rounded-full
mt-52
absolute
animate-pulse
"
      /> 
       <div
        className="border border-[#333]  w-[500px]
h-[500px]
rounded-full
mt-52
absolute
"
      /> 
      <div
        className="border border-[#F7AB0A]  w-[650px]
h-[650px]
opacity-20
rounded-full
mt-52
animate-pulse
absolute
"
      /> 
      <div
        className="border border-[gray] w-[800px]
h-[800px]
rounded-full
mt-52
opacity-20
absolute

"
      /> 


    </div>
  )
}

export default HeroCircles