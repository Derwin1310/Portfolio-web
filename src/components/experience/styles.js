import styled from "styled-components";
import { Colors, Fonts } from "/src/globalStyles";

export const Quote = styled.q`
    line-height: ${Fonts.height};
	display: block;
	text-align: center;
	font-size: ${Fonts.h4Size};

	@media only screen and (max-width: 768px) {
		margin-left: auto;
		margin-right: auto;
	}
`

export const SectionTitle = styled.h3`
	max-width: 1200px;
	margin: 4rem auto 0;
`

export const Careers_Exp = styled.section`
	display: flex;
	padding-bottom: 3rem;
	max-width: 1200px;
	margin: 2rem auto 0;
	gap: 3rem;
	border-bottom: ${props => props.variant === 'border-b' && '2px solid var(--links)'};

	@media only screen and (max-width: 768px) {
		flex-direction: column;
		gap: 1rem;
		margin-left: 1rem;
	}
`

export const CourseAndJob = styled.h4`
	width: 13rem;
	color: ${Colors.primary};
	margin-bottom: 1rem;
`

export const Organization = styled.h4`
	color: ${Colors.secondary};
	margin-bottom: 1rem;
`