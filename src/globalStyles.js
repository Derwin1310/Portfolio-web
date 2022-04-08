import styled from "styled-components";

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
    color: var(--text-color);
    padding: 5rem 1rem;
    max-width: 1500px;
	margin-left: auto;
	margin-right: auto;
	line-height: 140%;

    @media only screen and (max-width: 768px) {
	    max-width: 700px;
    }
`

export const Theme = styled.div`
	opacity: 0;
    visibility: hidden;

	&--animation {
		opacity: 1;
		visibility: visible;
		transition: all 500ms linear;
	}
`

export const Colors = {
    primary: '#DB1A6A',
    secondary: '#009ADA',
    dark: '#000',
    light: '#fff',
    bgLight1: '#fff',
    bgLight2: '#F5F5F5',
    bgDark1: '#0C002B',
    bgDark2: '#110239',
}

export const Fonts = {
    pSize: '16px',
    h3Size: '22px',
    h4Size: '20px',
    familyPrimary: 'Varela Round',
    familySecondary: 'sans-serif',
    height: '120%',
    weight1: '600',
    weight2: '900'    
}