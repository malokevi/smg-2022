import styled from "styled-components"

import { Col, Container, Row } from "../components/Layout/Grid"
import { ProductsGridLayout } from "../components/store/components/ProductsGridLayout"

const Products = () => {
    return (
        <StyledStoreLayout className="page-container">
            <Container>
                <Row>
                    <Col sm={12} md={4} lg={3}>
                        <p>nav</p>
                    </Col>
                    <Col className="grid-container" sm={12} md={8} lg={9}>
                        <ProductsGridLayout />
                    </Col>
                </Row>
            </Container>
        </StyledStoreLayout>
    )
}

const StyledStoreLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;

    .grid-container {
        display: flex;
        flex-flow: column nowrap;
        gap: 24px;

        .product-grid {
            display: grid;
            grid-gap: 24px;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        }
    }
`

export default Products
