import styled from "styled-components";

export const HomePage = styled.div`
    background-color: #000000bb;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 94vh;
    justify-content: space-around;
    width: 100%;
    padding: 0 1rem;
    color: var(--light-text);

    &::before {
        content: '';
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: -1;
        position: absolute;
        background-image: url('https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/galaxyWallpaper.webp');
    }

    @media only screen and (max-width: 768px) {
        height: 100vh;
        justify-content:space-between;
        box-shadow: 0px 20px 20px  #0007;
    }
`

export const Button = styled.a`
    animation-name: fade, fadeIn;
    animation-duration: 3s;
    text-decoration: none;
    background-color: transparent;
    color: var(--light-text);
    border: 3px solid var(--light-text);
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0.8rem 4rem;
    transition: all .1s;

    &:hover {
        transform: scale(1.1);
    }
    
    &:active {
        transform: scale(1);
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: .8rem 0;
        text-align: center;
        margin-bottom: 2rem;
        font-size: 1.5rem;
        color: var(--primary);
        border-color: var(--primary);

        &:hover {
            transform: none;
        }

        &:active {
            transform: scale(1.1);
        }

        @media only screen and (max-width: 480px) {
            margin: 2rem 0
        }
    }
`

export const Header = styled.header`
    animation-name: fade, fadeIn;
    animation-duration: 3s;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    font-size: 5rem;
    line-height: 120%;

    @media only screen and (max-width: 768px) {
        height: 50%;
        max-width: 768px;
        margin-top: 5rem;
        justify-content: space-between;
    }

    @media only screen and (max-width: 480px) {
        height: 100%;
    }
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media only screen and (max-width: 768px) {
        gap: .5rem;
    }
`

export const Name = styled.h1`
    font-size: 6rem;
    display: inline;
    font-weight: 100;

    @media only screen and (max-width: 768px) {
        line-height: 120%;
        font-size: 3rem;
    }

    @media only screen and (max-width: 480px) {
        line-height: 120%;
        font-size: 2.5rem;
    }
`

export const Slogan = styled.q`
    @media only screen and (max-width: 768px) {
        font-size: 2rem;
        line-height: 120%;
    }

    @media only screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const Logo = styled.img`
    width: 90px;
    height: 100px;

    @media only screen and (max-width: 768px) {
        height: 60px;
        width: 60px;
    }
`

