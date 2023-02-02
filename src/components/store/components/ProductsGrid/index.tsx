import { useParams } from "react-router"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import { fadeUp, staggerChildren } from "../../../../shared/motion-variants"
import { PageTitle } from "../../../PageTitle"
import { ProductsFilterDataType } from "../../common/types.common"
import { ProductsToolbar, ProductsToolbarChangeEvent } from "../ProductsToolbar"
import { GridItem } from "../GridItem"
import { Pagination } from "../../../Pagination"
import { PaginationTotalsType, PaginationType } from "../../../../shared/types"

export const ProductsGrid = ({ products = [] }: { products?: any[] }) => {
    let { category } = useParams<"category">()
    const [pageItems, setPageItems] = useState<any[]>([])
    const [sort, setSort] = useState<ProductsFilterDataType[]>([])
    const [page, setPage] = useState<PaginationType>({
        skip: 0,
        take: 12
    })
    const [paginationTotals, setPaginationTotals] =
        useState<PaginationTotalsType>({
            currentPage: 0,
            total: 0
        })

    useEffect(() => {
        const slicedPageItems = products.slice(page.skip, page.skip + page.take)

        setPageItems(slicedPageItems)
        setPaginationTotals({
            currentPage: slicedPageItems.length,
            total: products.length
        })
    }, [page, products])

    const handlePaginate = (e: any) => {
        setPage(e)
    }

    const handleSort = (e: ProductsToolbarChangeEvent) => {
        setSort({ ...sort, ...e })
    }

    return (
        <>
            <PageTitle marginBottom={0}>{category || "All Products"}</PageTitle>

            <ProductsToolbar
                onChange={handleSort}
                paginationTotals={paginationTotals}
            />

            {pageItems.length > 0 ? (
                <motion.div
                    variants={staggerChildren}
                    initial="hide"
                    animate="show"
                    className="product-grid"
                >
                    {pageItems.map(
                        (
                            {
                                id,
                                attributes: { name, price, salePrice, image }
                            },
                            i
                        ) =>
                            name ? (
                                <GridItem
                                    id={id}
                                    name={name}
                                    price={price}
                                    salePrice={salePrice}
                                    image={
                                        image.data
                                            ? `${process.env.REACT_APP_STRAPI_ENDPOINT}${image.data.attributes.url}`
                                            : undefined
                                    }
                                    key={`product-${i}`}
                                />
                            ) : (
                                <motion.span
                                    variants={fadeUp}
                                    className="spacer"
                                ></motion.span>
                            )
                    )}
                </motion.div>
            ) : (
                <p>No matching products.</p>
            )}

            <Pagination
                pageTotal={pageItems.length}
                onChange={handlePaginate}
                total={paginationTotals.total}
            />
        </>
    )
}
