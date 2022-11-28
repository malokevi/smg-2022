import { useEffect, useState } from "react"
import styled from "styled-components"

import { PaginationType } from "../../shared/types"
import Select from "../Form/Select"
import Pager from "./Pager"

const pageSizes = [
    {
        value: 6,
        label: "6"
    },
    {
        value: 12,
        label: "12",
        default: true
    },
    {
        value: 24,
        label: "24"
    }
]

const Pagination = ({
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
        take: 12
    })

    useEffect(() => {
        onChange(page)
    }, [page])

    const handlePageSizeChange = (e: any) => {
        setPage({
            skip: 0,
            take: e.value
        })
    }

    const handlePaginate = (e: number) => {
        setPage({ ...page, skip: e * page.take })
    }

    return (
        <StyledPagination>
            <Pager settings={page} total={total} onChange={handlePaginate} />
            <p className="fade">{`Items ${pageTotal} of ${total}`}</p>
            <div className="show">
                <p>Show</p>
                <Select
                    name="pagesize"
                    options={pageSizes}
                    onChange={handlePageSizeChange}
                />
            </div>
        </StyledPagination>
    )
}

const StyledPagination = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 32px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    padding: 12px 24px;
    border-radius: ${({ theme }) => theme.borderRadius};

    .fade {
        color: ${({ theme }) => theme.colors.text.faded};
    }

    p {
        margin: auto 0;
        font-size: ${({ theme }) => theme.fontSize.sm};
    }

    .show {
        display: flex;
        flex-flow: row nowrap;
        gap: 12px;
    }
`

export default Pagination
