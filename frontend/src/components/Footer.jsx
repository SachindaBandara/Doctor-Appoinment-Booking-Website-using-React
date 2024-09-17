import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* Left section */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ducimus aliquid unde ipsam animi quidem debitis accusamus rem voluptatum cumque porro autem cum temporibus, veritatis, pariatur ea minima consequuntur aut!</p>
        </div>

        {/* Center section */}
         <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/* Right section */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+94 77 587 9966</li>
                    <li>medhub@gmail.com</li>
                </ul>
            </div>
      </div>
      <div>
        {/* Copyright */}
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright @ 2024 MedHub - All right Reserved </p>
      </div>
    </div>
  )
}

export default Footer
