import { ButtonVersionType } from "./styles"

import * as S from "./styles"

type ButtonPropsType = {
    label: string
    onClick?: (e: any) => void
    version: ButtonVersionType
    type?: "button" | "submit" | "reset" | undefined
    className?: string
}

const Button = ({
    label,
    onClick,
    version,
    className,
    type = "button"
}: ButtonPropsType) => {
    return (
        <S.Button
            className={className}
            version={version}
            onClick={onClick}
            type={type}
        >
            {label}
        </S.Button>
    )
}

export default Button
