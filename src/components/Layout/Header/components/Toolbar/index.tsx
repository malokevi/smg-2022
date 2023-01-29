import { Cart } from "../../../../Cart"
import { SearchBar } from "../../../../SearchBar"
import { Favorites } from "../Favorites/Favorites"
import { Hamburger } from "../Hamburger"
import { Options } from "../Options"

import * as S from './styles'

export const Toolbar = () => {
    return (
        <S.Toolbar>
            <Hamburger />
            <div className="menu-tools__section">
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
