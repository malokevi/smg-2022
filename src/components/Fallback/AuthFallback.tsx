import styled from "styled-components"

import { AuthContainer } from "../Auth/components/AuthContainer"

export const AuthFallback = () => {
    return (
        <StyledAuthContainer />
    )
}

const StyledAuthContainer = styled(AuthContainer)`
    .auth-module-wrapper {
        background-color: ${({theme}) => theme.colors.lightGray};
        min-height: 400px;
    }
`