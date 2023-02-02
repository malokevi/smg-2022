import { gql } from "@apollo/client"

export const USER_REGISTER = gql`
    mutation UserRegister($username: String!, $email: String!, $password: String!) {
        register(input: { username : $username, email : $email, password : $password }) {
            jwt
            user {
                username
                email
            }
        }
    }
`

export const USER_LOGIN = gql`
    mutation UserLogin($identifier: String!, $password: String!) {
        login(input: {identifier: $identifier, password: $password}) {
            jwt
            user {
                username
                email
            }
        }
    }
`