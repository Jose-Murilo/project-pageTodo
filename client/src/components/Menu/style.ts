import styled from "styled-components";
interface NavContainerProps {
    isToggle: boolean;
}

export const NavContainer = styled.div<NavContainerProps>`
    display: ${props => props.isToggle ? 'flex' : 'none'};
    width: 100vw;
    height: calc(100vh - 12.6rem);
    align-items: center;
    justify-content: center;
    background: ${({theme}) => theme["--gray-900"]};
    position: absolute;
    left: 0;
    bottom: 0;
    top: 12.6rem;

    .ulToggle {
        display: flex;
        flex-direction: column;
        gap: 5rem;
        font-size: 2rem;
        align-items: center;
        text-align: center;
    }

    li .active {
        border-bottom: 2px solid ${props => props.theme["--red-500"]};
    }

    @media (min-width: 768px) {
        display: none;
    }
`