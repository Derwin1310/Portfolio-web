import styled from "styled-components";

export const MenuBtn = styled.div`
	background-color: var(--bg-color1);
    border: 2px solid var(--text-color);
	border-radius: 50%;
	box-sizing: content-box;
	display: none;
	height: 40px;
	position: fixed;
	right: 20px;
	top: 40px;
	width: 40px;
	z-index: 500;

    @media only screen and (max-width: 768px) {
		display: block;
	}

    div {
		border: 1px solid var(--text-color);
		left: 50%;
		position: absolute;
		transform: translateX(-50%);
		transition: all .3s ease-in-out;
		width: 50%;
        ${({ variant }) => variant && 'transition: all .3s ease-in-out;'};

		&:nth-child(1) {
			top: 12px;
            ${({ variant }) => variant && `
			    left: 26%;
                transform: rotateZ(-45deg);
			    top: 50%;
            `}
		}

		&:nth-child(2) {
			top: 50%;
            ${({ variant }) => variant && 'opacity: 0;'};
		}

		&:nth-child(3) {
			top: 28px;
            ${({ variant }) => variant && `
                left: 26%;
                transform: rotateZ(45deg);
                top: 50%;
                width: 50%;
            `}
		}
	}
`