import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/shared/logo.svg'
import close from '../assets/shared/icon-close.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'

export default function Header() {
  const [Nav, setNav] = useState(true);

  const handleNav = () => {
      setNav(!Nav);
  };


  return (
    <div >
        <header className='absolute top-0 z-50'>
            <div className='flex space-x-56 px-5 mt-2'>
               <Link to="/">
                  <img src={logo} alt="logo"  title='logo'/>
               </Link>
               <div onClick={handleNav} className='p-2 sm:hidden '>
                 { Nav ? <img src={hamburger} alt="burger" /> : <img src={close} alt="close" /> }
               </div>
                  
            </div>

            <nav className={ !Nav ? 
                'sm:hidden w-[250px] bg-slate-800 text-gray-200 mx-16 ease-in-out duration-500' 
                : "fixed top-[1000px]"} >
                  
              <ul className='flex flex-col space-y-10 mx-14 py-10'>
                <li onClick={() => setNav(!Nav)}>
                   <Link to="/">
                     <span>00</span> Home
                   </Link>
                </li>
                <li onClick={() => setNav(!Nav)} >
                   <Link to="/Destination">
                     <span>01</span> Destination
                   </Link>
                </li>
                <li onClick={() => setNav(!Nav)}>
                   <Link to="/Crew">
                     <span>02</span> Crew
                   </Link>
                </li>
                <li onClick={() => setNav(!Nav)}>
                   <Link to="/Technology">
                     <span>03</span> Technology
                   </Link>
                </li>
              </ul>
            </nav>

            <nav className= "hidden sm:flex ">
              <ul className='flex space-x-10 p-4 px-8 lg:px-12 lgbar 
                             relative bottom-12 left-[270px] lg:left-[800px] text-white'>
                <li className='hover:border-b-2 border-white'>
                   <Link to="/">
                     <span className='font-bold'>00</span> Home
                   </Link>
                </li>
                <li className='hover:border-b-2 border-white'>
                   <Link to="/Destination">
                     <span className='font-bold'>01</span> Destination
                   </Link>
                </li>
                <li className='hover:border-b-2 border-white'>
                   <Link to="/Crew">
                     <span className='font-bold'>02</span> Crew
                   </Link>
                </li>
                <li className='hover:border-b-2 border-white'>
                   <Link to="/Technology">
                     <span className='font-bold'>03</span> Technology
                   </Link>
                </li>
              </ul>
            </nav>
        </header>
    </div>
  )
}
