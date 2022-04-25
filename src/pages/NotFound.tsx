import styled from "styled-components"
import { Col, Container, Row } from "../components/Layout/Grid"
import NotFoundVector from "../assets/images/404-vec.svg"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <StyledNotFound>
            <Container>
                <Row>
                    <Col>
                        <img src={NotFoundVector} alt="" />
                        <div className="text-blob">
                            <p>Lost?</p>
                            <button
                                onClick={() => navigate(-1)}
                                className="button-reset"
                            >
                                Go back!
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledNotFound>
    )
}

const StyledNotFound = styled.div`
    padding-bottom: 112px;

    img {
        margin: auto;
        max-width: 500px;
    }

    .text-blob {
        display: flex;
        flex-flow: row nowrap;
        margin: 24px auto auto;

        p,
        button {
            font-size: 24px;
            margin: auto 0;
            padding: 0;
            line-height: 1;
        }

        p {
            margin-right: 12px;
        }

        button {
            &:hover {
                color: ${({ theme }) => theme.colors.blue}}
            }
        }
    }
`

export default NotFound
