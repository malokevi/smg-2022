import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        borderRadius: string
        boxShadow: string

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
            page: {
                desktop: string
                mobile: string
            }
            gap: string
            pageBc: string
        }

        colors: {
            text: {
                dark: string
                darkHover: string
                light: string
                lightHover: string
                faded: string
            }
            button: {
                primary: string
                secondary: string
                warning: string
                danger: string
                link: string
            }
            gray: string
            lightGray: string
            red: string
            blue: string
            white: string
            lightblue: string
        }
    }
}
