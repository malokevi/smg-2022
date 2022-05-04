import styled from "styled-components"
import { Col, Container, Row } from "../../components/Layout/Grid"
import TestData from "../../static/blog.json"
import BlogPreview from "../../components/BlogPreview"
import { motion } from "framer-motion"
import { staggerChildren } from "../../shared/motion-variants"

const Blog = () => {
    return (
        <StyledBlog>
            <Container>
                <Row>
                    <Col>
                        <h1>Blog</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={9} lg={10}>
                        <motion.div
                            className="grid-container"
                            variants={staggerChildren}
                            initial="hide"
                            animate="show"
                        >
                            {TestData.map((item) => (
                                <BlogPreview {...item} />
                            ))}
                        </motion.div>
                    </Col>
                    <Col sm={12} md={3} lg={2}>
                        <p>nav</p>
                    </Col>
                </Row>
            </Container>
        </StyledBlog>
    )
}

const StyledBlog = styled.div`
    h1 {
        margin-bottom: 52px;
    }

    padding: ${({ theme }) => theme.padding.pageBc} 0
        ${({ theme }) => theme.padding.gap};

    .grid-container {
        display: flex;
        flex-flow: column;
        gap: ${({ theme }) => theme.padding.gap};
    }
`

export default Blog
