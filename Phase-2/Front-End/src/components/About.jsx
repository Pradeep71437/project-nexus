import React from 'react'
import Activity from "../assets/activity.png"
import Icon1 from "../assets/icon1.png"
import Icon2 from "../assets/icon2.png"
import Icon3 from "../assets/icon3.png"

const About = () => {
  return (
    <div className='lg:mt-[130px] lg:flex justify-between lg:mx-10 '>
        <div className='lg:w-1/2'>
            <img src={Activity} className='w-[600px]' alt="" />
        </div>
        <div className='lg:w-1/2'>
        <h1 className='text-white font-rale font-bold text-3xl text-center my-8 text-start text-[47px] w-[700px] leading-normal'>
  Help You Find The Best Analysis For Your Business
</h1>
        
            <div className='flex my-8 lg:my-[50px]'>
                <div className='flex justify-center items-center mx-5'>

                <img src={Icon1} className='w-[140px]' alt="" />
                </div>
                <div>
                <h2 className='text-white font-rale font-semibold text-2xl lg:text-3xl'>Trusted and Accurate</h2>
                <p className='text-white font-rale text-sm lg:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum doloremque totam officiis suscipit consectetur, tempore consequatur voluptate nesciunt saepe</p>
                </div>
            </div>
            <div className='flex my-8  lg:my-[70px]'>
                <div className='flex justify-center items-center mx-5'>

                <img src={Icon2} className='w-[140px]' alt="" />
                </div>
                <div>
                <h2 className='text-white font-rale font-semibold text-2xl lg:text-3xl'>Hired By Top Company</h2>
                <p className='text-white font-rale text-sm lg:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum doloremque totam officiis suscipit consectetur, tempore consequatur voluptate nesciunt saepe</p>
                </div>
            </div>
            <div className='flex my-8  lg:my-[70px]'>
                <div className='flex justify-center items-center mx-5'>

                <img src={Icon3} className='w-[140px]' alt="" />
                </div>
                <div>
                <h2 className='text-white font-rale font-semibold text-2xl lg:text-3xl'>Various Categories</h2>
                <p className='text-white font-rale text-sm lg:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum doloremque totam officiis suscipit consectetur, tempore consequatur voluptate nesciunt saepe</p>
                </div>
            </div>
            <div>
        </div>
        </div>
    </div>
  )
}

export default About