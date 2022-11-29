import * as S from "./styles"

type PageTitleType = {
    children: string
    marginBottom?: number
    centered?: boolean
}

export const PageTitle = ({
    children,
    marginBottom,
    centered = false
}: PageTitleType) => {
    return (
        <S.PageTitle marginBottom={marginBottom} centered={centered!}>
            {children}
        </S.PageTitle>
    )
}
