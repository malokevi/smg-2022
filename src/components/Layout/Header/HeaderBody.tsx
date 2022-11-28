import styled from "styled-components"
import { Link } from "react-router-dom"

import { Col, Container, Row } from "../Grid"
import Logo from "../../../assets/images/logo-final.png"
import Cart from "../../Cart"
import SearchBar from "../../SearchBar"
import ProfileOptions from "./ProfileOptions"
import Favourites from "../../Favourites"

const HeaderBody = () => {
    return (
        <StyledHeaderBody>
            <Container>
                <Row>
                    <Col lg={3} md={4} sm={5}>
                        <Link to="">
                            <img
                                alt="Sleep Management Group homepage link"
                                className="logo"
                                src={Logo}
                            />
                        </Link>
                    </Col>
                    <Col lg={9} md={8} sm={7}>
                        <AccountOptions />
                    </Col>
                </Row>
            </Container>
        </StyledHeaderBody>
    )
}

const AccountOptions = () => {
    return (
        <StyledAccountOptions>
            <SearchBar />
            <Cart />
            <Favourites />
            <ProfileOptions />
        </StyledAccountOptions>
    )
}

const StyledAccountOptions = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 28px;
    margin: auto 0 auto auto;
`

const StyledHeaderBody = styled.div`
    display: flex;
    flex-flow: column;
    padding: 12px 0;

    .logo {
        max-height: 130px;
        align-self: center;
    }
`

export default HeaderBody
