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
                <Row className="blog-body">
                    <Col sm={12} md={12} lg={10}>
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
                    <Col sm={12} md={12} lg={2}>
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
        gap: 42px;
    }

    .blog-body {
        gap: 32px 0;

        & > div {
            &:first-of-type {
                @media (max-width: 991px) {
                    order: 2;
                }
            }

            &:last-of-type {
                @media (max-width: 991px) {
                    order: 1;
                }
            }
        }
    }
`

export default Blog
