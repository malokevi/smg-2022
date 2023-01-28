import styled from "styled-components"
import { motion } from "framer-motion"

import { Col, Container, Row } from "../../components/Layout/Grid"
import TestData from "../../static/blog.json"
import { BlogPreview } from "../../components/Blog"
import { staggerChildren } from "../../shared/motion-variants"
import { PageTitle } from "../../components/PageTitle"

const Blog = () => {
    return (
        <StyledBlog>
            <Container>
                <Row>
                    <Col>
                        <PageTitle>Blog</PageTitle>
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
                            {TestData.map((item, i) => (
                                <BlogPreview key={`bpr-${i}`} {...item} />
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
    .grid-container {
        display: flex;
        flex-flow: column;
        gap: ${({ theme }) => theme.padding.gap};
    }
`

export default Blog
