import { useParams } from "react-router"
import styled from "styled-components"
import { Col, Container, Row } from "../components/Layout/Grid"
import GridItem from "../components/Products/GridItem"
import TestProducts from "../static/products.json"

const Products = () => {
    let { category } = useParams<"category">()

    console.log("check category", category)

    return (
        <StyledStoreLayout>
            <Container>
                <Row>
                    <Col sm={12} md={4} lg={3}>
                        <p>nav</p>
                    </Col>
                    <Col sm={12} md={8} lg={9}>
                        <div className="product-grid">
                            {TestProducts.map(
                                ({ label, price, salePrice, image }) => (
                                    <GridItem
                                        label={label}
                                        price={price}
                                        salePrice={salePrice}
                                        image={image}
                                    />
                                )
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledStoreLayout>
    )
}

const StyledStoreLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: ${({ theme }) => theme.padding.gap};

    .product-grid {
        display: flex;
        flex-flow: row wrap;
        gap: 48px;
    }
`

export default Products
