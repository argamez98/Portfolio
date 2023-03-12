import React, { useState } from 'react';
import NavLinks from './Navlink';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
      };
    const links = [
        { text: 'Projects', url: '/projects' },
        { text: 'Bio', url: '/bio' },
        { text: 'Resume', url: 'https://drive.google.com/file/d/1k44zfKJuUgoXDOtDerreqj8j51wiP0MQ/view?usp=share_link' },
        { text: 'Contact', url: '/contact' }
    ];
    return (
        <nav className="flex items-center justify-between flex-wrap">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight n">
                    My Portfolio
                </span>
            </div> 
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
                    onClick={handleClick}
                >
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path
                            d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                        />
                    </svg>
                </button>
            </div>
            <div
                className={`${isOpen ? '' : 'hidden'
                    } w-full block lg:flex lg:items-center lg:w-auto pr-32`}
            >
                <NavLinks links={links} />
            </div>
        </nav>
    );
}

export default Navbar;