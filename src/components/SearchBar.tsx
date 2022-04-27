import styled from "styled-components"
import Input from "./Form/Input"
import SearchIcon from "../assets/images/ico-search-white.svg"
import { useState } from "react"

const SearchBar = () => {
    const [search, setSearch] = useState<string | undefined>()

    const handleSearch = (e: any) => {
        setSearch(e.target.value)
    }

    return (
        <StyledSearchBar>
            <Input
                name="search"
                icon={SearchIcon}
                onChange={handleSearch}
                value={search}
                type="text"
                placeholder="Search the store..."
            />
        </StyledSearchBar>
    )
}

const StyledSearchBar = styled.div`
    width: 380px;

    .input-container {
        overflow: hidden;

        button,
        input {
            border: 2px solid ${({ theme }) => theme.colors.blue};
        }

        button {
            border-radius: 0 ${({ theme }) => theme.borderRadius}
                ${({ theme }) => theme.borderRadius} 0 !important;
            display: flex;

            svg {
                margin: auto;
            }
        }
        input {
            flex-grow: 2;
            border-radius: ${({ theme }) => theme.borderRadius} 0 0
                ${({ theme }) => theme.borderRadius} !important;

            &:focus,
            &:focus-visible {
                outline: ${({ theme }) => theme.colors.blue};
            }
        }
    }
`

export default SearchBar
