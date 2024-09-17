import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=''>
      <div>
        {/* Left section */}
        <div>
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ducimus aliquid unde ipsam animi quidem debitis accusamus rem voluptatum cumque porro autem cum temporibus, veritatis, pariatur ea minima consequuntur aut!</p>
        </div>

        {/* Center section */}
         <div>
            <p>COMPANY</p>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/* Right section */}
            <div>
                <p>GET IN TOUCH</p>
                <ul>
                    <li>+94 77 587 9966</li>
                    <li>medhub@gmail.com</li>
                </ul>
            </div>

    
      </div>
      <div>
        {/* Copyright */}
        <hr/>
        <p>Copyright @ 2024 MedHub - All right Reserved </p>
      </div>
    </div>
  )
}

export default Footer
