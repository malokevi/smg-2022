import { createContext, useContext, useState } from "react"

import { Navigation } from "./components/Navigation"
import { QuickLinks } from "./components/QuickLinks"
import { Breadcrumb } from "./components/Breadcrumb"
import { HeaderBody } from "./components/HeaderBody"

import * as S from "./styles"

type HeaderContextValueT = {
    mobileNavIsOpen: boolean
    setMobileNavIsOpen: (isOpen: boolean) => void
}

const HeaderContext = createContext({
    mobileNavIsOpen: false,
    setMobileNavIsOpen: (isOpen: boolean) => {}
} as HeaderContextValueT)

// custom hook for quick access to context
export const useHeaderContext = () => useContext(HeaderContext)

export const Header = () => {
    const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)

    const handleMobileNavChange = (isOpen: boolean) => {
        setMobileNavIsOpen(isOpen)
    }

    return (
        <HeaderContext.Provider
            value={{
                setMobileNavIsOpen: handleMobileNavChange,
                mobileNavIsOpen
            }}
        >
            <S.Header>
                <QuickLinks />
                <HeaderBody />
                <Navigation />
                <Breadcrumb />
            </S.Header>
        </HeaderContext.Provider>
    )
}
