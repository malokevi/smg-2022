import styled from "styled-components"

type ButtonVersionType = "primary" | "secondary" | "warning" | "danger"

type ButtonPropsType = {
    label: string
    onClick: (e: any) => void
    version: ButtonVersionType
}

const Button = ({ label, onClick, version }: ButtonPropsType) => {
    return (
        <StyledButton version={version} onClick={onClick} type="button">
            {label}
        </StyledButton>
    )
}

const StyledButton = styled.button<{ version: ButtonVersionType }>`
    background-color: ${({ theme, version }) => theme.colors.button[version]};
`

export default Button
