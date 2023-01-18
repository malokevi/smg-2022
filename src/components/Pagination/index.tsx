import { useEffect, useState } from "react"

import { PaginationType } from "../../shared/types"
import {
    ProductsFilterDataType,
    ProductsFilterDataValueType
} from "../store/common/types.common"
import { DEFAULT_PAGE_SIZE, PAGE_SIZES, PAGE_SIZE_NAME } from "./constants"
import { Pager } from "./components/Pager"
import Select from "../Form/Select"

import * as S from "./styles"

export const Pagination = ({
    total,
    onChange,
    pageTotal
}: {
    pageTotal: number
    total: number
    onChange: (e: any) => void
}) => {
    const [page, setPage] = useState<PaginationType>({
        skip: 0,
        take: DEFAULT_PAGE_SIZE
    })

    useEffect(() => {
        onChange(page)
    }, [page])

    const handlePageSizeChange = (pageSize: ProductsFilterDataValueType) => {
        const formatted =
            typeof pageSize === "string" ? parseInt(pageSize) : pageSize
        setPage({
            skip: 0,
            take: formatted || DEFAULT_PAGE_SIZE
        })
    }

    const handlePaginate = (e: number) => {
        setPage({ ...page, skip: e * page.take })
    }

    return (
        <S.Pagination>
            <Pager settings={page} total={total} onChange={handlePaginate} />
            <p className="fade">{`Items ${pageTotal} of ${total}`}</p>
            <div className="show">
                <p>Show</p>
                <Select
                    name="pagesize"
                    options={PAGE_SIZES}
                    defaultValue={{
                        name: PAGE_SIZE_NAME,
                        value: DEFAULT_PAGE_SIZE
                    }}
                    onChange={({ value }: ProductsFilterDataType) =>
                        handlePageSizeChange(value)
                    }
                />
            </div>
        </S.Pagination>
    )
}
