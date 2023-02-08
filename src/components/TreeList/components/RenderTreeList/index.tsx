import React, { LegacyRef, useState } from "react" // TODO - why is typescript complaining about this import not being used?

import { RenderTreeListItem } from "../RenderTreeListItem"
import { ListDataItemType } from "../../types"

type RenderTreeListPropsT = {
    children: Array<ListDataItemType>
}

export const RenderTreeList = React.forwardRef(
    ({ children }: RenderTreeListPropsT, ref: LegacyRef<HTMLUListElement>) => {
        const [openedDropdown, setOpenedDropdown] = useState<number | null>(
            null
        )

        const handleSetOpenedDropdown = (index: number | null) => {
            setOpenedDropdown(index)
        }

        return (
            <ul ref={ref}>
                {children.map((item, i) => (
                    <RenderTreeListItem
                        key={`${item.label.replaceAll(" ", "")}-${i}`}
                        listItemData={item}
                        openedDropdownIndex={openedDropdown}
                        setOpenedDropdownIndex={handleSetOpenedDropdown}
                        index={i}
                    />
                ))}
            </ul>
        )
    }
)
