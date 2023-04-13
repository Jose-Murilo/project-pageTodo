import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme["--gray-900"]};
    color: white;

    .ContainerCard {
        padding: 1rem;
        text-align: center;
    }

    h1 {
        padding-block: 3rem;
    }

    .containerTask {
        max-width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 3rem;
    }

    .containerTitle {
        width: 100%;
        height: 5rem;
        border-bottom: 1px solid ${props => props.theme["--gray-800"]};
        background: ${props => props.theme["--gray-700"]};
        border-radius: 7rem;
        margin-bottom: 1rem;
    }
    
    .cardTask {
        width: 27rem;
        height: 27rem;
        padding: 1rem;
        background: ${props => props.theme["--gray-800"]};
        border-radius: 1rem;

        h2 {
            color: white;
            font-size: 3.2rem;
        }

        p {
            color: white;
            max-width: 27rem;
            word-wrap: break-word;
        }
        /* background-color: red; */
    }
`