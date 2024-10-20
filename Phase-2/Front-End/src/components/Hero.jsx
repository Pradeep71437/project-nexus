import React from 'react'
import Navbar from './Navbar'
import hero from "../assets/hero-bg.png"

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center  lg:mt-[30px] '>
        <h1 className='text-white font-rale font-bold my-5 lg:my-0  text-[35px] w-[400px] lg:text-[66px] text-center lg:w-[1000px]'>Integrate Ai For A Competitive Analysis For Your Business </h1>

      </div>
      <div className="flex items-center justify-center">

        <p className='text-center text-white w-[400px] lg:w-[800px] lg:pt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus numquam, aperiam et saepe cumque voluptate natus blanditiis ipsum aliquam asperiores dicta.</p>
      </div>
      <div className="flex items-center justify-center mt-10 space-x-5">
        <a href="#" className='bg-[#6A65FF] text-white font-rale font-semibold py-3 px-5 rounded-md lg:text-[17px]'>
          Join the waitlist
        </a>
        <a href="#" className='border text-white font-rale font-semibold py-3 px-7 hover:bg-white hover:text-black hover:border-black rounded-md lg:text-[17px]'>
          Know More
        </a>
      </div>
      <div className='flex justify-center items-center'>
        <img src={hero} alt="" className='px-3 ' />
      </div>
      <div className="overflow-hidden whitespace-nowrap bg-[#6A65FF] py-7">
      <div className="animate-marquee inline-block">
        <span className="text-2xl font-bold text-white lg:text-[40px] mx-[70px] ">Join The Waitlist</span>
        <span className="text-2xl font-bold text-stroke-1 text-[#6A65FF] text-stroke-white lg:text-[40px] mx-[70px] ">Join The Waitlist</span>
        <span className="text-2xl font-bold text-white lg:text-[40px] mx-[70px] ">Join The Waitlist</span>
        <span className="text-2xl font-bold text-stroke-1 text-[#6A65FF] text-stroke-white lg:text-[40px] mx-[70px] ">Join The Waitlist</span>

        <span className="text-2xl font-bold text-white lg:text-[40px] mx-[70px] ">Join The Waitlist</span>
        <span className="text-2xl font-bold text-stroke-1 text-[#6A65FF] text-stroke-white lg:text-[40px] mx-[70px] ">Join The Waitlist</span>
        <span className="text-2xl font-bold text-white lg:text-[40px] mx-[70px] ">Join The Waitlist</span>
        <span className="text-2xl font-bold text-stroke-1 text-[#6A65FF] text-stroke-white lg:text-[40px] mx-[70px] ">Join The Waitlist</span>

      </div>
    </div>
    </>
  )
}

export default Hero