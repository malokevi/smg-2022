import { gql } from "@apollo/client"

const ApolloQueryWrapper = (query: string) => gql(query)

/* 
    1. PRODUCTS 
    2. USERS
    3. INFO 
*/

/* 
    1. PRODUCT QUERIES 
*/

export const PRODUCTS_GET = ApolloQueryWrapper(`
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

/* 
    2. USER QUERIES 
*/

export const USER_GET = ApolloQueryWrapper(`
    query UserFetch($email: String!) {
        user(email: $email) {
            email
            username
            firstName
        }
    }
`)

/* 
    3. INFO QUERIES 
*/

export const INFO_CATEGORIES_GET = ApolloQueryWrapper(`
    query GetInfoCategories {
        infoCategories {
            data {
                attributes {
                    label
                    uid
                    infos {
                        data {
                            attributes {
                                label 
                                description
                                uid
                            }
                        }
                    }
                }
            }
        }
    }
`)
