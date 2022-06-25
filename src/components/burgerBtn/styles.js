import styled from "styled-components";

export const MenuBtn = styled.div`
    border: 2px solid var(--text-color);
	position: fixed;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	right: 20px;
	top: 40px;
	display: none;
	box-sizing: content-box;
	background-color: var(--bg-color1);
	z-index: 500;

    @media only screen and (max-width: 768px) {
		display: block;
	}

    div {
		position: absolute;
		border: 1px solid var(--text-color);
		width: 50%;
		left: 50%;
		transform: translateX(-50%);
		transition: all .3s ease-in-out;
        ${({ variant }) => variant && 'transition: all .3s ease-in-out;'};

		&:nth-child(1) {
			top: 12px;
            ${({ variant }) => variant && `
                transform: rotateZ(-45deg);
			    top: 50%;
			    left: 26%;
            `}
		}

		&:nth-child(2) {
			top: 50%;
            ${({ variant }) => variant && 'opacity: 0;'};
		}

		&:nth-child(3) {
			top: 28px;
            ${({ variant }) => variant && `
                width: 50%;
                left: 26%;
                top: 50%;
                transform: rotateZ(45deg);
            `}
		}
	}
`