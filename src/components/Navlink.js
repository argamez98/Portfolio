import React from 'react';

import {Link} from 'react-router-dom';

/** 
* These are the buttons nested inside of NavBar
*/
const NavLinks = ({links}) => {
    return (
        <ul className='space-y-2 font-medium'>
            {
            links.map((link, index) => <li key={index}
                className='ml-8'>
                <Link to={
                        link.url
                    }
                    className='space-y-2 text-blue-500 hover:text-white hover:bg-slate-400 transition duration-300 ease-in-out'>
                    {
                    link.text
                } </Link>
            </li>)
        } </ul>
    )
}

export default NavLinks;
