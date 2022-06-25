import styled from "styled-components";

export const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #00000050;
    color: white;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5000;
    animation-name: fade;
	animation-duration: 1.5s;
`

export const ModalInner = styled.div`
    animation-name: fade;
	animation-duration: .5s;
    justify-content: space-between;
    padding: 1rem;
    text-align: center;
    gap: .5rem;
    color: var(--text-color);
    min-height: 390px;
    min-width: 280px;
    width: 350px;
    height: 420px;
    border-radius: 8px;
    background-color: var(--modal);
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 6000;

    h3 {
        font-size: 22px;
        color: var(--primary);
        animation-name: fadeIn;
	    animation-duration: 3s;
    }

    p,
    span {
        font-size: 16px;
        line-height: 120%;
        animation-name: fadeIn;
	    animation-duration: 3s;
    }
`