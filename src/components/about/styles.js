import styled from "styled-components";

export const Desc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
    gap: 1rem;

    @media only screen and (max-width: 768px) {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
`

export const DescName = styled.h4`
    font-size:2.3rem;
    color: var(--secondary);
`

export const DescSpan = styled.p`
    color: var(--secondary);
`

export const IconsSection = styled.section`
    display: flex;
    margin: 0 auto 5rem;
    gap: 1rem;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        width: 100%;
        order: 1;
        overflow: scroll;
        overflow-y: hidden;
        gap: 5rem;
        padding: 0 4rem;
    }
`

export const IconWrapper = styled.div`
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

export const GridTechs = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(100px, 1fr) );
    column-gap: 1rem;
    row-gap: 1rem;
    place-items: center;
    width: 100%;
`