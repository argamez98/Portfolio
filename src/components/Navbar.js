import React, {useState} from 'react';
import NavLinks from './Navlink';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const links = [
        {
            text: 'Home',
            url: '/'
        },
        {
            text: 'Projects',
            url: '/projects'
        },
        {
            text: 'Bio',
            url: '/bio'
        },
        {
            text: 'Resume',
            url: 'https://drive.google.com/file/d/1k44zfKJuUgoXDOtDerreqj8j51wiP0MQ/view'
        }, {
            text: 'Contact',
            url: '/contact'
        }
    ];
    return (
        <nav className="flex items-center justify-between flex-wrap">
            <aside className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0' aria-label='Sidebar'>
                <div className="flex items-center flex-shrink-0 text-blue-500">
                    <span className="font-semibold text-xl tracking-tight n pl-4">
                        My Portfolio
                    </span>
                </div>
                <div className="block= lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white transition-transform translate-x-10"
                        onClick={handleClick}>
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className='h-full px-3 py-10 overflow-y-auto'>
                    <div className={
                        `${
                            isOpen ? '' : 'hidden'
                        } w-full lg:flex lg:items-center lg:w-auto pr-32`
                    }>
                        <NavLinks links={links}/>
                    </div>
                </div>
            </aside>
        </nav>
    );
}

export default Navbar;
