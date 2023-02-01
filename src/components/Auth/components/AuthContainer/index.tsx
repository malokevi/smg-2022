import { Col, Container, Row } from "../../../Layout/Grid"

import * as S from "./styles"

export const AuthContainer = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
    return (
        <S.AuthContainer className={className}>
            <Container>
                <Row>
                    <Col>
                        <div className="auth-module-wrapper">{children}</div>
                    </Col>
                </Row>
            </Container>
        </S.AuthContainer>
    )
}

