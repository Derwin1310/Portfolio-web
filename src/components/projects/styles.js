import styled from "styled-components";

export const ProjectsWrapper = styled.section.attrs({
	className: '| ProjectsWrapper |'
})`
    display: grid;
    grid-template-columns: repeat(1, 350px);
    gap: 2rem;
    justify-content: center;

    img {
        height: 300px;
        object-fit: cover;
        width: 100%;
        z-index: -1;
    }

    @media only screen and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        overflow: scroll;
        overflow-y: hidden;
    }
`

export const Projects = styled.article.attrs({
	className: '| Projects |'
})`
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
        overflow: hidden;

        img {
            height: 230px;
            width: 300px;
        }
    }
`
export const ProjectsDesc = styled.div.attrs({
	className: '| ProjectsDesc |'
})`
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
        padding: .5rem 1rem;

        span {
            color: var(--primary);
        }

        a {
            color: var(--links);
            text-decoration: none;
        }
    }
`

export const ViewSite  = styled.a.attrs({
	className: '| ViewSite |'
})`
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
