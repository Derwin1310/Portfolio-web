import styled from "styled-components";

export const ProjectsWrapper = styled.section `
    display: grid;
    grid-auto-rows: 300px;
    grid-template-columns: repeat(1, 390px);
    gap: 2rem;
    justify-content: center;
    width: 100%;

    img {
        height: 450px;
        object-fit: cover;
        width: 100%;
        z-index: -1;
    }

    @media only screen and (max-width: 768px) {
        display: flex;
        gap: 2rem;
        justify-content: space-between;
        flex-wrap: nowrap;
        overflow: scroll;
        overflow-y: hidden;
    }
`

export const Projects = styled.article`
    @media only screen and (min-width: 769px) {
        align-items: center;
        display: flex;
        flex-direction: column;
        position: relative;
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
        align-items: center;
        border: 1px solid var(--links);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
        width: 300px;

        img {
            height: 230px;
            width: 300px;
        }
    }
`
export const ProjectsDesc = styled.div`
    @media only screen and (min-width: 769px) {
        opacity: 0;
        position: absolute;
        top: 2rem;

        h4 {
            font-size: 22px;
        }

        span {
            color: var(--primary);
            display: block;
            margin-bottom: 3rem;
        }

        p {
            display: none;
        }
    }

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        padding: 1rem;

        span {
            color: var(--primary);
        }

        a {
            color: var(--links);
            text-decoration: none;
        }
    }
`

export const ViewSite  = styled.a`
    @media only screen and (min-width: 769px) {
        border: 3px solid var(--primary);
        border-radius: 3px;
        color: var(--text-color);
        padding: .2rem 1.5rem;
        text-decoration: none;
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }
`
