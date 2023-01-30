import clsx from "clsx"
import { useState } from "react"
import { Link } from "react-router-dom"

import Caret from '../../../../../assets/images/caret-down.svg'
import NavData from "../../../../../static/navigation.json"
import { Col, Row } from "../../../Grid"

import * as S from './styles'

type NavigationPropsT = {
    isOpenOnMobile: boolean
}

type DropdownLinkType = {
    to: string
    label: string
}

interface LinkType extends Omit<DropdownLinkType, "to"> {
    dropdown?: DropdownLinkType[]
    to?: string
}

export type NavType = LinkType[]

export const Navigation = ({ isOpenOnMobile }: NavigationPropsT) => {
    const [visibleSubnav, setVisibleSubnav] = useState<number | undefined>()
    const navData: NavType = NavData

    const handleSetVisibleSubnav = (index?: number) => {
        setVisibleSubnav(index === visibleSubnav ? undefined : index)
    }

    return (
        <S.Navigation isOpenOnMobile={isOpenOnMobile}>
            <S.StyledContainer>
                <Row>
                    <Col>
                        <S.StyledMobileToolbar />
                        <ul className="navigation">
                            {navData.map(({ dropdown, label, to }, index) => {
                                const key = `${label.replaceAll(
                                    " ",
                                    ""
                                )}-${to}-${index}`

                                return (
                                    <li key={key} className={clsx("navigation__item", { "navigation__item--is-active": index === visibleSubnav })}>
                                        {
                                            to
                                                ? <Link to={to}>{label}</Link>
                                                : <button type="button" onClick={() => handleSetVisibleSubnav(index)}>{label} <img alt="" src={Caret} /></button>
                                        }

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
            </S.StyledContainer>
        </S.Navigation>
    )
}
