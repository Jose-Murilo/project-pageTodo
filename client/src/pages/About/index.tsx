import { Container } from "./style";

export function About() {
    return (
        <Container>
            <h1>Sobre</h1>
            <p>
                Project developed with the objective of learning and evolution. In this project we were able to apply much of our technical knowledge and direct some concepts about React & NodeJs, with the use of libraries in the front-end and back-end.
            </p>

            <h2>Front-End</h2>
            <ul>
                <li>React with Vite</li>
                <li>React Icons</li>
                <li>TypeScript</li>
                <li>Context Api</li>
                <li>Styled-Components</li>
                <li>React-Router</li>
                <li>Axios (requisições)</li>
                <li>React-Hook-Form</li>
            </ul>

            <h2>Back-End</h2>
            <ul>
                <li>NodeJs</li>
                <li>Express</li>
                <li>Prisma</li>
                <li>TypeScript</li>
                <li>Cors</li>
                <li>Nodemon</li>
            </ul>

            <p>System developed by <a target="_blank" href="https://www.linkedin.com/in/jos%C3%A9-murilo/">@Murilo</a> & <a target="_blank" href="https://www.linkedin.com/in/italo-morais/">@Italo</a></p>
        </Container>
    )
}