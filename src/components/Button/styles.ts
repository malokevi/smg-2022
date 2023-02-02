import styled from "styled-components"
import theme from "../../theme/theme"

export enum ButtonVersionType {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    WARNING = "warning",
    DANGER = "danger",
    LINK = "link"
}

const borderColor = {
    [ButtonVersionType.PRIMARY]: "1px solid white",
    [ButtonVersionType.SECONDARY]: `1px solid ${theme.colors.button.primary}`,
    [ButtonVersionType.WARNING]: `1px solid ${theme.colors.button.primary}`,
    [ButtonVersionType.DANGER]: `1px solid ${theme.colors.button.primary}`,
    [ButtonVersionType.LINK]: "none"
}

const fontColor = {
    [ButtonVersionType.PRIMARY]: theme.colors.white,
    [ButtonVersionType.SECONDARY]: theme.colors.button.primary,
    [ButtonVersionType.WARNING]: theme.colors.button.primary,
    [ButtonVersionType.DANGER]: theme.colors.button.primary,
    [ButtonVersionType.LINK]: theme.colors.text.dark
}

export const Button = styled.button<{ version: ButtonVersionType }>`
    background-color: ${({ theme, version }) => theme.colors.button[version]};
    border: ${({version}) => borderColor[version]};
    color: ${({ version }) => fontColor[version]};
    padding: ${({version}) => version === ButtonVersionType.LINK ? '0' : '12px'};
    transition: all 0.25s ease-in-out;
    font-size: ${({version}) => version === ButtonVersionType.LINK ? '16px' : 'inherit'};

    &:hover {
        ${({ theme, version }) => {
            switch(version) {
                case ButtonVersionType.PRIMARY:
                    return `opacity: 0.8;`
                case ButtonVersionType.LINK:
                    return `color: #5f6791;`
                default:
                    return `
                        background-color: ${theme.colors.button.primary};
                        color: ${theme.colors.white};
                    `
            } 
        }};
    }
`
