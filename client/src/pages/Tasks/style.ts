import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme["--gray-900"]};
    color: white;
    display: grid;
    place-content: center-start;
    min-height: calc(100vh - 12.6rem);

    .containerCard {
        padding: 2rem;
        text-align: center;
    }

    h1 {
        padding-block: 2rem;
    }

    .containerTask {
        display: flex;
        padding-top: 2rem;
        justify-content: center;
        flex-wrap: wrap;
        gap: 3rem;
    }
    
    .cardTask {
        width: 27rem;
        height: 27rem;
        position: relative;
        
        background: ${props => props.theme["--gray-800"]};
        border-radius: 1rem;

        h2 {
            color: white;
            font-size: 1.9rem;
        }

        .descriptions {
            color: white;
            max-width: 27rem;
            word-wrap: break-word;
        }

        transition: all 300ms;
    }
    
    .containerTitle {
        width: 100%;
        max-height: 5rem;
        
        padding: 1rem 1rem;

        background: ${props => props.theme["--gray-700"]};
        border-radius: .8rem;
        margin-bottom: 1rem;
        overflow: hidden;
    }

    .viewMore {
        width: 100%;
        position: absolute;
        border-radius: .8rem;
        width: 100%;
        display: flex;
        background: ${props => props.theme["--gray-700"]};
        padding-inline: 1rem;
        bottom: 0;
    }

    .buttonViewMore {
        background: ${props => props.theme["--gray-700"]};
        border: 0;
        color: white;
        cursor: pointer;
        padding: 1rem;
        border-radius: 1rem;
    }

    .trashTask {
        position: absolute;
        top: 1.2rem;
        cursor: pointer;
        right: .8rem;
    }

    .containerEmpty {
        margin-top: 7rem;

        img {
            margin-bottom: 1.2rem;
        }
    }
`

export const EmptyText = styled.p`
    color: ${props => props.theme["--gray-400"]};
`

type ModalProps = {
    modal: boolean;
}

export const Modal = styled.div<ModalProps>`
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