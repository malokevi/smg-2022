import styled from "styled-components"

type ButtonVersionType = "primary" | "secondary" | "warning" | "danger"

type ButtonPropsType = {
    label: string
    onClick?: (e: any) => void
    version: ButtonVersionType
    type?: "button" | "submit"
}

const Button = ({
    label,
    onClick,
    version,
    type = "button"
}: ButtonPropsType) => {
    return (
        <StyledButton version={version} onClick={onClick} type={type}>
            {label}
        </StyledButton>
    )
}

const StyledButton = styled.button<{ version: ButtonVersionType }>`
    background-color: ${({ theme, version }) => theme.colors.button[version]};
    border: 1px solid
        ${({ theme, version }) =>
            version === "primary"
                ? theme.colors.white
                : theme.colors.button.primary};
    color: ${({ theme, version }) =>
        version === "primary"
            ? theme.colors.white
            : theme.colors.button.primary};
    padding: 12px;
    transition: all 0.25s ease-in-out;

    &:hover {
        ${({ theme, version }) => {
            if (version === "primary") {
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

export default Button
