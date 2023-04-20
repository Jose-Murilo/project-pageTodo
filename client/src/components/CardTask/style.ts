import styled from "styled-components";

export const Container = styled.div`
    .cardTask {
        width: 27rem;
        height: 27rem;
        position: relative;
        
        background: ${props => props.theme["--gray-800"]};
        border-radius: 1rem;

        h2 {
            color: white;
            font-size: 1.9rem;
        }

        .descriptions {
            color: white;
            text-align: left;
            padding-inline: 1.2rem;
            max-width: 27rem;
            word-wrap: break-word;
        }

        transition: all 300ms;
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

    .viewMore {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        width: 100%;
        position: absolute;
        border-radius: .8rem;
        width: 100%;
        background: ${props => props.theme["--gray-700"]};
        padding: 1rem;
        bottom: 0;
    }

    .buttonViewMore {
        background: ${props => props.theme["--gray-700"]};
        font-size: 1.6rem;
        cursor: pointer;
    }

    .trashTask {
         cursor: pointer;
    }
`