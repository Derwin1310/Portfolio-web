import styled from "styled-components";

export const ModalWrapper = styled.div.attrs({
	className: '| ModalWrapper |'
})`
    align-items: center;
    animation-name: fade;
	animation-duration: 1.5s;
    background-color: #00000050;
    color: white;
    display: flex;
    height: 100%;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5000;
`

export const ModalInner = styled.div.attrs({
	className: '| ModalInner |'
})`
    animation-name: fade;
	animation-duration: .5s;
    border-radius: 8px;
    background-color: var(--modal);
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    gap: .5rem;
    height: 420px;
    justify-content: space-between;
    min-height: 390px;
    min-width: 280px;
    padding: 1rem;
    position: fixed;
    top: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    left: 50%;
    width: 350px;
    z-index: 6000;

    h3 {
        animation-name: fadeIn;
	    animation-duration: 3s;
        font-size: 22px;
        color: var(--primary);
    }

    p,
    span {
        animation-name: fadeIn;
	    animation-duration: 3s;
        font-size: 16px;
        line-height: 120%;
    }
`