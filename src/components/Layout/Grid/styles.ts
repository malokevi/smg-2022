import styled from "styled-components"

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

export const Container = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
`

export const Row = styled.div`
    display: flex;
    flex-flow: row wrap;
    flex-grow: 2;
`

export const Col = styled.div`
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
