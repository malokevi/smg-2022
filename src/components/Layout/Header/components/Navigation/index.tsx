import { Link } from "react-router-dom"

import { Container, Col, Row } from "../../../Grid"
import NavData from "../../../../../static/navigation.json"

import * as S from './styles'

type DropdownLinkType = {
    to: string
    label: string
}

interface LinkType extends DropdownLinkType {
    dropdown?: DropdownLinkType[]
}

export type NavType = LinkType[]

export const Navigation = () => {
    const navData: NavType = NavData

    return (
        <S.Navigation>
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
        </S.Navigation>
    )
}
