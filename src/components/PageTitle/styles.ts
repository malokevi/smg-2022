import styled from "styled-components"

const DEFAULT_PAGE_TITLE_MARGIN = 52

export const PageTitle = styled.h1<{
    marginBottom?: number
    centered: boolean
}>`
    margin: ${({ marginBottom, centered }) =>
        `${centered ? "auto auto" : "0 0"} ${
            typeof marginBottom !== "undefined"
                ? marginBottom
                : DEFAULT_PAGE_TITLE_MARGIN
        }px`};
`
