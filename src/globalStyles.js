import styled from 'styled-components';

export const Theme = styled.div.attrs({
	className: 'theme theme--animation',
})``;

export const Subtitles = styled.h2`
	font-size: 2.3rem;
	font-weight: 800;
	position: relative;
	text-align: center;
	margin-bottom: 5rem;
	${({ variant }) => variant && 'color: var(--light-text)'};

	&::before {
		content: '';
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 2rem;
		width: 4rem;
		border-bottom: 0.2rem solid var(--primary);
	}
`;

export const SectionAnimations = styled.section`
	> div {
		${({ variant }) =>
			variant &&
			`
			animation-name: fadeToLeft;
			animation-duration: 2s;
			opacity: 1 !important;
		`}
	}

	&:nth-child(2n) {
		background-color: var(--bg-color2);
		> div {
			${({ variant }) =>
				variant &&
				`
				animation-name: fadeToRight;
				animation-duration: 2s;
			`}
		}
	}

	&:last-child {
		background-color: var(--dark);
		color: var(--light-text);
		> div {
			${({ variant }) =>
				variant &&
				`
				animation-name: fade, fadeIn;
				animation-duration: 2s;
			`}
		}
	}
`;

export const Sections = styled.div`
	color: var(--text-color);
	opacity: 0;
	padding: 5rem 1rem;
	max-width: 1500px;
	margin-left: auto;
	margin-right: auto;
	line-height: 140%;

	h3 {
		font-size: 22px;
	}

	h4 {
		font-size: 20px;
	}

	p,
	span {
		font-size: 16px;
	}

	p,
	span {
		line-height: 120%;
	}

	@media only screen and (max-width: 768px) {
		max-width: 700px;
	}
`;

export const InputWrapper = styled.label`
	width: 100%;
	color: var(--light-text);
	margin-bottom: 0.3rem;
	display: flex;
	flex-direction: column;

	&:nth-child(-n + 3) {
		width: 48%;
	}

	input,
	textarea {
		margin-bottom: 1rem;
		background-color: transparent;
		border: 1px solid var(--primary);
		border-radius: 0.3rem;
		padding: 0.7rem 0.5rem;
		color: var(--light-text);
		resize: none;

		&::placeholder {
			font-family: 'Varela Round', sans-serif;
		}
	}

	@media only screen and (max-width: 768px) {
		&:nth-child(-n + 3) {
			width: 100%;
		}
	}
`;
