import styled from "styled-components"
import { useQuery } from "@apollo/client"

import { Col, Container, Row } from "../components/Layout/Grid"
import { ProductsGrid } from "../components/store"
import { GET_PRODUCTS } from "../gql/queries"
import { ApolloResponseT } from "../shared/types"

const Products = () => {
    const { loading, error, data }: ApolloResponseT = useQuery(GET_PRODUCTS)

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <StyledStoreLayout className="page-container">
            <Container>
                <Row>
                    <Col sm={12} md={4} lg={3}>
                        <p>nav</p>
                    </Col>
                    <ProductsGrid products={data?.products?.data} />
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
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        }
    }
`

export default Products
