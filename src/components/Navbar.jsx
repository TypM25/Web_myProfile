
import { useState } from 'react'
import { Link } from "react-router-dom";

function Navbar() {
const [isMenuOn, setisMenuOn] = useState(false);

const  toggleMenu = () => {
    setisMenuOn(!isMenuOn);    
}
 
  return (
    <nav className="sticky top-2 shadow-2xl m-3 bg-stone-500 rounded-xl ">
        <div className='flex justify-between item-center px-7 p-3  font-serif text-white '>
        <span><Link className='font-portfolioFont text-3xl font-bold' to="/">Portfoilo</Link></span>
        
        <div className="flex  md:hidden"> {/* ถ้าหน้าจอขนาดกลาง up hidden */}
            <button id="menu-toggle" className=' inline-block text-white' onClick={toggleMenu} >
                <svg
                    fill = 'none'
                    stroke = 'currentColor'
                    stroke-linecap = "round"
                    stroke-linejoin = "round"
                    strok-width = "2"
                    viewBox = "0 0 24 24"
                    className='w-6 h-6'
                >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                    
                </svg>
            </button>
        </div>

        <ul className="hidden md:flex p-1 text-center justify-center item-center ">
            <li className='ml-5 py-1 px-3 rounded-full font-describeFont transition duration-110 delay-110 hover:delay-110 hover:text-orange-200 hover:bg-stone-600 '><Link to="/">Home</Link></li>
            <li className='ml-5 py-1 px-3 rounded-full font-describeFont transition duration-110 delay-110 hover:delay-110 hover:text-orange-200 hover:bg-stone-600 '><Link to="/experience">Experience</Link></li>
            <li className='ml-5 py-1 px-3 rounded-full font-describeFont transition duration-110 delay-110 hover:delay-110 hover:text-orange-200 hover:bg-stone-600 '><Link to="/transcript">Transcript</Link></li>
            <li className='ml-5 py-1 px-3 rounded-full font-describeFont transition duration-110 delay-110 hover:delay-110 hover:text-orange-200 hover:bg-stone-600 '><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile */}
        {/* check_isMenuOn */}
        {isMenuOn ? (   
            <ul className="flex-col md:hidden">
            <li className='ml-5 py-1 px-3 rounded-full font-describeFont transition duration-110 delay-110 hover:delay-110 hover:text-orange-200 hover:bg-stone-600 '><Link to="/">Home</Link></li>
            <li className='ml-5 py-1 px-3 rounded-full font-describeFont transition duration-110 delay-110 hover:delay-110 hover:text-orange-200 hover:bg-stone-600 '><Link to="/experience">Experience</Link></li>
            <li className='ml-5 py-1 px-3 rounded-full font-describeFont transition duration-110 delay-110 hover:delay-110 hover:text-orange-200 hover:bg-stone-600 '><Link to="/transcript">Transcript</Link></li>
            <li className='ml-5 py-1 px-3 rounded-full font-describeFont transition duration-110 delay-110 hover:delay-110 hover:text-orange-200 hover:bg-stone-600 '><Link to="/contact">Contact</Link></li>
        </ul>
        ) : null}
        
        </div>
    </nav>
  )
}

export default Navbar