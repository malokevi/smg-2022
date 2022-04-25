import { DefaultTheme } from "styled-components"

const theme: DefaultTheme = {
    fontSize: {
        xxs: "12px",
        xs: "16px",
        sm: "18px",
        md: "20px",
        lg: "24px",
        xl: "34px",
        xxl: "46px"
    },
    colors: {
        text: {
            dark: "#131c4b",
            light: "#fff",
            faded: "#abadbc"
        },
        button: {
            primary: "#f1f9ff",
            secondary: "#eee",
            warning: "#c1282d",
            danger: ""
        },
        gray: "#eee",
        red: "#c1282d",
        blue: "#70CDDD",
        white: "#fff",
        lightblue: "#f1f9ff"
    },
    padding: {
        gap: "80px",
        page: "120px"
    },
    borderRadius: "6px"
}

export default theme
