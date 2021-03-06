import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Star_Wars_Logo.svg';

const Navbar = () =>  {
    const [ open, setOpen ] = useState(false);
    const onHamburguerClick = e => setOpen(!open);
    return (
        <nav className="flex items-center justify-between flex-wrap bg-black p-6">
            <Link to="/" className="flex items-center flex-shrink-0 text-white mr-2 md:ml-4">
                <img src={logo} className="fill-current h-12 w-16 md:h-24 md:w-32 mr-2" alt="Star wars" />
                <span className="font-semibold text-lg md:text-2xl tracking-tight">Planets and Residents</span>
            </Link>
            <div className="block lg:hidden">
                <button onClick={onHamburguerClick} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={`w-full ${ !open ? 'hidden' : '' } lg:block flex-grow lg:flex lg:items-center lg:text-right lg:w-auto`}>
                <div className="text-lg md:text-xl lg:flex-grow">
                <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-yellow-500 hover:text-white mr-4 lg:rounded lg:border lg:border-yellow-500 lg:p-2">
                    Home
                </Link>
                <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-yellow-500 hover:text-white mr-4 lg:rounded lg:border lg:border-yellow-500 lg:p-2">
                    About
                </Link>
                </div>
            </div>
        </nav>

    )
}
export default Navbar

