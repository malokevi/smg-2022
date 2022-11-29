import styled from "styled-components"

import { LoginModule } from "../../components/Auth"
import { Col, Container, Row } from "../../components/Layout/Grid"

const Login = () => {
    return (
        <StyledLogin>
            <Container>
                <Row>
                    <Col>
                        <LoginModule />
                    </Col>
                </Row>
            </Container>
        </StyledLogin>
    )
}

const StyledLogin = styled.div`
    display: flex;
    flex-flow: column;
    padding: ${({ theme }) => theme.padding.pageBc} 0
        ${({ theme }) => theme.padding.gap};

    a {
        margin: auto;
        font-weight: bold;
        margin-top: 24px;
    }
`

export default Login
