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
            darkHover: "#5f6791",
            light: "#fff",
            lightHover: "#fff",
            faded: "#abadbc"
        },
        button: {
            primary: "#70cddd",
            secondary: "white",
            warning: "#c1282d",
            danger: "red",
            link: "transparent"
        },
        gray: "#eee",
        lightGray: "#eaeaea",
        red: "#c1282d",
        blue: "#70CDDD",
        white: "#fff",
        lightblue: "#f1f9ff"
    },
    padding: {
        gap: "80px",
        page: {
            desktop: "120px",
            mobile: "80px"
        },
        pageBc: "40px"
    },
    borderRadius: "6px",
    boxShadow: "0 8px 12px rgb(0 0 0 / 8%)"
}

export default theme
