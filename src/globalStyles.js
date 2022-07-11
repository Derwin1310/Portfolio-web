import styled from 'styled-components';

export const Theme = styled.div.attrs({
	className: 'theme theme--animation',
})``;

export const Subtitles = styled.h2`
	font-size: 2.3rem;
	font-weight: 800;
	margin-bottom: 5rem;
	position: relative;
	text-align: center;
	${({ variant }) => variant && 'color: var(--light-text)'};

	&::before {
		content: '';
		border-bottom: 0.2rem solid var(--primary);
		left: 50%;
		position: absolute;
		transform: translateX(-50%);
		top: 2rem;
		width: 4rem;
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
	line-height: 140%;
	max-width: 1000px;
	margin-left: auto;
	margin-right: auto;
	opacity: 0;
	padding: 5rem 1rem;

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
	color: var(--light-text);
	display: flex;
	flex-direction: column;
	margin-bottom: 0.3rem;
	width: 100%;

	&:nth-child(-n + 3) {
		width: 48%;
	}

	input,
	textarea {
		background-color: transparent;
		border: 1px solid var(--primary);
		border-radius: 0.3rem;
		color: var(--light-text);
		margin-bottom: 1rem;
		padding: 0.7rem 0.5rem;
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
