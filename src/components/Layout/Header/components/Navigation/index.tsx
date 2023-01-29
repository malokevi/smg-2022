import { Link } from "react-router-dom"

import { Container, Col, Row } from "../../../Grid"
import NavData from "../../../../../static/navigation.json"

import * as S from './styles'

type NavigationPropsT = {
    isOpenOnMobile: boolean
}

type DropdownLinkType = {
    to: string
    label: string
}

interface LinkType extends DropdownLinkType {
    dropdown?: DropdownLinkType[]
}

export type NavType = LinkType[]

export const Navigation = ({ isOpenOnMobile }: NavigationPropsT) => {
    const navData: NavType = NavData

    console.log('isOpenOnMobile', isOpenOnMobile)

    return (
        <S.Navigation isOpenOnMobile={isOpenOnMobile}>
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
