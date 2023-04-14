import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-width: 100%;
    height: 12.6rem;
    background: ${(({ theme }) => theme["--green-500"])};
    justify-content: space-between;
    align-items: center;
    padding-right: 3.4rem;
    font-size: 1.8rem;
    background-size: 500% 100%;

    ul {
        display: flex;
        gap: 1.2rem;
        list-style: none;
        align-items: center;
    }

    li a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        transition: 400ms;
    }

    li .active {
        border-bottom: 2px solid ${props => props.theme["--red-500"]};
    }

    @media(max-width: 767px) {
        .navHeader ul li {
            display: none;
        }
    }
`

export const ImgToggle = styled.img`
    display: none;
    color: white;
    font-size: 3.5rem;
    cursor: pointer;

    @media (max-width: 767px) {
        display: block;
    }   
` 