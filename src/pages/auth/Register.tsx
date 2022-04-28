import { Link } from "react-router-dom"
import styled from "styled-components"
import Module from "../../components/Auth/Module"
import Form, { FormFieldType } from "../../components/Form/Form"
import { Col, Container, Row } from "../../components/Layout/Grid"

const registerForm: FormFieldType[] = [
    {
        type: "text",
        label: "Email Address",
        placeholder: "Enter your username...",
        name: "email"
    },
    {
        type: "password",
        label: "Password",
        placeholder: "Enter your password...",
        name: "password"
    },
    {
        type: "password",
        label: "Confirm Password",
        placeholder: "Confirm your password...",
        name: "password"
    }
]

const Register = () => {
    return (
        <StyledRegister>
            <Container>
                <Row>
                    <Col>
                        <Module>
                            <h1>Create An Account</h1>
                            <Form fields={registerForm} />
                            <Link to="/login">Login</Link>
                        </Module>
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

    h1 {
        margin: auto;
    }

    a {
        margin: auto;
        font-weight: bold;
        margin-top: 24px;
    }
`

export default Register
