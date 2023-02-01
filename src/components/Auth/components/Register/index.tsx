import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuthContext } from "../../../../auth/AuthenticationProvider"
import { API } from "../../../../auth/constants"
import { setToken } from "../../../../auth/helpers"

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
    const { setUser } = useAuthContext()
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleRegister = async (values: { [key: string]: any }) => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API}/auth/local/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const data = await response.json();
            if (data?.error) {
                throw data?.error;
            } else {
                // set the token
                setToken(data.jwt);

                // set the user
                setUser(data.user);

                // TODO - handle success
                // message.success(`Welcome to Social Cards ${data.user.username}!`);

                // TODO - handle navigation
                // navigate("/profile", { replace: true });
            }
        } catch (error) {
            console.error(error);
            // TODO - handle error
            // setError(error?.message ?? "Something went wrong!");
        } finally {
            setIsLoading(false);
        }
    };


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
