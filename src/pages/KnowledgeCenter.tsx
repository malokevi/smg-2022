import styled from "styled-components"

import { Col, Container, Row } from "../components/Layout/Grid"
import { PageTitle } from "../components/PageTitle"

const KnowledgeCenter = () => {
    return (
        <StyledKnowledgeCenter>
            <Container>
                <Row>
                    <Col>
                        <PageTitle>Knowledge Center</PageTitle>
                    </Col>
                </Row>
            </Container>
        </StyledKnowledgeCenter>
    )
}

const StyledKnowledgeCenter = styled.div`
    padding: ${({ theme }) => theme.padding.page} 0;
    display: flex;
    flex-flow: column;
`

export default KnowledgeCenter
