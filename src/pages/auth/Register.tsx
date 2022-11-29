import styled from "styled-components"

import { RegisterModule } from "../../components/Auth"
import { Col, Container, Row } from "../../components/Layout/Grid"

const Register = () => {
    return (
        <StyledRegister>
            <Container>
                <Row>
                    <Col>
                        <RegisterModule />
                    </Col>
                </Row>
            </Container>
        </StyledRegister>
    )
}

const StyledRegister = styled.div`
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

export default Register
