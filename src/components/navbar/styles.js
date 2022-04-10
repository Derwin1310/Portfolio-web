import styled from "styled-components";

export const NavbarBg = styled.div`
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    background-color: #000000bb;
    z-index: 100;
    box-shadow: 0px 10px 10px  #0007;
`

export const Navigator = styled.nav`
    animation-name: fade, fadeIn;
    animation-duration: 3s;
    display: flex;
    justify-content: space-between;
    height: 6vh;
    padding: 0.5rem 1rem;
    width: 1600px;

    @media only screen and (max-width: 768px) {
        background-color: #00000088;
        background: linear-gradient(180deg, #0C002B, #110239);
        height: 100%;
        width: 100%;
        /* display: block; */
        display: none;
        position: fixed;
        padding-top: 2rem;
        top: 0;
    }
`

export const NavWrapper = styled.ul`
    align-items: center;
    display: flex;
    gap: 0.5rem;

    @media only screen and (max-width: 768px) {
        flex-direction: column;;
        gap: 2rem;
    }
`

export const NavLogo = styled.img`
    width: 2rem;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
        width: 4rem;
    }
`

export const Link = styled.a`
    font-size: 1.2rem;
    color: #fff;
    text-decoration: none;

    &:hover {
        color: var(--primary-color);
        transition: color .5s;
    }

    @media only screen and (max-width: 768px) {
        font-size: 2rem;
    }

`

export const NavToggle = styled.div`
    align-items: center;
    border: 2px solid var(--primary-color);
    background-color: #420A1A;
    border-radius: 3rem;
    color: var(--primary-color);
    cursor: pointer;
    display: flex;
`