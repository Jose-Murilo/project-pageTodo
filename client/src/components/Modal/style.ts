import styled from "styled-components";

type ModalProps = {
    modal: boolean;
}

export const Container = styled.div<ModalProps>`
    display: ${props => props.modal ? 'flex' : 'none'};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    
    .backdrop {
        background: rgba(0, 0, 0, .7);
        width: 100%;
        height: 100%;
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        backdrop-filter: blur(6px);
    }
    
    .modal-content {
        display: flex;
        flex-direction: column;
        background: ${props => props.theme["--gray-800"]};
        z-index: 2;
        margin: auto;
        padding-inline: 2rem;
        max-width: 700px;
        height: 500px;
        border-radius: 20px;
    }
`