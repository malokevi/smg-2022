import { useHeaderContext } from "../.."
import { Cart } from "../../../../Cart"
import { SearchBar } from "../../../../SearchBar"
import { Favorites } from "../Favorites/Favorites"
import { Options } from "../Options"

import * as S from './styles'

export const Toolbar = () => {
    const { setMobileNavIsOpen, mobileNavIsOpen } = useHeaderContext()

    return (
        <S.Toolbar>
            <S.StyledHamburger onClick={(isOpen: boolean) => setMobileNavIsOpen(isOpen)} value={mobileNavIsOpen} />
            <div className="menu-tools__section menu-tools__section--search">
                <SearchBar />
            </div>
            <div className="menu-tools__section">
                <Cart />
                <Favorites className="menu-tools__section__favorites" />
                <Options />
            </div>
        </S.Toolbar>
    )
}
