import clsx from 'clsx'
import { useState } from 'react'
import * as S from './styles'

export const Hamburger = () => {
    const [navIsOpen, setNavIsOpen] = useState(false)

    const handleToggleMobileNav = () => {
        setNavIsOpen((prev) => !prev)
    }

    return (
        <S.Hamburger className={clsx({ "is-active": navIsOpen })} onClick={handleToggleMobileNav}>
            <span></span>
            <span></span>
            <span></span>
        </S.Hamburger>
    )
}