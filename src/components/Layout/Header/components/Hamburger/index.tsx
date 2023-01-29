import { useState } from 'react'
import clsx from 'clsx'

import * as S from './styles'

type HamburgerPropsT = {
    className?: string
    onClick?: (isOpen: boolean) => void
}

export const Hamburger = ({ className, onClick }: HamburgerPropsT) => {
    const [navIsOpen, setNavIsOpen] = useState(false)

    const handleToggleMobileNav = () => {
        const isOpen = !navIsOpen
        setNavIsOpen(isOpen)
        onClick && onClick(isOpen)

    }

    return (
        <S.Hamburger className={clsx(className, { "is-active": navIsOpen })} onClick={handleToggleMobileNav}>
            <span></span>
            <span></span>
            <span></span>
        </S.Hamburger>
    )
}