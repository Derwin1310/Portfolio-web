import styled from 'styled-components';

export const TextWrapper = styled.div.attrs({
	className: '| TextWrapper |'
})`
	color: var(--light-text);
	display: flex;
	flex-direction: column;
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

export const SocialProfiles = styled.div.attrs({
	className: '| SocialProfiles |'
})`
	color: var(--light-text);
	display: flex;
	flex-direction: row;
	gap: 2rem;
	justify-content: center;
	margin: 2rem auto 0;

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

export const Form = styled.form.attrs({
	className: '| Form |'
})`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 2rem auto 5rem;

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

export const Submit = styled.button.attrs({
	className: '| Submit |'
})`
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

export const Copyright = styled.div.attrs({
	className: '| Copyright |'
})`
	color: var(--secondary);
	display: flex;
	flex-direction: column;
    align-items: center;
	gap: 10px;

	img {
		width: 140px;
	}
`


