import styled from 'styled-components'

export const HomePage = styled.div`
	align-items: center;
	background-color: #000000bb;
	display: flex;
	color: var(--light-text);
	flex-direction: column;
	height: 94vh;
	justify-content: space-around;
	padding: 0 1rem;
	width: 100%;

	&::before {
		content: '';
		background-image: url('https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/galaxyWallpaper.webp');
		position: absolute;
		height: 100vh;
		top: 0;
		width: 100%;
		z-index: -1;
	}

	@media only screen and (max-width: 768px) {
		box-shadow: 0px 20px 20px #0007;
		height: 100vh;
		justify-content: space-between;
	}
`

export const Header = styled.header`
	animation-name: fade, fadeIn;
	animation-duration: 2s;
	display: flex;
	flex-direction: column;
	padding-top: 5rem;
	font-size: 4rem;
	line-height: 120%;
	max-width: 1000px;

	@media only screen and (max-width: 768px) {
		height: 50%;
		gap: 1rem;
		max-width: 768px;
		margin-top: 5rem;
	}

	@media only screen and (max-width: 480px) {
		height: 100%;
	}
`

export const Logo = styled.img`
	height: 80px;
	width: 80px;

	@media only screen and (max-width: 1280px) {
		height: 70px;
		width: 70px;
	}

	@media only screen and (max-width: 768px) {
		height: 60px;
		width: 60px;
	}
`

export const Name = styled.h1`
	display: inline;
	font-size: 5rem;
	font-weight: 100;
	line-height: 120%;

	@media only screen and (max-width: 1280px) {
		font-size: 4rem;
	}

	@media only screen and (max-width: 768px) {
		font-size: 3rem;
	}

	@media only screen and (max-width: 480px) {
		font-size: 2.5rem;
	}
`

export const Slogan = styled.q`
	@media only screen and (max-width: 1280px) {
		font-size: 3.5rem;
	}

	@media only screen and (max-width: 768px) {
		font-size: 2rem;
		line-height: 120%;
	}
`

export const Div = styled.div`
	align-items: center;
	display: flex;
	gap: 2rem;

	@media only screen and (max-width: 768px) {
		gap: 0.5rem;
	}
`

export const Button = styled.a`
	animation-name: fade, fadeIn;
	animation-duration: 2s;
	background-color: transparent;
	border: 3px solid var(--light-text);
	border-radius: 5px;
	color: var(--light-text);
	cursor: pointer;
	font-size: 1.5rem;
	padding: 0.8rem 4rem;
	text-decoration: none;
	transition: all 0.1s;

	&:hover {
		transform: scale(1.1);
	}

	&:active {
		transform: scale(1);
	}

	@media only screen and (max-width: 768px) {
		border-color: var(--primary);
		color: var(--primary);
		font-size: 1.5rem;
		padding: 0.8rem 0;
		margin-bottom: 2rem;
		text-align: center;
		width: 100%;

		&:hover {
			transform: none;
		}

		&:active {
			transform: scale(1.1);
		}
	}

    @media only screen and (max-width: 480px) {
        margin: 2rem 0;
    }
`
