import { Link } from "react-router-dom"

import Form, { FormFieldType, InputTypes } from "../../../Form/Form"
import { PageTitle } from "../../../PageTitle"
import { AuthContainer } from "../AuthContainer"
import { headingMarginBottom } from "../common/common.constants"

const registerForm: FormFieldType[] = [
    {
        type: InputTypes.TEXT,
        label: "Email Address",
        placeholder: "Enter your username...",
        name: "email"
    },
    {
        type: InputTypes.PASSWORD,
        label: "Password",
        placeholder: "Enter your password...",
        name: "password"
    },
    {
        type: InputTypes.PASSWORD,
        label: "Confirm Password",
        placeholder: "Confirm your password...",
        name: "passwordConfirm"
    }
]

export const RegisterModule = () => {
    return (
        <AuthContainer>
            <PageTitle marginBottom={headingMarginBottom} centered>
                Create an Account
            </PageTitle>
            <Form fields={registerForm} />
            <Link to="/login">Login</Link>
        </AuthContainer>
    )
}
