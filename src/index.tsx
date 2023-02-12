import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Provider as ReduxProvider } from "react-redux"
import { ApolloProvider } from "@apollo/client"

import { store } from "./store/store"
import App from "./App"
import defaultTheme from "./theme/theme"
import GlobalStyle from "./theme/globalStyles"
import { AuthenticationProvider } from "./auth/AuthenticationProvider"
import { GQL_CLIENT } from "./gql/config"

const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(
    <React.StrictMode>
        <ApolloProvider client={GQL_CLIENT}>
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
