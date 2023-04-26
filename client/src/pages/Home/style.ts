import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background: ${(props) => props.theme["--gray-900"]};
    height: 100vh;

    form {
        display: flex;
        flex-direction: column;
        gap: 5rem;
        max-width: 76.5rem;
        margin: 3rem auto;
        
        text-align: center;
        color: white;
        padding-inline: 2rem;
    }

    .error {
        color: ${(props) => props.theme["--red-500"]};
        display: block;
        position: absolute;
        font-size: 1.4rem;
        margin-top: .3rem;
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
        font-family: 'Inter', sans-serif;
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