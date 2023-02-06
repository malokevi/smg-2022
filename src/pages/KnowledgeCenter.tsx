import { useQuery } from "@apollo/client"
import styled from "styled-components"

import { KnowledgeCenterSection } from "../components/KnowledgeCenter"
import { Col, Container, Row } from "../components/Layout/Grid"
import { PageTitle } from "../components/PageTitle"
import { TreeList } from "../components/TreeList"
import { INFO_CATEGORIES_GET } from "../gql/queries"
import { ApolloResponseT } from "../shared/types"

const formatListData = (data: any, index?: number) =>
    data.map((d: any, i: number) => {
        const { attributes } = d || {}
        const { infos, label } = attributes || {}

        const value = {
            uid: `kc-${!!index ? index : 0}-${i}`,
            label
        }

        return infos?.data
            ? {
                  ...value,
                  children: formatListData(infos.data, i)
              }
            : value
    })

const KnowledgeCenter = () => {
    const { loading, error, data }: ApolloResponseT =
        useQuery(INFO_CATEGORIES_GET)
    const infoData = data?.infoCategories?.data || []

    // TODO - Add loading and error states
    if (loading) return <p>Submitting...</p>
    if (error) return <p>Submission error! ${error.message}`</p>

    const formatted = formatListData(infoData)

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
                        <TreeList listData={formatted} />
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
