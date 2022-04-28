import styled from "styled-components"
import { Col, Container, Row } from "../../components/Layout/Grid"
import Module from "../../components/Auth/Module"
import Form, { FormFieldType } from "../../components/Form/Form"
import { Link } from "react-router-dom"

const loginForm: FormFieldType[] = [
    {
        type: "text",
        label: "Email",
        placeholder: "Enter your username...",
        name: "email"
    },
    {
        type: "password",
        label: "Password",
        placeholder: "Enter your password...",
        name: "password"
    }
]

const Login = () => {
    return (
        <StyledLogin>
            <Container>
                <Row>
                    <Col>
                        <Module>
                            <h1>Login</h1>
                            <Form fields={loginForm} />
                            <Link to="/register">Create New Account</Link>
                        </Module>
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

    h1 {
        margin: auto;
    }

    a {
        margin: auto;
        font-weight: bold;
        margin-top: 24px;
    }
`

export default Login
