import { useEffect, useState } from "react"
import { useParams } from "react-router"
import styled from "styled-components"
import Select from "../components/Form/Select"
import { Col, Container, Row } from "../components/Layout/Grid"
import GridItem from "../components/Products/GridItem"
import Pagination from "../components/Utilities/Pagination"
import { PaginationType } from "../shared/types"
import TestProducts from "../static/products.json"

const Products = () => {
    let { category } = useParams<"category">()
    const [total, setTotal] = useState<number>(0)
    const [pageItems, setPageItems] = useState<any[]>([]) // todo - type
    const [page, setPage] = useState<PaginationType>({
        skip: 0,
        take: 12
    })
    const [sort, setSort] = useState<string | undefined>()

    useEffect(() => {
        // todo
        // setTotal(data.length)
        setTotal(TestProducts.length)
    }, [])

    useEffect(() => {
        console.log(
            "items",
            TestProducts.slice(page.skip, page.skip + page.take),
            page,
            TestProducts
        )
        setPageItems(TestProducts.slice(page.skip, page.skip + page.take))
    }, [page])

    const handlePaginate = (e: any) => {
        setPage(e)
    }

    const handleSort = (e: any) => {
        setSort(e)
    }

    return (
        <StyledStoreLayout className="page-container">
            <Container>
                <Row>
                    <Col sm={12} md={4} lg={3}>
                        <p>nav</p>
                    </Col>
                    <Col className="grid-container" sm={12} md={8} lg={9}>
                        <h1>{category || "All Products"}</h1>
                        <div className="sort">
                            <p className="fade">{`Items ${pageItems.length} of ${total}`}</p>

                            <p>Sort By</p>
                            <Select
                                name="pagesort"
                                options={[
                                    {
                                        value: "price",
                                        label: "Price",
                                        default: true
                                    },
                                    {
                                        value: "size",
                                        label: "Size"
                                    }
                                ]}
                                onChange={handleSort}
                            />
                        </div>
                        <div className="product-grid">
                            {pageItems.length > 0 ? (
                                [...pageItems, "", "", "", ""].map(
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
                                            <span className="spacer"></span>
                                        )
                                )
                            ) : (
                                <p>No matching products.</p>
                            )}
                        </div>
                        <Pagination
                            pageTotal={pageItems.length}
                            onChange={handlePaginate}
                            total={total}
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
            display: flex;
            flex-flow: row wrap;
            gap: 48px;
        }
    }
`

export default Products
