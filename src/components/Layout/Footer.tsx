import styled from "styled-components"
import { Col, Container, Row } from "./Grid"
import Logo from "../../assets/images/logo-final.png"
import SocialLinks from "../SocialLinks"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <StyledFooter>
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
            <div className="copyright">
                <p>
                    © {new Date().getFullYear()} Sleep Management Group. All
                    rights reserved.
                </p>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    display: flex;
    flex-flow: column;
    border-top: 1px solid #eee;
    margin-top: auto;

    .container {
        padding: ${({ theme }) => theme.padding.gap} 0;

        .col {
            & > img {
                margin-bottom: 42px;
                max-width: 90%;
            }

            &.f-logos {
                p {
                    margin-bottom: 12px;
                }
            }

            &.footer-nav {
                & > div {
                    display: flex;
                    flex-flow: column nowrap;
                    margin-left: auto;

                    p {
                        margin-bottom: 18px;
                        font-weight: bold;
                    }

                    ul {
                        display: flex;
                        flex-flow: column nowrap;
                        gap: 18px;
                        list-style: none;
                        padding: 0;
                        margin-left: auto;
                    }
                }
            }
        }
    }

    .copyright {
        border-top: 1px solid ${({ theme }) => theme.colors.gray};
        display: flex;
        padding: 24px 0;

        p {
            color: #abadbc;
            margin: auto;
            font-size: ${({ theme }) => theme.fontSize.xs};
        }
    }
`

export default Footer
