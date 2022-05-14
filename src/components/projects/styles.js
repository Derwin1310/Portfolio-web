import styled from "styled-components";
import { Colors } from "/src/globalStyles";

export const ProjectsWrapper = styled.section `
    display: grid;
    width: 100%;
    grid-auto-rows: 300px;
    grid-template-columns: repeat(1, 390px);
    gap: 2rem;
    justify-content: center;

    img {
        width: 100%;
        height: 450px;
        object-fit: cover;
    }

    @media only screen and (max-width: 768px) {
        display: flex;
        gap: 2rem;
        flex-wrap: nowrap;
        overflow: scroll;
        overflow-y: hidden;
        justify-content: space-between;
    }
`

export const Projects = styled.article`
    @media only screen and (min-width: 769px) {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        
        &:hover img {
            opacity: 0;
            transition: all .5s;
        }

        &:hover div {
            opacity: 1;
            transition: all 2s;
        }
    }

    @media only screen and (max-width: 768px) {
        border-radius: 5px;
        border: 1px solid var(--links);
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 300px;
        margin-left: auto;
        margin-right: auto;

        img {
            width: 300px;
            height: 230px;
        }
    }
`
export const ProjectsDesc = styled.div`
    @media only screen and (min-width: 769px) {
        position: absolute;
        top: 2rem;
        opacity: 0;

        h4 {
            font-size: 22px;
        }

        span {
            display: block;
            color: var(--primary-color);
            margin-bottom: 3rem;
        }

        p {
            display: none;
        }
    }

    @media only screen and (max-width: 768px) {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: .5rem;

        span {
            color: var(--primary-color);
        }

        a {
            text-decoration: none;
            color: var(--links);
        }
    }
`

export const ViewSite  = styled.a`
    @media only screen and (min-width: 769px) {
        text-decoration: none;
        color: var(--text-color);
        border: 3px solid var(--primary-color);
        padding: .2rem 1.5rem;
        border-radius: 3px;
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }
`
