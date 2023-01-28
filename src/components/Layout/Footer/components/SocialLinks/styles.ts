import styled from "styled-components"

export const SocialLinks = styled.div`
    display: flex;
    flex-flow: row nowrap;

    a {
        transition: opacity 0.25s ease-in-out;
        &:hover {
            opacity: 0.8;
        }

        img {
            max-width: 42px;
            margin: 0;
        }
    }
`
