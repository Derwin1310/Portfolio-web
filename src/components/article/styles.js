import styled from 'styled-components';

export const Articles = styled.article`
	display: grid;
	grid-template-columns: repeat(1, 350px);
	gap: 2rem;
	justify-content: space-evenly;

	@media only screen and (max-width: 768px) {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		overflow-x: scroll;
		overflow-y: hidden;
		width: 100%;
	}
`;

export const ArticlesWrapper = styled.div`
	overflow: hidden;

	img {
		height: fit-content;
		object-fit: cover;
		width: 100%;
	}

	@media only screen and (max-width: 768px) {
		border: 1px solid var(--links);
		border-radius: 5px;
		margin-left: auto;
		margin-right: auto;
		width: 300px;

		img {
			height: 230px;
			width: 300px;
			z-index: -1;
		}
	}
`;

export const ArticleDesc = styled.div`
	gap: .5rem;
	display: flex;
	flex-direction: column;
	
	h4 {
		color: var(--primary);
	}

	a {
		color: var(--links);
		text-decoration: none;
	}

	@media only screen and (max-width: 768px) {
		padding: .5rem 1rem;	
	}
`

export const ShareIcons = styled.div`
	align-items: center;
	color: var(--secondary);
	display: flex;
	gap: 1rem;

	@media only screen and (max-width: 768px) {
		/* padding: 0 1rem;
		padding-bottom: 1rem; */
	}
`;
