import styled from "styled-components"
import { Outlet } from "react-router"

import { Container } from "../../components/Layout/Grid"

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
    padding: ${({ theme }) => theme.padding.pageBc} 0
        ${({ theme }) => theme.padding.gap};

    .grid-container {
        display: flex;
        flex-flow: column;
        gap: ${({ theme }) => theme.padding.gap};
    }
`

export default BlogLayout
