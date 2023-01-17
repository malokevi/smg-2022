import { useState, useEffect } from "react"

import { PaginationTotalsType } from "../../../../shared/types"
import Select from "../../../Form/Select"
import { ProductsFilterDataType } from "../../common/types.common"

import * as S from "./styles"

export type ProductsToolbarChangeEvent = ProductsFilterDataType[]

type ProductsToolbarType = {
    onChange: (event: ProductsToolbarChangeEvent) => void
    paginationTotals: PaginationTotalsType
}

const PAGE_SORT_SELECT_NAME = "pagesort"

export const ProductsToolbar = ({
    onChange,
    paginationTotals: { currentPage, total }
}: ProductsToolbarType) => {
    const [filtersData, setFiltersData] = useState<ProductsFilterDataType[]>([])

    useEffect(() => {
        onChange(filtersData)
    }, [filtersData])

    const handleFiltersChange = ({ name, value }: ProductsFilterDataType) => {
        setFiltersData(
            filtersData.map(({ name: n, value: v }) => {
                return name === n ? { name, value } : { name: n, value: v }
            })
        )
    }

    return (
        <S.ProductsToolbar>
            <p className="fade">{`Items ${currentPage} of ${total}`}</p>

            <p>Sort By</p>
            <Select
                name={PAGE_SORT_SELECT_NAME}
                options={[
                    {
                        value: "price",
                        label: "Price"
                    },
                    {
                        value: "size",
                        label: "Size"
                    }
                ]}
                onChange={handleFiltersChange}
            />
        </S.ProductsToolbar>
    )
}
