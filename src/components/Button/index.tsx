import { ButtonVersionType } from "./styles"

import * as S from "./styles"

type ButtonPropsType = {
    children: string | React.ReactNode
    onClick?: (e: any) => void
    version: ButtonVersionType
    type?: "button" | "submit" | "reset" | undefined
    className?: string
}

const Button = ({
    children,
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
            {children}
        </S.Button>
    )
}

export default Button
