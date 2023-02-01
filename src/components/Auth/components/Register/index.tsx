import { useMutation } from "@apollo/client"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAuthContext } from "../../../../auth/AuthenticationProvider"
import { API } from "../../../../auth/constants"
import { setToken } from "../../../../auth/helpers"
import { USER_REGISTER } from "../../../../gql/mutations"

import Form, { FormFieldType, InputTypes } from "../../../Form/Form"
import { PageTitle } from "../../../PageTitle"
import { AuthContainer } from "../AuthContainer"
import { headingMarginBottom } from "../common/common.constants"

const registerForm: FormFieldType[] = [
    {
        type: InputTypes.TEXT,
        label: "Username",
        placeholder: "Enter your username...",
        name: "username"
    },
    {
        type: InputTypes.TEXT,
        label: "Email Address",
        placeholder: "Enter your email...",
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
    const { setUser } = useAuthContext()
    const [userRegister, { loading, error, data }] = useMutation(USER_REGISTER)

    const handleRegister = async (values: { [key: string]: any }, e: SubmitEvent) => {
        e.preventDefault()
        userRegister({ variables: values })
    }

    useEffect(() => {
        console.log('check data reg', data)
        !!data && setUser(data.register)
    }, [data])


    if (loading) return <p>Submitting...</p>;
    if (error) return <p>Submission error! ${error.message}`</p>;

    return (
        <AuthContainer>
            <PageTitle marginBottom={headingMarginBottom} centered>
                Create an Account
            </PageTitle>
            <Form fields={registerForm} onSubmit={handleRegister} />
            <Link to="/login">Login</Link>
        </AuthContainer>
    )
}
