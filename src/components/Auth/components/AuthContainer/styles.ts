import styled from "styled-components"

export const AuthContainer = styled.div`
    display: flex;
    flex-flow: column;
    padding: ${({ theme }) => theme.padding.pageBc} 0
        ${({ theme }) => theme.padding.gap};

    a {
        margin: auto;
        font-weight: bold;
        margin-top: 24px;
    }

    .auth-module-wrapper {
        display: flex;
        flex-flow: column;
        padding: 52px 38px;
        border: 1px solid ${({ theme }) => theme.colors.gray};
        border-radius: ${({ theme }) => theme.borderRadius};
        width: 100%;
        max-width: 480px;
        margin: auto;
        box-shadow: ${({ theme }) => theme.boxShadow};
    }
`
