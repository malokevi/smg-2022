import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import clsx from "clsx"

import Caret from '../../../../../assets/images/caret-down.svg'
import NavData from "../../../../../static/navigation.json"
import { Col, Row } from "../../../Grid"
import { useHeaderContext } from "../.."

import * as S from './styles'

type DropdownLinkType = {
    to: string
    label: string
}

interface LinkType extends Omit<DropdownLinkType, "to"> {
    dropdown?: DropdownLinkType[]
    to?: string
}

export type NavType = LinkType[]

export const Navigation = () => {
    const { mobileNavIsOpen, setMobileNavIsOpen } = useHeaderContext()
    const [visibleSubnav, setVisibleSubnav] = useState<number | undefined>()
    const navData: NavType = NavData
    const navRef = useRef<HTMLUListElement | null>(null)
    let location = useLocation()

    // on route change, scroll to top and close navigation
    useEffect(() => {
        handleSetVisibleSubnav()
        setMobileNavIsOpen(false)
        window.scrollTo(0, 0)
    }, [location]);

    // close subnav when clicking outside of navigation
    useEffect(() => {
        const handleClickOutside = ({ target }: MouseEvent): void => {
            if (navRef.current && !navRef.current.contains(target as Node)) {
                handleSetVisibleSubnav()
            }
        };

        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        };
    }, []);

    const handleSetVisibleSubnav = (index?: number) => {
        setVisibleSubnav(index === visibleSubnav ? undefined : index)
    }

    return (
        <S.Navigation isOpenOnMobile={mobileNavIsOpen}>
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
