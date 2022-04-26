import styled from "styled-components"
import { Col, Container, Row } from "../components/Layout/Grid"

const Blog = () => {
    return (
        <StyledBlog>
            <Container>
                <Row>
                    <Col>
                        <h1>Blog</h1>
                    </Col>
                </Row>
            </Container>
        </StyledBlog>
    )
}

const StyledBlog = styled.div`
    padding: ${({ theme }) => theme.padding.page} 0;
    display: flex;
    flex-flow: column;
`

export default Blog
