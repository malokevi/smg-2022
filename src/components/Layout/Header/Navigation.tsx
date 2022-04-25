import styled from "styled-components"
import { Container, Col, Row } from "../Grid"
import { Link } from "react-router-dom"
import NavData from "../../../static/navigation.json"

type DropdownLinkType = {
    to: string
    label: string
}

interface LinkType extends DropdownLinkType {
    dropdown?: DropdownLinkType[]
}

export type NavType = LinkType[]

const Navigation = () => {
    const navData: NavType = NavData

    return (
        <StyledNavigation>
            <Container>
                <Row>
                    <Col>
                        <ul className="navigation">
                            {navData.map(({ dropdown, label, to }, index) => {
                                return (
                                    <li key={`${label}-${to}-${index}`}>
                                        <Link to={to}>{label}</Link>

                                        {dropdown && (
                                            <ul>
                                                {dropdown.map(
                                                    ({ label, to }, i) => {
                                                        return (
                                                            <li>
                                                                <Link
                                                                    key={`dropdown-${label}-${to}-${i}`}
                                                                    to={to}
                                                                >
                                                                    {label}
                                                                </Link>
                                                            </li>
                                                        )
                                                    }
                                                )}
                                            </ul>
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </StyledNavigation>
    )
}

const StyledNavigation = styled.div`
    display: flex;
    flex-flow: column;
    border-top: 1px solid ${({ theme }) => theme.colors.gray};
    box-shadow: 0 10px 10px -10px rgb(0 0 0 / 10%);
    z-index: 1;

    .row {
        position: relative;
    }

    li {
        font-weight: 700;
        font-size: ${({ theme }) => theme.fontSize.xs};
    }

    ul.navigation {
        display: flex;
        flex-flow: row nowrap;
        margin: 0 0 0 auto;
        list-style: none;
        flex-grow: 2;

        & > li {
            padding: 16px 28px;
            text-transform: uppercase;

            &:first-of-type {
                padding-left: 0;
            }

            &:last-of-type {
                padding-right: 0;
            }

            &:hover ul {
                display: flex;
            }

            & > ul {
                position: absolute;
                left: 0;
                top: 100%;
                background-color: white;
                width: 100%;
                box-shadow: 0 8px 12px rgb(0 0 0 / 8%);
                display: none;
                list-style: none;
                flex-flow: row wrap;
                gap: 32px;
                padding: 30px 22px;

                li {
                    width: 25%;
                    margin: 0;

                    a {
                        padding: 10px;
                        font-size: ${({ theme }) => theme.fontSize.xs};
                    }
                }
            }
        }
    }
`

export default Navigation
