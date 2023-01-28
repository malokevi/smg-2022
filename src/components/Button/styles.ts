import styled from "styled-components"

export enum ButtonVersionType {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    WARNING = "warning",
    DANGER = "danger"
}

export const Button = styled.button<{ version: ButtonVersionType }>`
    background-color: ${({ theme, version }) => theme.colors.button[version]};
    border: 1px solid
        ${({ theme, version }) =>
            version === ButtonVersionType.PRIMARY
                ? theme.colors.white
                : theme.colors.button.primary};
    color: ${({ theme, version }) =>
        version === ButtonVersionType.PRIMARY
            ? theme.colors.white
            : theme.colors.button.primary};
    padding: 12px;
    transition: all 0.25s ease-in-out;

    &:hover {
        ${({ theme, version }) => {
            if (version === ButtonVersionType.PRIMARY) {
                return `opacity: 0.8;`
            } else {
                return `
            background-color: ${theme.colors.button.primary};
            color: ${theme.colors.white};
            `
            }
        }};
    }
`
