import styled from "styled-components"

import { Col, Container, Row } from "../../components/Layout/Grid"
import { PageTitle } from "../../components/PageTitle"

const BlogArticle = () => {
    return (
        <StyledBlogArticle>
            <Container>
                <Row>
                    <Col>
                        <PageTitle>Blog</PageTitle>
                    </Col>
                </Row>
            </Container>
        </StyledBlogArticle>
    )
}

const StyledBlogArticle = styled.div`
    padding: ${({ theme }) => theme.padding.pageBc} 0
        ${({ theme }) => theme.padding.gap};
`

export default BlogArticle
