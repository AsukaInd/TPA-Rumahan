import React from 'react'
import Logo from '../assets/LogoSementara.png'

const Navbar = () => {
  return (
    <>
    
    <header className='bg-white'>
      <nav className='flex flex-row justify-between items-center py-2 px-1 sm:px-5 sm:py-2 border-b-2 border-gray-300 shadow-md'>
        <figure className='flex flex-row gap-2 justify-center items-center'>
          <img src={Logo} alt="TPA Rumahan Gresik" className='w-[40px] h-[40px] sm:w-14 sm:h-14'/>
          <h2 className='text-blue-400 font-medium sm:text-base'>TPA Rumahan Gresik</h2>
        </figure>
        <div className='sm:flex flex-row gap-3 hidden'> 
          <a href="#" className='text-gray-400 sm:text-lg hover:text-blue-500 font-medium tracking-wider'> Home</a>
          <a href="#" className='text-gray-400 sm:text-lg hover:text-blue-500 font-medium tracking-wider'> Tentang Kami</a>
          <a href="#" className='text-gray-400 sm:text-lg hover:text-blue-500 font-medium tracking-wider'> Harga</a>
          <a href="#" className='text-gray-400 sm:text-lg hover:text-blue-500 font-medium tracking-wider'> Kontak Kami</a>
        </div>
      </nav>
    </header>

    </>
  )
}

export default Navbar