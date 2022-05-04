import styled from "styled-components"
import { Col, Container, Row } from "../../components/Layout/Grid"

const BlogArticle = () => {
    return (
        <StyledBlogArticle>
            <Container>
                <Row>
                    <Col>
                        <h1>Blog</h1>
                    </Col>
                </Row>
            </Container>
        </StyledBlogArticle>
    )
}

const StyledBlogArticle = styled.div`
    h1 {
        margin-bottom: 52px;
    }

    padding: ${({ theme }) => theme.padding.pageBc} 0
        ${({ theme }) => theme.padding.gap};
`

export default BlogArticle
