import { gql } from "@apollo/client"

export const REGISTER = gql(`
    mutation Register($username: string!, $email: string!, $password: string!) {
        register(input: { username: $username, email: $email, password: $password }) {
            jwt
            user {
                username
                email
            }
        }
    }
`)

export const LOGIN = gql(`
    mutation Login($identifier: string!, $password: string!) {
        login($identifier: $identifier, password: $password }) {
            jwt
        }
    }
`)