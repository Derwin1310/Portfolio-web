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
    ${({ variant })  => variant && 'color: var(--light-text)'};

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

export const Sections = styled.section`
    ${({ variant })  => variant && (
        'color: var(--light-text);',
        'background-color: var(--dark);'
    )}
    
	&:nth-child(2n) {
        background-color: var(--bg-color2);
	}
    
	> div {
		color: var(--text-color);
		
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
	}

	@media only screen and (max-width: 768px) {
		max-width: 700px;
	}
`;
