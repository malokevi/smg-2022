import styled from "styled-components"
import { Link } from "react-router-dom"

import { Col, Container, Row } from "../../Grid"
import Logo from "../../../../assets/images/logo-final.png"
import Cart from "../../../Cart"
import ProfileOptions from "./ProfileOptions"
import { Favorites } from "./Favorites"
import { SearchBar } from "../../../SearchBar"

const HeaderBody = () => {
    return (
        <StyledHeaderBody>
            <Container>
                <Row>
                    <Col lg={4} md={4} sm={5}>
                        <Link to="">
                            <img
                                alt="Sleep Management Group homepage link"
                                className="logo"
                                src={Logo}
                            />
                        </Link>
                    </Col>
                    <Col lg={8} md={8} sm={7}>
                        <MenuTools />
                    </Col>
                </Row>
            </Container>
        </StyledHeaderBody>
    )
}

const MenuTools = () => {
    return (
        <StyledMenuTools>
            <div className="menu-tools__section">
                <SearchBar />
            </div>
            <div className="menu-tools__section">
                <Cart />
                <Favorites className="menu-tools__section__favorites" />
                <ProfileOptions />
            </div>
        </StyledMenuTools>
    )
}

const StyledMenuTools = styled.div`
    display: flex;
    flex-flow: column;
    gap: 12px 28px;
    margin: auto 0 auto auto;
    flex-direction: column-reverse;

    @media (min-width: 1320px) {
        flex-flow: row nowrap;
    }

    .menu-tools__section {
        display: flex;
        flex-flow: row nowrap;
        gap: 28px;
    }

    .menu-tools__section__favorites {
        display: none;

        @media (min-width: 860px) {
            display: flex;
        }
    }
`

const StyledHeaderBody = styled.div`
    display: flex;
    flex-flow: column;
    padding: 12px 0;

    @media (max-width: 640px) {
        overflow: hidden;
    }

    .logo {
        max-height: 105px;
        align-self: center;
        transition: max-height 0.25s ease-in-out;

        @media (min-width: 1200px) {
            max-height: 130px;
        }
    }
`

export default HeaderBody
