import { useState } from "react"

import SearchIcon from "../../assets/images/ico-search-white.svg"
import { Input } from "../Form/Input"

import * as S from "./styles"

export const SearchBar = () => {
    const [search, setSearch] = useState<string | undefined>()

    const handleSearch = (e: any) => {
        setSearch(e.target.value)
    }

    return (
        <S.SearchBar>
            <Input
                name="search"
                icon={SearchIcon}
                onChange={handleSearch}
                value={search}
                type="text"
                placeholder="Search the store..."
            />

            <button className="searchBar__button">
                <img
                    className="searchBar__button__image"
                    alt="store search"
                    src={SearchIcon}
                />
            </button>
        </S.SearchBar>
    )
}
