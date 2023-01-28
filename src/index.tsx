import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Provider as ReduxProvider } from "react-redux"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

import { store } from "./store/store"
import App from "./App"
import defaultTheme from "./theme/theme"
import GlobalStyle from "./theme/globalStyles"

const client = new ApolloClient({
    uri: `${process.env.REACT_APP_STRAPI_ENDPOINT}/graphql`,
    cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />
                <ReduxProvider store={store}>
                    <ApolloProvider client={client}>
                        <App />
                    </ApolloProvider>
                </ReduxProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
)
