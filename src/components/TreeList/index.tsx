import { Link } from "react-router-dom"

import * as S from "./styles"

type ListItemT = {
    label: string
}

interface ListItemWithLinkT extends ListItemT {
    uid: string
}

interface ListItemWithChildrenT extends ListItemT {
    children: Array<ListDataItemType>
}

type ListDataItemType = ListItemWithLinkT | ListItemWithChildrenT

type TreeListPropsT = {
    title?: string
    listData: ListDataItemType[]
}

type RenderTreeListItemPropsT = { listItemData: ListDataItemType }

const RenderTreeListItem = ({ listItemData }: RenderTreeListItemPropsT) => {
    console.log("listItemData", listItemData)

    if ("children" in listItemData) {
        return (
            <li>
                <p>{listItemData.label}</p>
                <ul>
                    {listItemData.children.map((item) => (
                        <RenderTreeListItem listItemData={item} />
                    ))}
                </ul>
            </li>
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

export const TreeList = ({ title, listData }: TreeListPropsT) => {
    return (
        <S.TreeList>
            {title && <p className="tree-list__title">{title}</p>}
            <ul>
                {listData.map((item) => (
                    <RenderTreeListItem listItemData={item} />
                ))}
            </ul>
        </S.TreeList>
    )
}
