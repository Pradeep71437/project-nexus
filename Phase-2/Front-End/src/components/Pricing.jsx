import React from 'react'

const Pricing = () => {
  return (
    <div className='mt-[150px]'>
        <h1 className='text-white font-rale font-bold text-[30px] lg:text-[55px] text-center mt-8'>Pricing Plans</h1>
        <div className="flex items-center justify-center">

        <p className='text-white font-rale text-sm text-center py-2 lg:w-[600px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque voluptatibus itaque fuga incidunt mollitia. Voluptas quisquam minima harum itaque perferen</p>
        </div>

        <div className='flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10 px-5 lg:px-[50px] py-[70px]'> 
    <div className='border-2 mb-14 border-white rounded-3xl lg:w-1/3 px-10 py-10'>
        <span className='text-gray-300 text-lg font-semibold font-rale'>SILVER</span>
        <h1 className='text-white text-[70px] font-bold border-b-2 pb-5'>$30<span className='text-2xl font-semibold'>/month</span></h1>
        <div className='text-white space-y-5 text-lg py-8'>
            <p>No Discount</p>
            <p>Basic Support</p>
            <p>Ads Banner Free</p>
            <p>Design Style</p>
            <p>Component Library</p>
            <p>All Limited Support</p>
            <p>Chat Support</p>
            <p>Unlimited Users</p>
        </div>

        <div className='mt-6'>
            <button className='px-10 py-3 font-semibold text-[19px] bg-white text-[#6A65FF] rounded-lg'>Choose Plan</button>
        </div>
    </div>
    
    <div className='relative border-2  border-[#6A65FF] bg-[#6A65FF] rounded-3xl lg:w-1/3 px-10 py-10'>
        <h1 className='absolute top-[-40px]  lg:left-[27%] text-white text-xl bg-[#051139] px-10 py-5 rounded-full border-[3px] border-white'>Most Popular</h1>
        
        <span className='text-gray-300 text-lg font-semibold font-rale'>GOLD</span>
        <h1 className='text-white text-[70px] font-bold border-b-2 pb-5'>$50<span className='text-2xl font-semibold'>/month</span></h1>
        <div className='text-white space-y-5 text-lg py-8'>
            <p>No Discount</p>
            <p>Basic Support</p>
            <p>Ads Banner Free</p>
            <p>Design Style</p>
            <p>Component Library</p>
            <p>All Limited Support</p>
            <p>Chat Support</p>
            <p>Unlimited Users</p>
        </div>
        <div className='mt-6'>
            <button className='px-10 py-3 font-semibold text-[19px] bg-white text-[#6A65FF] rounded-lg'>Choose Plan</button>
        </div>
    </div>
    
    <div className='border-2 border-white rounded-3xl lg:w-1/3 px-10 py-10'>
        <span className='text-gray-300 text-lg font-semibold font-rale'>PREMIUM</span>
        <h1 className='text-white text-[70px] font-bold border-b-2 pb-5'>$70<span className='text-2xl font-semibold'>/month</span></h1>
        <div className='text-white space-y-5 text-lg py-8'>
            <p>No Discount</p>
            <p>Basic Support</p>
            <p>Ads Banner Free</p>
            <p>Design Style</p>
            <p>Component Library</p>
            <p>All Limited Support</p>
            <p>Chat Support</p>
            <p>Unlimited Users</p>
        </div>
        <div className='mt-6'>
            <button className='px-10 py-3 font-semibold text-[19px] bg-white text-[#6A65FF] rounded-lg'>Choose Plan</button>
        </div>
    </div>
</div>

    </div>
  )
}

export default Pricing