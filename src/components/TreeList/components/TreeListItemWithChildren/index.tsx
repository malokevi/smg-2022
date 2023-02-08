import { useEffect, useRef, useState } from "react"

import Caret from "../../../../assets/images/caret-down.svg"
import { ButtonVersionType } from "../../../Button/styles"
import { ListItemWithChildrenT, TreeListItemDropdownPropsT } from "../../types"
import { RenderTreeList } from "../RenderTreeList"

import * as S from "./styles"

interface TreeListItemWithChildrenPropsT
    extends TreeListItemDropdownPropsT,
        ListItemWithChildrenT {}

export const TreeListItemWithChildren = ({
    label,
    children,
    index,
    openedDropdownIndex,
    setOpenedDropdownIndex
}: TreeListItemWithChildrenPropsT) => {
    const dropdownIsOpen = openedDropdownIndex === index
    const listRef = useRef<HTMLUListElement>(null)
    const [dropdownState, setDropdownState] = useState({
        isOpen: false,
        dropdownHeight: 0
    })

    useEffect(() => {
        if (listRef.current) {
            const isOpen = index === openedDropdownIndex

            console.log(isOpen, index, openedDropdownIndex)

            setDropdownState({
                dropdownHeight: isOpen ? listRef.current.clientHeight : 0,
                isOpen
            })
        }
    }, [index, openedDropdownIndex, listRef])

    const handleToggleDropdown = () => {
        setOpenedDropdownIndex(
            typeof index === "number" && openedDropdownIndex !== index
                ? index
                : null
        )
    }

    return (
        <li>
            <S.StyledButton
                dropdownIsOpen={dropdownIsOpen}
                version={ButtonVersionType.LINK}
                onClick={handleToggleDropdown}
            >
                <img alt="" src={Caret} /> {label}
            </S.StyledButton>
            <S.TreeItemDropdown height={dropdownState.dropdownHeight}>
                <RenderTreeList ref={listRef} children={children} />
            </S.TreeItemDropdown>
        </li>
    )
}
