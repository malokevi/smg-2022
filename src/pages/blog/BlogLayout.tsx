import styled from "styled-components"
import { Col, Container, Row } from "../../components/Layout/Grid"
import { Outlet } from "react-router"

const BlogLayout = () => {
    return (
        <StyledBlogLayout>
            <Container>
                <Outlet />
            </Container>
        </StyledBlogLayout>
    )
}

const StyledBlogLayout = styled.div`
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

export default BlogLayout
