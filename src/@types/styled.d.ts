import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        borderRadius: string

        fontSize: {
            xxs: string
            xs: string
            sm: string
            md: string
            lg: string
            xl: string
            xxl: string
        }

        padding: {
            page: string
            gap: string
            pageBc: string
        }

        colors: {
            text: {
                dark: string
                light: string
                faded: string
            }
            button: {
                primary: string
                secondary: string
                warning: string
                danger: string
            }
            gray: string
            red: string
            blue: string
            white: string
            lightblue: string
        }
    }
}
