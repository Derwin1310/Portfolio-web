import React, { useContext } from 'react'
import { langContext } from '../helpers/langContext';

export const NavLinks = () => {
    const {language} = useContext(langContext);
    
    const links = language.navbar;

    return (  
        links.map(({href, name}) => (
            <li key={name}>
                <a className='navbar__link' href={href}>{name}</a>
            </li> 
        ))   
    );
};
