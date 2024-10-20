import React from 'react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from "../assets/logo.png"
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => { 
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
 const navItems = [
    { label: "Homepage", href: "#" },
    { label: "Features", href: "#" },
    { label: "Usecases", href: "#" },
    { label: "Pricing", href: "#" },
    // { label: "Blogs", href: "#" },

  ];
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg lg:px-7">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className='w-40 mr-2' src={logo} alt="" />
                </div>
                <ul className="hidden mx-auto lg:flex  space-x-16">
                    {navItems.map((item, index) => (
                     <li key={index} className='text-white font- lg:text-[17px]'>
                       <a href={navItems.href}>{item.label}</a>
                     </li>

                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                  <a href="#" className='bg-[#6A65FF] text-white font-rale font-semibold py-3 px-5 rounded-md lg:text-[17px]'>
                    Join the waitlist
                  </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                  <button onClick={toggleNavbar} className='text-white'>
                    {mobileDrawerOpen ? <X /> : <Menu />}
                  </button>
                </div>
            </div>
            {mobileDrawerOpen && (
            <div  className = "fixed right-0 z-20 bg-blue-gray-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
             <ul>
              {navItems.map((item,index) =>(
                 <li key={index} className='py-4 text-white font-rale font-medium'>
                   <a href={navItems.href} className='text-1xl'>{item.label}</a>
                 </li>
              ))}
             </ul>
             <div className="flex space-x-6">
              <a href="#" className='bg-[#6A65FF] py-2 px-3 text-white font-rale font-medium rounded-md w-80 mt-2 text-center'>
              Join the waitlist
              </a>
             </div>
            </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar