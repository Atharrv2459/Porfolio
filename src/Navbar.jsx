import{Menu,X} from 'lucide-react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import images from '../public/Images'
import navitems from './assets/Navitems'



function Navbar() {

  const [mobileDrawerOpen, SetMobileDrawerOpen]= useState(false);
  function toggleNavbar(){
    SetMobileDrawerOpen(!mobileDrawerOpen);

  };
  //navbar
  return(
      <div>
      <nav className="flex flex-row bg-black sticky py-3">
        <div className='text-white relative left-5 flex flex-row gap-3 px-3'>
          
          <img className='h-10 w-10' src={images.vite} alt="logo"></img>
          <p className='text-white text-2xl font-bold '>VirtualR</p>
          <div>
          <ul className= 'hidden  text-white lg:flex gap-7 justify-center relative top-1 mx-48'>
            {navitems.map((item,index)=>(
              <li key={index}>
                {item}
              </li>))
            }
          </ul>
          </div>
          <div className='hidden lg:flex flex-row gap-4'>
          <a href="#" className='px-3 py-2 border rounded-md relative bottom-1 hover:bg-white hover:text-black'>
            Sign in
          </a>
          < a href="#" className='px-3 py-2 border-orange-700 rounded-md relative bottom-1 bg-orange-700 hover:bg-orange-950 '>
          create an account</a>
          </div>
          <div className='lg:hidden md:flex flex-col justify-end mx-60'>
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
          {mobileDrawerOpen &&(
          <div className='fixed right-0 top-14 flex flex-col w-full z-20 justify-center p-12 items-center lg:hidden bg-black'>
            <ul>
            {navitems.map((item,index)=>(
              <li className='py-4' key={index}>
                {item}
              </li>))
            }
              
            </ul>
            <div className="flex flex-row ">
            <a href="#" className=' px-3 py-2 border rounded-md relative left-4  top-3 lg:hidden hover:bg-white hover:text-black'>
            Sign in
          </a>
          < a href="#" className='px-3 py-2 border-orange-700 rounded-md relative top-3 left-9 bg-orange-700 hover:bg-orange-800 lg:hidden'>
          create an account</a>
          </div>

          </div>
          )}
          </div>
          </nav>


      </div>
  
  );
}

export default Navbar
