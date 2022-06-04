import styled from 'styled-components';

export const TextWrapper = styled.div`
	max-width: 768px;
	display: flex;
	flex-direction: column;
	text-align: center;
	gap: 2rem;
	margin-left: auto;
	margin-right: auto;
	color: var(--light-text);

	@media only screen and (max-width: 768px) {
		p {
			color: var(--secondary);
		}
	}
`;

export const SocialProfiles = styled.div`
	flex-direction: row;
	justify-content: center;
	margin: 2rem auto 0;
	color: var(--light-text);
	max-width: 768px;
	display: flex;
	gap: 2rem;

	section {
		display: flex;
		align-items: flex-end;
		gap: 0.3rem;
	}

	a {
		text-decoration: none;
		color: var(--secondary);
		font-weight: 600;
	}

	@media only screen and (max-width: 768px) {
		flex-wrap: wrap;
	}
`;

export const Form = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	max-width: 768px;
	margin: 2rem auto 0;

	h3 {
		color: var(--primary);
		width: 100%;
		margin-bottom: 0.6rem;
	}
`;

export const Submit = styled.button`
	border: 3px solid var(--primary);
	background-color: transparent;
	color: var(--primary);
	width: 100%;
	padding: 0.5rem 3rem;
	font-size: 1.3rem;
	font-family: 'Varela Round', sans-serif;
	border-radius: 0.3rem;
	cursor: pointer;
`;

export const Copyright = styled.figcaption`
    margin: 8rem auto 0;
    text-align: center;
`