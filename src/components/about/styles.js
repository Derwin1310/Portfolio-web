import styled from "styled-components";
import { Colors } from "../../globalStyles";

export const Desc = styled.div`
    animation-name: fadeDown;
    animation-duration: 3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
    gap: 2rem;

    @media only screen and (max-width: 768px) {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
`

export const DescName = styled.h4`
    font-size:2.3rem;
    color: ${Colors.secondary};
`

export const DescSpan = styled.p`
    color: ${Colors.secondary};
`

export const IconsSection = styled.section`
    animation-name: fadeDown;
    animation-duration: 1s;
    display: flex;
    margin: 0 auto 5rem;
    gap: 1rem;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        width: 100%;
        order: 1;
        overflow: scroll;
        gap: 5rem;
        padding-left: 4rem;
        padding-right: 4rem;
    }
`

export const IconWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    text-align: center;
    width: 20rem;
    /* font-weight: ${props => props.variant === 'weight' ? '600' : '' }; */
`

export const GridTechs = styled.div`
    animation-name: fadeDown;
    animation-duration: 6s;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(100px, 1fr) );
    column-gap: 1rem;
    row-gap: 1rem;
    place-items: center;
    width: 100%;
`

