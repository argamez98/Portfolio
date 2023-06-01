import React from 'react';

import {Link} from 'react-router-dom';

/** 
* These are the buttons nested inside of NavBar
*/
const NavLinks = ({links}) => {
    return (
        <ul className='space-y-12'>
            {
            links.map((link, index) => <li key={index}
                className='ml-8'>
                <Link to={
                        link.url
                    }
                    className='space-y-2 text-white hover:text-black hover:bg-slate-400  transition duration-300 ease-in-out'>

                    <span class='material-symbols-outlined inline pr-3'>
                    {
                        link.logo
                    }</span>
                    {
                    link.text
                } </Link>
            </li>)
        } </ul>
    )
}

export default NavLinks;
