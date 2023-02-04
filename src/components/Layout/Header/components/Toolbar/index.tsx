import { Cart } from "../../../../Cart"
import { SearchBar } from "../../../../SearchBar"
import { Favorites } from "../Favorites/Favorites"
import { Options } from "../Options"
import { useHeaderContext } from "../.."

import * as S from "./styles"

export const Toolbar = () => {
    const { setMobileNavIsOpen, mobileNavIsOpen } = useHeaderContext()

    return (
        <S.Toolbar>
            <div className="menu-tools__mobile">
                <S.StyledCart />
                <S.StyledHamburger
                    onClick={(isOpen: boolean) => setMobileNavIsOpen(isOpen)}
                    value={mobileNavIsOpen}
                />
            </div>
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
