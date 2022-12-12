import { useEffect, useState } from "react"
import styled from "styled-components"

import { PaginationType } from "../../shared/types"
import { buttonReset } from "../../theme/mixins/resets"

export const Pager = ({
    settings,
    total,
    onChange
}: {
    settings: PaginationType
    total: number
    onChange: (e: any) => void
}) => {
    const [pages, setPages] = useState<number[]>([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        onChange(page)
    }, [page])

    useEffect(() => {
        let p: number[] = []

        for (let i = 0; i <= Math.floor(total / settings.take); i++) {
            p.push(i)
        }

        setPages(p)
    }, [settings, total])

    return (
        <StyledPager>
            <button
                className="left"
                disabled={page === pages[0]}
                onClick={() => setPage(page - 1)}
            >
                &#10094;
            </button>
            {pages.map((val: number) => (
                <button
                    className={`${val === page ? "active" : ""}`}
                    onClick={() => setPage(val)}
                    key={val}
                >
                    {val + 1}
                </button>
            ))}
            <button
                className="right"
                disabled={page === pages[pages.length - 1]}
                onClick={() => setPage(page + 1)}
            >
                &#10095;
            </button>
        </StyledPager>
    )
}

const StyledPager = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-right: auto;
    gap: 4px;

    & > button {
        ${buttonReset}
        padding: 8px;

        &.active {
            font-weight: bold;
        }
        &:disabled {
            opacity: 0.3;
        }
    }
`
