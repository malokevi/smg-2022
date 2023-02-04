import { useQuery } from "@apollo/client"
import styled from "styled-components"

import { KnowledgeCenterSection } from "../components/KnowledgeCenter"
import { Col, Container, Row } from "../components/Layout/Grid"
import { PageTitle } from "../components/PageTitle"
import { INFO_CATEGORIES_GET } from "../gql/queries"
import { ApolloResponseT } from "../shared/types"

const KnowledgeCenter = () => {
    const { loading, error, data }: ApolloResponseT =
        useQuery(INFO_CATEGORIES_GET)
    const infoData = data?.infoCategories?.data || []

    // TODO - Add loading and error states
    if (loading) return <p>Submitting...</p>
    if (error) return <p>Submission error! ${error.message}`</p>

    return (
        <StyledKnowledgeCenter className="page-container">
            <Container>
                <Row>
                    <Col>
                        <PageTitle>Knowledge Center</PageTitle>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={4} lg={3}>
                        <p>nav</p>
                    </Col>
                    <Col sm={12} md={8} lg={9}>
                        {infoData.map((data) =>
                            data?.attributes ? (
                                <KnowledgeCenterSection
                                    key={data.attributes.label}
                                    data={data.attributes}
                                />
                            ) : null
                        )}
                    </Col>
                </Row>
            </Container>
        </StyledKnowledgeCenter>
    )
}

const StyledKnowledgeCenter = styled.div``

export default KnowledgeCenter
