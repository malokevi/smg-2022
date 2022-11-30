import { useEffect, useState } from "react"
import { useParams } from "react-router"
import styled from "styled-components"
import { motion } from "framer-motion"

import { Col, Container, Row } from "../components/Layout/Grid"
import Pagination from "../components/Utilities/Pagination"
import { PaginationTotalsType, PaginationType } from "../shared/types"
import TestProducts from "../static/products.json"
import { fadeUp, staggerChildren } from "../shared/motion-variants"
import { PageTitle } from "../components/PageTitle"
import { GridItem, ProductsToolbar } from "../components/store"
import { ProductsFilterDataType } from "../components/store/common/types.common"
import { ProductsToolbarChangeEvent } from "../components/store/components/ProductsToolbar"

const Products = () => {
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
        <StyledStoreLayout className="page-container">
            <Container>
                <Row>
                    <Col sm={12} md={4} lg={3}>
                        {/* TODO - implement sidenav */}
                        <p>nav</p>
                    </Col>
                    <Col className="grid-container" sm={12} md={8} lg={9}>
                        <PageTitle marginBottom={0}>
                            {category || "All Products"}
                        </PageTitle>

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
                                    ({ label, price, salePrice, image }, i) =>
                                        label ? (
                                            <GridItem
                                                label={label}
                                                price={price}
                                                salePrice={salePrice}
                                                image={image}
                                                key={`product${i}-${label.replaceAll(
                                                    " ",
                                                    ""
                                                )}`}
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
                </Row>
            </Container>
        </StyledStoreLayout>
    )
}

const StyledStoreLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;

    .sort {
        border: 1px solid ${({ theme }) => theme.colors.gray};
        padding: 12px 24px;
        border-radius: ${({ theme }) => theme.borderRadius};
        display: flex;
        flex-flow: row nowrap;
        gap: 12px;

        .fade {
            margin: auto auto auto 0;
        }

        p {
            font-size: ${({ theme }) => theme.fontSize.sm};
            margin: auto 0 auto auto;
        }
    }

    span.spacer {
        flex-grow: 2;
        flex-shrink: 0;
        width: 25%;
    }

    .grid-container {
        display: flex;
        flex-flow: column nowrap;
        gap: 24px;

        .product-grid {
            display: grid;
            grid-gap: 48px;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        }
    }
`

export default Products
