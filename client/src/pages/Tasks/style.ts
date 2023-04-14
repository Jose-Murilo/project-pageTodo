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
        padding: 1rem;
        
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