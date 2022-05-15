import styled from "styled-components";

export const Quote = styled.q`
	display: block;
	text-align: center;
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
	${({variant}) => variant && 'border-bottom: 2px solid var(--links)'};

	@media only screen and (max-width: 768px) {
		flex-direction: column;
		gap: 1rem;
		margin-left: 1rem;
	}
`

export const CourseAndJob = styled.h4`
	width: 13rem;
	color: var(--primary);
	margin-bottom: 1rem;
`

export const Organization = styled.h4`
	color: var(--secondary);
	margin-bottom: 1rem;
`