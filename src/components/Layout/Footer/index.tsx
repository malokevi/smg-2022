import { Link } from "react-router-dom"

import Logo from "../../../assets/images/logo-final.png"
import { SocialLinks } from "./components/SocialLinks"
import { Col, Container, Row } from "../Grid"

import * as S from "./styles"

export const Footer = () => {
    return (
        <S.Footer>
            <Container>
                <Row>
                    <Col className="f-logos" lg={4} md={4} sm={12}>
                        <img alt="" src={Logo} />

                        <p>Connect With Us</p>

                        <SocialLinks />
                    </Col>
                    <Col className="footer-nav" lg={5} md={5} sm={12}>
                        <div>
                            <p>Company</p>
                            <ul>
                                <li>
                                    <Link to="about">About Us</Link>
                                </li>
                                <li>
                                    <Link to="shipping">
                                        Shipping and Returns
                                    </Link>
                                </li>
                                <li>
                                    <Link to="contact">Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="knowledge-center">
                                        Knowledge Center
                                    </Link>
                                </li>
                                <li>
                                    <Link to="privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="footer-nav" lg={3} md={3} sm={12}>
                        <div>
                            <p>My Account</p>
                            <ul>
                                <li>
                                    <Link to="account">My Account</Link>
                                </li>
                                <li>
                                    <Link to="account/orders">
                                        Order History
                                    </Link>
                                </li>
                                <li>
                                    <Link to="account/wish-list">
                                        Wish List
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Row>
                <Col>
                    <div className="copyright">
                        <p>
                            © {new Date().getFullYear()} Sleep Management Group. All
                            rights reserved.
                        </p>
                    </div>
                </Col>
            </Row>
        </S.Footer>
    )
}
