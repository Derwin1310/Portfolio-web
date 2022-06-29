import styled from 'styled-components'

export const Quote = styled.q`
	display: block;
	text-align: center;
	max-width: 75ch;
	margin: 0 auto;
`

export const SectionTitle = styled.h3`
	max-width: 1200px;
	${({ variant }) =>
		variant
			? `
		border-top: 2px solid var(--links);
		margin: 0rem auto;
		padding-top: 4rem;
		`
			: `
		margin: 4rem auto 0
		`
	};
`

export const JobsAndEducation = styled.article`
	display: flex;
	gap: 3rem;
	max-width: 1200px;
	margin: 2rem auto 0;
	padding-bottom: 3rem;

	@media only screen and (max-width: 768px) {
		flex-direction: column;
		gap: 1rem;
		margin-left: 1rem;
	}
`

export const CourseAndJob = styled.h4`
	color: var(--primary);
	margin-bottom: 1rem;
	width: 13rem;
`

export const Organization = styled.h4`
	color: var(--secondary);
	margin-bottom: 1rem;
`
