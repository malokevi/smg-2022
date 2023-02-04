import styled from "styled-components";

export const KnowledgeCenterSection = styled.div`
    display: flex;
    flex-flow: column;
    gap: 48px;

    .info-block {
        display: flex;
        flex-flow: column;
        gap: 32px;
        padding: 48px;
        box-shadow: ${({theme}) => theme.boxShadow};
    }
`