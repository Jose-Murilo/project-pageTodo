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
        padding-block: 1rem;
    }

    .searchTask {
        width: 27.5rem;
        padding: 1rem;
        color: white;
        font-size: 1.5rem;
        border-radius: 1rem;
        border: 1px solid ${props => props.theme["--green-500"]};
        background: ${props => props.theme["--gray-800"]};
        margin-bottom: 1rem;
    }

    .searchTask:focus  {
        border: 1px solid ${props => props.theme["--green-300"]};
        outline: 1px solid ${props => props.theme["--green-300"]};
    }

    .searchTask:disabled {
        opacity: .3;
        border: 1px solid ${props => props.theme["--red-500"]};
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

type ShowModal = {
    showModal: boolean;
}

export const ContainerTask = styled.div<ShowModal>`
    display: ${props => props.showModal ? 'none' : 'flex'};
    padding-top: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
`