import { ListDataItemType } from "./types"
import { RenderTreeListItem } from "./components/RenderTreeListItem"

import * as S from "./styles"

export type TreeListPropsT = {
    title?: string
    listData: ListDataItemType[]
}

export const TreeList = ({ title, listData }: TreeListPropsT) => {
    return (
        <S.TreeList>
            {title && <p className="tree-list__title">{title}</p>}
            <ul>
                {listData.map((item, i) => (
                    <RenderTreeListItem
                        key={`${item.label.replaceAll(" ", "")}-${i}`}
                        listItemData={item}
                    />
                ))}
            </ul>
        </S.TreeList>
    )
}
