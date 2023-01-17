import clsx from "clsx"
import styled from "styled-components"

export const Container = ({
    children,
    className
}: {
    children: React.ReactNode
    className?: string
}) => {
    return (
        <StyledContainer className={clsx("container", className)}>
            {children}
        </StyledContainer>
    )
}

export const Row = ({ children }: { children: React.ReactNode }) => {
    return <StyledRow className="row">{children}</StyledRow>
}

type ColType = {
    className?: string
    children?: React.ReactNode
    sm?: number
    md?: number
    lg?: number
}

export const Col = ({
    children,
    className,
    sm = 12,
    md = 12,
    lg = 12
}: ColType) => {
    return (
        <StyledCol
            className={clsx(
                `col col-sm-${sm} col-md-${md} col-lg-${lg}`,
                className
            )}
        >
            {children && children}
        </StyledCol>
    )
}

const RenderCol = (unit: "sm" | "md" | "lg") => {
    return `
        &.col-${unit}-1 {
            width: 8.33%;
        }
        &.col-${unit}-2 {
            width: 16.66%;
        }
        &.col-${unit}-3 {
            width: 25%;
        }
        &.col-${unit}-4 {
            width: 33.33%;
        }
        &.col-${unit}-5 {
            width: 41.66%;
        }
        &.col-${unit}-6 {
            width: 50%;
        }
        &.col-${unit}-7 {
            width: 58.33%;
        }
        &.col-${unit}-8 {
            width: 66.66%;
        }
        &.col-${unit}-9 {
            width: 75%;
        }
        &.col-${unit}-10 {
            width: 83.33%;
        }
        &.col-${unit}-11 {
            width: 91.66%;
        }
        &.col-${unit}-12 {
            width: 100%;
        }
    `
}

const StyledContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
`

const StyledRow = styled.div`
    display: flex;
    flex-flow: row wrap;
    flex-grow: 2;
    overflow: hidden;
`

const StyledCol = styled.div`
    display: flex;
    flex-flow: column;
    padding: 0 15px;
    box-sizing: border-box;

    @media (min-width: 1201px) {
        ${RenderCol("lg")}
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        ${RenderCol("md")}
    }

    @media (max-width: 767px) {
        ${RenderCol("sm")}
    }
`
