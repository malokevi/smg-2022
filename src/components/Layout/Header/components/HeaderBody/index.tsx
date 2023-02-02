import { Link } from "react-router-dom"

import { Col, Container, Row } from "../../../Grid"
import Logo from "../../../../../assets/images/logo-final.png"
import LogoMobile from "../../../../../assets/images/logo-mobile.png"
import { useHeaderContext } from "../.."
import { Toolbar } from "../Toolbar"

import * as S from "./styles"

export const HeaderBody = () => {
    const { mobileNavIsOpen } = useHeaderContext()

    return (
        <S.Layout mobileNavIsOpen={mobileNavIsOpen}>
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={7}>
                        <Link className="logo-link" to="">
                            <img
                                alt="Sleep Management Group homepage"
                                className="logo-link__logo"
                                src={Logo}
                            />
                            <img
                                alt="Sleep Management Group homepage"
                                className="logo-link__logo-mobile"
                                src={LogoMobile}
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
