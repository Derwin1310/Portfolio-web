import styled from "styled-components";

export const Articles = styled.article`
    display: grid;
    grid-auto-rows: 450px;
    grid-template-columns: repeat(auto-fill, 390px);
    grid-gap: 3rem 1rem;
    justify-content: space-evenly;

    @media only screen and (max-width: 768px) {
        display: flex;
        gap: 2rem;
        overflow: scroll;
        width: 100%;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
`

export const ArticlesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1rem;
    
    img {
        height: 450px;
    }

    h4 {
        color: var(--primary-color) ;
    }

    a {
        text-decoration: none;
        color: var(--links);
    }

    @media only screen and (max-width: 768px) {
        width: 300px;
        border: 1px solid var(--links);
        border-radius: 5px;
        margin-left: auto;
        margin-right: auto;

        h4,
        p {
            padding: 0 1rem;
        }

        img {
            width: 300px;
            height: 230px;
        }
    }
`

export const ShareIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--secondary-color);

    @media only screen and (max-width: 768px) {
        padding: 0 1rem;
        padding-bottom: 1rem;
    }
`