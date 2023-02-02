import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Provider as ReduxProvider } from "react-redux"
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

import { store } from "./store/store"
import App from "./App"
import defaultTheme from "./theme/theme"
import GlobalStyle from "./theme/globalStyles"
import { AuthenticationProvider } from "./auth/AuthenticationProvider"

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

const client = new ApolloClient({
    uri: `${process.env.REACT_APP_STRAPI_ENDPOINT}/graphql`,
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
})

const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <AuthenticationProvider>
                <BrowserRouter>
                    <ThemeProvider theme={defaultTheme}>
                        <GlobalStyle />
                        <ReduxProvider store={store}>
                            <App />
                        </ReduxProvider>
                    </ThemeProvider>
                </BrowserRouter>
            </AuthenticationProvider>
        </ApolloProvider>
    </React.StrictMode>
)
