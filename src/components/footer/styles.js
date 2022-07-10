import styled from 'styled-components';

export const TextWrapper = styled.div`
	color: var(--light-text);
	display: flex;
	flex-direction: column;
	max-width: 768px;
	gap: 2rem;
	margin-left: auto;
	margin-right: auto;
	text-align: center;

	@media only screen and (max-width: 768px) {
		p {
			color: var(--secondary);
		}
	}
`;

export const SocialProfiles = styled.div`
	color: var(--light-text);
	display: flex;
	flex-direction: row;
	gap: 2rem;
	justify-content: center;
	margin: 2rem auto 0;
	max-width: 768px;

	section {
		align-items: flex-end;
		display: flex;
		gap: 0.3rem;
	}

	a {
		color: var(--secondary);
		font-weight: 600;
		text-decoration: none;
	}

	@media only screen and (max-width: 768px) {
		flex-wrap: wrap;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	max-width: 768px;
	margin: 2rem auto 0;

	h3 {
		color: var(--primary);
		margin-bottom: 0.6rem;
		width: 100%;
	}

	form {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		max-width: 768px;
		margin: 2rem auto 0;

		h3 {
			color: var(--primary);
			margin-bottom: 0.6rem;
			width: 100%;
		}
	}
`;

export const Submit = styled.button`
	background-color: transparent;
	border: 3px solid var(--primary);
	border-radius: 0.3rem;
	color: var(--primary);
	font-size: 1.3rem;
	padding: 0.5rem 3rem;
	transition: all 0.1s;
	width: 100%;
	cursor: pointer;
	animation-name: fadeIn;
	animation-duration: 3s;

	&:active {
		transform: scale(.9);
	}
`;

export const Copyright = styled.div`
	color: var(--secondary);
	display: flex;
	flex-direction: column;
    margin: 8rem auto 0;
    align-items: center;
	gap: 10px;

	a {
		width: 140px;
	}

	img {
		width: 140px;
	}
`


