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
        /* background-color: #00000088; */
        animation-name: ${({variant}) => variant ? 'fadeRight' : 'fadeExit' };
        animation-duration: 1s;
        background-color: #0C002Bee;
        height: 100%;
        width: 100%;
        visibility: ${({variant}) => variant ? 'visible' : 'hidden'};
        transition: all .7s ease-in-out;
        position: fixed;
        padding-top: 2rem;
        top: 0;
        flex-direction: column;
        justify-content: center;
    }
`

export const NavWrapper = styled.ul`
    align-items: center;
    display: flex;
    gap: 0.5rem;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
        margin: 0 auto;
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

export const Lang_Theme = styled.div`
    align-items: center;
    display: flex;
    gap: 2rem;

    .css-qc6sy-singleValue {
        color: #fff;
    }

    .css-1pahdxg-control,
    .css-1s2u09g-control {
        background-color: transparent;
        border: none;
        box-shadow: none;
    }

    .css-319lph-ValueContainer,
    .css-tlfecz-indicatorContainer,
    .css-1gtu0rj-indicatorContainer {
        padding: 0;
    }

    .css-tlfecz-indicatorContainer {
        color: var(--primary-color)
    }

    .css-1gtu0rj-indicatorContainer {
        color: #420A1A;
    }

    .css-2613qy-menu {
        border: none;
    }

    .css-1okebmr-indicatorSeparator {
        display: none;
    }

    @media only screen and (max-width: 768px) {
        margin-top: 2rem;
        flex-direction: column;

        .css-qc6sy-singleValue {
            font-size: 1.5rem;
        }
    }
`

export const ThemeSelect = styled.div`
    align-items: center;
    border: 2px solid ${({variant}) => variant ? 'var(--bg-color1)' : 'var(--primary-color)'};
    background-color: ${({variant}) => variant ? 'var(--links)' : '#420A1A' };
    border-radius: 3rem;
    color: var(--primary-color);
    color: ${({variant}) => variant ? 'var(--bg-color1)' : 'var(--primary-color)'};
    ${({variant}) => variant && 'flex-direction: row-reverse'};
    cursor: pointer;
    display: flex;

    span {
        font-size: 1.3rem;
        margin: 3px .5rem 0;
    }

    img {
        border-radius: 50%;
        outline: 2px solid ${({variant}) => variant ? 'var(--bg-color1)' : 'var(--primary-color)'};
        padding: 6px;
    }
`