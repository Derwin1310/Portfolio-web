import styled from "styled-components";

export const NavbarBg = styled.div`
    background-color: #000000bb;
    box-shadow: 0px 10px 10px  #0007;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    position: sticky;
    top: -1px;
    z-index: 100;
`

export const Navigator = styled.nav`
    animation-name: fade, fadeIn;
    animation-duration: 3s;
    display: flex;
    height: 6vh;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    width: 1600px;

    @media only screen and (max-width: 768px) {
        animation-name: ${({variant}) => variant ? 'fadeToLeft' : 'fadeExit' };
        animation-duration: 1s;
        background-color: #0C002Bee;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        padding-top: 2rem;
        position: fixed;
        top: 0;
        transition: all .7s ease-in-out;
        visibility: ${({variant}) => variant ? 'visible' : 'hidden'};
        width: 100%;
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
    cursor: pointer;
    width: 2rem;

    @media only screen and (max-width: 768px) {
        width: 4rem;
    }
`

export const Link = styled.a`
    color: var(--light-text);
    font-size: 1.2rem;
    text-decoration: none;

    &:hover {
        color: var(--primary);
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
        color: var(--light-text);
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
        color: var(--primary);
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
        flex-direction: column;
        margin-top: 2rem;

        .css-qc6sy-singleValue {
            font-size: 1.5rem;
        }
    }
`

export const ThemeSelect = styled.div`
    align-items: center;
    border: 2px solid ${({variant}) => variant ? 'var(--light-text)' : 'var(--primary)'};
    background-color: ${({variant}) => variant ? 'var(--links)' : '#420A1A' };
    border-radius: 3rem;
    color: ${({variant}) => variant ? 'var(--light-text)' : 'var(--primary)'};
    cursor: pointer;
    display: flex;
    ${({variant}) => variant && 'flex-direction: row-reverse'};

    span {
        font-size: 1.3rem;
        margin: 3px .5rem 0;
    }

    img {
        border-radius: 50%;
        padding: 6px;
        outline: 2px solid ${({variant}) => variant ? 'var(--light-text)' : 'var(--primary)'};
    }
`