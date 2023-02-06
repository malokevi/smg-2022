import { Link } from "react-router-dom"

import { ListDataItemType } from "../../types"
import { TreeListItemWithChildren } from "../TreeListItemWithChildren"

type RenderTreeListItemPropsT = { listItemData: ListDataItemType }

export const RenderTreeListItem = ({
    listItemData
}: RenderTreeListItemPropsT) => {
    if ("children" in listItemData) {
        return <TreeListItemWithChildren {...listItemData} />
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
