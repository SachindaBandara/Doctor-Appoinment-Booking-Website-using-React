import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* Left section */}
        <div className='mt-[-20px]'>
            <img className='mb-5 w-[220px]' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>We simplify the process of finding and scheduling appointments with trusted healthcare professionals. Our platform connects you with a comprehensive list of specialists, making it easy to browse, select, and book appointments at your convenience.</p>
        </div>

        {/* Center section */}
         <div className='mt-5'>
            <p className='text-base font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/* Right section */}
            <div className='mt-5'>
                <p className='text-base font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Tel   : +94 77 587 9966</li>
                    <li>Email : medicalcare@gmail.com</li>
                    <li>Address : 777/A, Baththaramulla</li>
                </ul>
            </div>
      </div>
      <div>
        {/* Copyright */}
        <hr/>
        <p className='py-5 text-xs text-center'>Copyright @ 2024 MEDICAL CARE - All right Reserved </p>
      </div>
    </div>
  )
}

export default Footer
