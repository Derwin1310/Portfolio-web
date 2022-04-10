import styled from "styled-components";
import { getTheme } from "./components/helpers";

export const Subtitles = styled.h2`
    font-size: 2.3rem;
    font-weight: 800;
    position: relative;
	text-align: center;
	margin-bottom: 5rem;
	
    &::before {
        content: '';
        position: absolute;
		left: 50%;
		transform: translateX(-50%);
        top: 2rem;
        width: 4rem;
        border-bottom: 0.2rem solid var(--primary-color);
    }
`

export const Sections = styled.section`
    /* background-color: ${props => props.variant === 'bgc-2' && '#0C002B'}; */
    &:nth-child(2n) {
        background-color: var(--bg-color2);
    }

    > div {
        color: var(--text-color);
        padding: 5rem 1rem;
        max-width: 1500px;
        margin-left: auto;
        margin-right: auto;
        line-height: 140%;

    }

    @media only screen and (max-width: 768px) {
	    max-width: 700px;
    }
`


export const Theme = styled.div.attrs({
    className: 'theme theme--animation'
})``

export const Colors = getTheme() === 'dark' ?  {
    primary: '#DB1A6A',
    secondary: '#009ADA',
    bgLight: '#fff',
    bgDark: '#0C002B',
    tertiary: '#fff',
} : {
    primary: '#DB1A6A',
    secondary: '#009ADA',
    bgLight: '#F5F5F5',
    bgDark: '#110239',
    tertiary: '#000',
}

export const Fonts = {
    pSize: '16px',
    h3Size: '22px',
    h4Size: '20px',
    height: '120%',
    family: true ? 'Varela Round' : 'sans-serif',
    weight: true ? '600' : '900',   
}