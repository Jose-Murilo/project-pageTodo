import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme["--gray-900"]};
    display: flex;
    height: calc(100vh - 12.6rem);
    gap: 2rem;
    padding-inline: .5rem;
    flex-direction: column;
    text-align: center;
    color: white;
    overflow-y: auto;

    p {
        max-width: 75.0rem;
        margin: 0 auto;
        color: ${props => props.theme["--gray-100"]};
    }

    ul li {
        list-style: circle;
        color: ${props => props.theme["--gray-300"]};
        font-size: 1.5rem;
    }

    p a {
        text-decoration: none;
        padding-bottom: 1rem;
        color: ${props => props.theme["--green-300"]};
    }

    p a:hover {
        color: ${props => props.theme["--green-500"]};
    }
`

export const LinksOfProfiles = styled.div`
    display: flex;
    justify-content: center;
    gap: .5rem;
`