import React from 'react'

export const NavLinks = () => {
    const links = [
        {
            href: '#about',
            name: 'About',
        },
        {
            href: '#projects',
            name: 'Projects',
        },
        {
            href: '#experience',
            name: 'Experience',
        },
        {
            href: '#article',
            name: 'Articles',
        },
        {
            href: '#contact',
            name: 'Contact',
        }
    ]


    return (  
        links.map(({href, name}) => (
            <li key={name}>
                <a className='navbar__link' href={href}>{name}</a>
            </li> 
        ))     
    )
}
