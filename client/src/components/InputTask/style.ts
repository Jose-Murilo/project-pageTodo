import styled from "styled-components";

export const Container = styled.div`
    .titleTasks {
        width: 100%;
        margin-top: 1rem;
        padding: 1rem;
        color: ${(props) => props.theme["--white"]};
        background: ${(props) => props.theme["--gray-700"]};
        border: 1px solid black;
        border-radius: .8rem;
    }

    .titleTasks:focus {
        outline: 2px solid black;
        border: 2px solid ${(props) => props.theme["--gray-400"]};
    }

    .taskDescription {
        width: 100%;
        margin-top: 1rem;
        resize: none;
        color: ${(props) => props.theme["--white"]};
        background: ${(props) => props.theme["--gray-700"]};
        padding: .8rem;
        border: 1px solid black;
        border-radius: .8rem;
    }

    .taskDescription:focus {
        outline: 2px solid black;
        border: 2px solid ${(props) => props.theme["--gray-400"]};
    }

    .buttonTasks {
        padding: 1rem;
        border: none;
        border-radius: .8rem;
        cursor: pointer;
        color: ${(({ theme }) => theme["--white"])};
        font-size: 1.6rem;
        background: ${(({ theme }) => theme["--green-500"])};
    }

    .buttonTasks:hover {
        background: ${(({ theme }) => theme["--green-300"])};
        /* opacity: .8; */
    }
`

