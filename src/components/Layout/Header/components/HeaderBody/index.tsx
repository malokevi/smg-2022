import { Link } from "react-router-dom"

import { Col, Container, Row } from "../../../Grid"
import Logo from "../../../../../assets/images/logo-final.png"
import { Toolbar } from "../Toolbar"

import * as S from './styles'

export const HeaderBody = () => {
    return (
        <S.Layout>
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={7}>
                        <Link className="logo-link" to="">
                            <img
                                alt="Sleep Management Group homepage link"
                                className="logo-link__logo"
                                src={Logo}
                            />
                        </Link>
                    </Col>
                    <Col lg={8} md={6} sm={5}>
                        <Toolbar />
                    </Col>
                </Row>
            </Container>
        </S.Layout>
    )
}
