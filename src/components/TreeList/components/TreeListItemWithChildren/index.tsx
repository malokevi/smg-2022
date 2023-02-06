import { useRef, useState } from "react"
import styled from "styled-components"

import Button from "../../../Button"
import { ButtonVersionType } from "../../../Button/styles"
import { ListItemWithChildrenT } from "../../types"
import { RenderTreeListItem } from "../RenderTreeListItem"

export const TreeListItemWithChildren = ({
    label,
    children
}: ListItemWithChildrenT) => {
    const listRef = useRef<HTMLUListElement>(null)
    const [dropdownState, setDropdownState] = useState({
        isOpen: false,
        dropdownHeight: 0
    })

    const handleOpenDropdown = () => {
        setDropdownState((prev) => {
            if (listRef.current) {
                const { isOpen } = prev

                return {
                    dropdownHeight: isOpen ? 0 : listRef.current.clientHeight,
                    isOpen: !isOpen
                }
            }

            return prev
        })
    }

    return (
        <li>
            <StyledButton
                version={ButtonVersionType.LINK}
                label={label}
                onClick={handleOpenDropdown}
            />
            <TreeItemDropdown height={dropdownState.dropdownHeight}>
                <ul ref={listRef}>
                    {children.map((item, i) => (
                        <RenderTreeListItem
                            key={`${item.label.replaceAll(" ", "")}-${i}`}
                            listItemData={item}
                        />
                    ))}
                </ul>
            </TreeItemDropdown>
        </li>
    )
}

const TreeItemDropdown = styled.div<{
    height: number
}>`
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    height: ${({ height }) => height}px;
`

const StyledButton = styled(Button)`
    align-self: flex-start;
    font-size: ${({ theme }) => theme.fontSize.md};
`
