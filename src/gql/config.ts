import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
    uri: `${process.env.REACT_APP_STRAPI_ENDPOINT}/graphql`
})

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("token")

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    }
})

export const GQL_CLIENT = new ApolloClient({
    uri: `${process.env.REACT_APP_STRAPI_ENDPOINT}/graphql`,
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
})
