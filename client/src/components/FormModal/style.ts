import styled from "styled-components";

export const Container = styled.div`
    .formModal {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

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
        font-family: 'Inter';
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
    }

    .updateButton {
        position: absolute;
        width: 7rem;
        bottom: 1rem;

        padding: 1rem;
        background: ${props => props.theme["--green-500"]};
        color: white;
        border: 0;
        border-radius: 1rem;
        cursor: pointer;
    }

    .updateButton:hover {
        background: ${props => props.theme["--green-300"]};
    }
    
    .deleteButton {
        position: absolute;
        width: 7rem;
        bottom: 1rem;
        right: 2rem;
        
        padding: 1rem;
        background: ${props => props.theme["--red-500"]};
        color: white;
        border: 0;
        border-radius: 1rem;
        cursor: pointer;
    }

    .deleteButton:hover {
        opacity: .7;
    }

    .containerCompleted {
        display: flex;
        gap: 1rem;
        padding-block: 1rem;
    }

    .taskCreated {
        font-size: 1.4rem;
        text-align: left;
    }
`

type ContainerCompletedProps = {
    isCompleted: boolean;
}

export const ContainerCompleted = styled.div<ContainerCompletedProps>`
    display: flex;
    gap: 1rem;
    padding-block: .8rem;
    align-items: center;

    button {
        /* width: 7rem; */
        text-align: center;
        bottom: 1rem;
        padding: 1rem;
        color: ${props => props.isCompleted ? props => props.theme["--green-isCompleted"] : props => props.theme["--red-500"]};
        background: ${props => props.theme["--gray-600"]};
        /* color: white; */
        border: 0px;
        border-radius: 1rem;
        cursor: pointer;
    }
`