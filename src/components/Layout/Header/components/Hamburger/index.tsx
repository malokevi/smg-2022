import { useEffect, useState } from 'react'
import clsx from 'clsx'

import * as S from './styles'

type HamburgerPropsT = {
    className?: string
    onClick?: (isOpen: boolean) => void
    value?: boolean
    isStatic?: boolean
}

export const Hamburger = ({
    className,
    onClick,
    value = false,
    isStatic = false
}: HamburgerPropsT) => {
    const [isActive, setIsActive] = useState(value)

    useEffect(() => {
        setIsActive(value)
    }, [value])

    const handleToggleHamburger = () => {
        const active = !isActive
        !isStatic && setIsActive(active)
        onClick && onClick(active)
    }

    return (
        <S.Hamburger
            className={clsx(className, { "is-active": isActive })}
            onClick={handleToggleHamburger}
        >
            <span></span>
            <span></span>
            <span></span>
        </S.Hamburger>
    )
}