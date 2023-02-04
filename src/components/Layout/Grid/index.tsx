import clsx from "clsx"

import * as S from "./styles"

type ContainerT = {
    children: React.ReactNode
    className?: string
}

type RowT = { children: React.ReactNode; className?: string }

type ColT = {
    className?: string
    children?: React.ReactNode
    sm?: number
    md?: number
    lg?: number
}

export const Container = ({ children, className }: ContainerT) => {
    return (
        <S.Container className={clsx("container", className)}>
            {children}
        </S.Container>
    )
}

export const Row = ({ children, className }: RowT) => {
    return <S.Row className={clsx("row", className)}>{children}</S.Row>
}

export const Col = ({
    children,
    className,
    sm = 12,
    md = 12,
    lg = 12
}: ColT) => {
    return (
        <S.Col
            className={clsx(
                `col col-sm-${sm} col-md-${md} col-lg-${lg}`,
                className
            )}
        >
            {children && children}
        </S.Col>
    )
}
