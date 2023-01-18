import styled from "styled-components"
import { Link } from "react-router-dom"

import { Container, Col, Row } from "../../Grid"
import NavData from "../../../../static/navigation.json"

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
                                const key = `${label.replaceAll(
                                    " ",
                                    ""
                                )}-${to}-${index}`

                                return (
                                    <li key={key}>
                                        <Link to={to}>{label}</Link>

                                        {dropdown && (
                                            <div className="dropdown-container">
                                                <ul>
                                                    {dropdown.map(
                                                        ({ label, to }, i) => {
                                                            return (
                                                                <li
                                                                    key={`${key}-${i}`}
                                                                >
                                                                    <Link
                                                                        to={to}
                                                                    >
                                                                        {label}
                                                                    </Link>
                                                                </li>
                                                            )
                                                        }
                                                    )}
                                                </ul>
                                            </div>
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
            @media (max-width: 640px) {
                display: none;
            }

            padding: 16px 28px;
            text-transform: uppercase;

            &:first-of-type {
                padding-left: 0;
            }

            &:last-of-type {
                padding-right: 0;
            }

            &:hover .dropdown-container {
                display: flex;
            }

            & > div {
                position: absolute;
                left: 0;
                top: 100%;
                background-color: white;
                right: 0;
                box-shadow: 0 8px 12px rgb(0 0 0 / 8%);
                display: none;
                padding: 30px 24px;

                & > ul {
                    width: 100%;
                    list-style: none;
                    flex-flow: row wrap;
                    gap: 32px;
                    padding: 0;

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
    }
`

export default Navigation
