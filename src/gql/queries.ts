import { gql } from "@apollo/client"

const ApolloQueryWrapper = (query: string) => gql(query)

export const GET_PRODUCTS = ApolloQueryWrapper(`
    query GetProducts {
        products {
            data {
                attributes {
                    name
                    price
                    description
                    vendor: vendor {
                        data {
                            attributes {
                                logo {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                            }
                        }
                    }
                    image {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                    publishedAt
                }
            }
        }
    }
`)

export const USER_FETCH = ApolloQueryWrapper(`
    query UserFetch($email: String!) {
        user(email: $email) {
            email
            username
            firstName
        }
    }
`)