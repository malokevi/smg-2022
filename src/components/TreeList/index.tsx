import { ListDataItemType } from "./types"
import { RenderTreeList } from "./components/RenderTreeList"

import * as S from "./styles"

export type TreeListPropsT = {
    title?: string
    listData: ListDataItemType[]
}

export const TreeList = ({ title, listData }: TreeListPropsT) => {
    return (
        <S.TreeList>
            {title && <p className="tree-list__title">{title}</p>}
            <RenderTreeList children={listData} />
        </S.TreeList>
    )
}
