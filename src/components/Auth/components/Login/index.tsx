import { Link } from "react-router-dom"

import Form, { FormFieldType, InputTypes } from "../../../Form/Form"
import { PageTitle } from "../../../PageTitle"
import { AuthContainer } from "../AuthContainer"
import { headingMarginBottom } from "../common/common.constants"

const loginForm: FormFieldType[] = [
    {
        type: InputTypes.TEXT,
        label: "Email",
        placeholder: "Enter your username...",
        name: "email"
    },
    {
        type: InputTypes.PASSWORD,
        label: "Password",
        placeholder: "Enter your password...",
        name: "password"
    }
]

export const LoginModule = () => {
    return (
        <AuthContainer>
            <PageTitle marginBottom={headingMarginBottom} centered>
                Login
            </PageTitle>
            <Form fields={loginForm} />
            <Link to="/register">Create New Account</Link>
        </AuthContainer>
    )
}
