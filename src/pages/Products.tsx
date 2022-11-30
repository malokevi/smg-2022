import styled from "styled-components"

import { Col, Container, Row } from "../components/Layout/Grid"
import { ProductsGrid } from "../components/store"

const Products = () => {
    return (
        <StyledStoreLayout className="page-container">
            <Container>
                <Row>
                    <Col sm={12} md={4} lg={3}>
                        <p>nav</p>
                    </Col>
                    <ProductsGrid />
                </Row>
            </Container>
        </StyledStoreLayout>
    )
}

const StyledStoreLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;

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
