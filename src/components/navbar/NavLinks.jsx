import React, { useContext } from 'react'
import { langContext } from '../helpers/langContext';
import { Link } from './styles';

export const NavLinks = () => {
    const {language} = useContext(langContext);
    
    const links = language.navbar;

    return (  
        links.map(({href, name}) => (
            <li key={name}>
                <Link href={href}>{name}</Link>
            </li> 
        ))   
    );
};
