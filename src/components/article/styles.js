import styled from 'styled-components';

export const Articles = styled.article`
	display: grid;
	grid-auto-rows: 450px;
	grid-template-columns: repeat(1, 390px);
	grid-gap: 3rem 1rem;
	justify-content: space-evenly;

	@media only screen and (max-width: 768px) {
		display: flex;
		flex-wrap: nowrap;
		gap: 2rem;
		justify-content: space-between;
		overflow-x: scroll;
		overflow-y: hidden;
		width: 100%;
	}
`;

export const ArticlesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: space-around;

	img {
		height: 450px;
		object-fit: cover;
		width: 100%;
	}

	h4 {
		color: var(--primary);
	}

	a {
		color: var(--links);
		text-decoration: none;
	}

	@media only screen and (max-width: 768px) {
		border: 1px solid var(--links);
		border-radius: 5px;
		margin-left: auto;
		margin-right: auto;
		/* overflow-x: hidden; */
		width: 300px;

		h4,
		p {
			padding: 0 1rem;
		}

		img {
			height: 230px;
			width: 300px;
			z-index: -1;
		}
	}
`;

export const ShareIcons = styled.div`
	align-items: center;
	color: var(--secondary);
	display: flex;
	gap: 1rem;

	@media only screen and (max-width: 768px) {
		padding: 0 1rem;
		padding-bottom: 1rem;
	}
`;
