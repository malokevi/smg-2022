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
    border: 1px solid ${({ theme }) => theme.colors.gray};
    padding: 12px;
`

export default Button
