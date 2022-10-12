import styled from "styled-components";

export const Desc = styled.div.attrs({
	className: '| Desc |'
})`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 3rem;
    line-height: normal;

    h4 {
        color: var(--secondary);
        font-size:2.3rem;
    }

    span {
        color: var(--secondary);
    }

    @media only screen and (max-width: 768px) {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
`

export const IconsSection = styled.section.attrs({
	className: '| IconsSection |'
})`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin: 0 auto 5rem;

    @media only screen and (max-width: 768px) {
        gap: 5rem;
        order: 1;
        overflow-x: scroll;
        overflow-y: hidden;
        padding: 0 4rem;
        width: 100%;
    }
`

export const IconWrapper = styled.div.attrs({
	className: '| IconWrapper |'
})`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    text-align: center;
    width: 20rem;

    h3 {
        font-weight: 600;
    }
`

export const GridTechs = styled.div.attrs({
	className: '| GridTechs |'
})`
    column-gap: 1rem;
    display: grid;
    grid-template-columns: repeat( 5, minmax(100px, 1fr) );
    place-items: center;
    row-gap: 2rem;
    width: 100%;

    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat( 3, minmax(100px, 1fr) );
    }

    @media only screen and (max-width: 488px) {
        grid-template-columns: repeat( 2, minmax(100px, 1fr) );
    }
`