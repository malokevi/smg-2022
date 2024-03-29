import { useEffect } from "react"
import { Link, Navigate } from "react-router-dom"
import { useMutation } from "@apollo/client"

import { useAuthContext } from "../../../../auth/AuthenticationProvider"
import { USER_LOGIN } from "../../../../gql/mutations"
import Form, { FormFieldType, InputTypes } from "../../../Form/Form"
import { PageTitle } from "../../../PageTitle"
import { AuthContainer } from "../AuthContainer"
import { headingMarginBottom } from "../common/common.constants"

const loginForm: FormFieldType[] = [
    {
        type: InputTypes.TEXT,
        label: "Email",
        placeholder: "Enter your username...",
        name: "identifier"
    },
    {
        type: InputTypes.PASSWORD,
        label: "Password",
        placeholder: "Enter your password...",
        name: "password"
    }
]

export const LoginModule = () => {
    const { loginUser, user } = useAuthContext()
    const [userLogin, { loading, error, data }] = useMutation(USER_LOGIN)

    const handleLogin = async (
        values: { [key: string]: any },
        e: SubmitEvent
    ) => {
        e.preventDefault()
        userLogin({ variables: values })
    }

    useEffect(() => {
        if (!!data) {
            const { user, jwt } = data.login
            loginUser(user, jwt)
        }
    }, [data])

    // TODO - Add loading and error states
    if (loading) return <p>Submitting...</p>
    if (error) return <p>Submission error! ${error.message}`</p>

    return user ? (
        <Navigate to="/" />
    ) : (
        <AuthContainer>
            <PageTitle marginBottom={headingMarginBottom} centered>
                Login
            </PageTitle>
            <Form fields={loginForm} onSubmit={handleLogin} />
            <Link to="/register">Create New Account</Link>
        </AuthContainer>
    )
}
