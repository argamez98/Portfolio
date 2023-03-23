import React from 'react';

import {Link} from 'react-router-dom';

/** 
* These are the buttons nested inside of NavBar
*/
const NavLinks = ({links}) => {
    return (
        <ul className='flex'>
            {
            links.map((link, index) => <li key={index}
                className='ml-8'>
                <Link to={
                        link.url
                    }
                    className='text-white hover:text-white transition duration-300 ease-in-out'>
                    {
                    link.text
                } </Link>
            </li>)
        } </ul>
    )
}

export default NavLinks;
