import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='#speciality'>
      <h1 className='text-4xl font-bold'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm font-medium'>
      Explore our comprehensive directory of highly trusted doctors and effortlessly book your appointment.
      </p>
      <div className='flex sm:justify-center gap-8 pt-5 w-full overflow-scroll'>
        
        {/* Fetch data from the specialityData array */}
        {specialityData.map((item, index) => (
          <Link 
            key={index}
            onClick={() => window.scrollTo(0, 0)} 
            className='flex flex-col items-center text-xs font-medium cursor-pointer flex-shrink-0 hover:-translate-y-2 transition-all duration-500' 
            to={`/doctor/${item.speciality}`}>
            <img className='w-16 sm:w-24 mb-2' src={item.image} alt={item.speciality} />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu;
