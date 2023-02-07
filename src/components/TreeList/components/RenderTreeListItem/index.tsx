import { Link } from "react-router-dom"

import { ListDataItemType, TreeListItemDropdownPropsT } from "../../types"
import { TreeListItemWithChildren } from "../TreeListItemWithChildren"

interface RenderTreeListItemPropsT extends TreeListItemDropdownPropsT {
    listItemData: ListDataItemType
}

export const RenderTreeListItem = ({
    listItemData,
    index,
    openedDropdownIndex,
    setOpenedDropdownIndex
}: RenderTreeListItemPropsT) => {
    if ("children" in listItemData) {
        return (
            <TreeListItemWithChildren
                {...listItemData}
                index={index}
                openedDropdownIndex={openedDropdownIndex}
                setOpenedDropdownIndex={setOpenedDropdownIndex}
            />
        )
    }

    if ("uid" in listItemData) {
        return (
            <li>
                <Link to={listItemData.uid}>{listItemData.label}</Link>
            </li>
        )
    }

    return null
}
