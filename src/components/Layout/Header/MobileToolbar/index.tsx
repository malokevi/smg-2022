import { useState } from "react"

import SearchIcon from "../../../../assets/images/ico-search.svg"
import { SearchBar } from "../../../SearchBar"
import { Options } from "../components/Options"

import * as S from './styles'

type MobileToolbarPropsT = {
    className?: string
}

//  todo - make seachIcon button more apparent
export const MobileToolbar = ({ className }: MobileToolbarPropsT) => {
    const [showSearch, setShowSearch] = useState<boolean>(false)

    const handleShowSearch = () => {
        setShowSearch((prev) => !prev)
    }

    return (
        <S.MobileToolbar className={className} showSearch={showSearch}>
            <div className="mt__inner">
                <Options />
                <button className="mt__inner__searchBtn" onClick={handleShowSearch}>
                    <img alt="open search bar" src={SearchIcon} />
                </button>
            </div>
            <div className="mt__searchBar">
                <SearchBar isDisabled={!showSearch} />
            </div>
        </S.MobileToolbar>
    )
}