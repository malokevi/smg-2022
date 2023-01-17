import { useParams } from "react-router"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import { fadeUp, staggerChildren } from "../../../../shared/motion-variants"
import { Col } from "../../../Layout/Grid"
import { PageTitle } from "../../../PageTitle"
import Pagination from "../../../Utilities/Pagination"
import { GridItem } from "../GridItem"
import { ProductsToolbar, ProductsToolbarChangeEvent } from "../ProductsToolbar"
import { ProductsFilterDataType } from "../../common/types.common"
import { PaginationTotalsType, PaginationType } from "../../../../shared/types"

import TestProducts from "../../../../static/products.json"

export const ProductsGrid = () => {
    let { category } = useParams<"category">()
    const [paginationTotals, setPaginationTotals] =
        useState<PaginationTotalsType>({
            currentPage: 0,
            total: 0
        }) // todo - type
    const [pageItems, setPageItems] = useState<any[]>([]) // todo - type
    const [page, setPage] = useState<PaginationType>({
        skip: 0,
        take: 12
    })
    const [sort, setSort] = useState<ProductsFilterDataType[]>([])

    useEffect(() => {
        // TODO - live data
        setPaginationTotals({
            currentPage: pageItems.length,
            total: TestProducts.length
        })
    }, [pageItems])

    useEffect(() => {
        setPageItems(TestProducts.slice(page.skip, page.skip + page.take))
    }, [page])

    const handlePaginate = (e: any) => {
        setPage(e)
    }

    const handleSort = (e: ProductsToolbarChangeEvent) => {
        setSort({ ...sort, ...e })
    }

    return (
        <Col className="grid-container" sm={12} md={8} lg={9}>
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
                    {pageItems.map(({ label, price, salePrice, image }, i) =>
                        label ? (
                            <GridItem
                                label={label}
                                price={price}
                                salePrice={salePrice}
                                image={image}
                                key={`product${i}-${label.replaceAll(" ", "")}`}
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
        </Col>
    )
}
