import { createContext, useContext } from "react"

import { ListDataItemType } from "./types"
import { RenderTreeList } from "./components/RenderTreeList"

import * as S from "./styles"

type TreeListContextValuesT = {
    activeId?: string
}

const TreeListContext = createContext({} as TreeListContextValuesT)

export const useTreeListContext = () => useContext(TreeListContext)

export type TreeListPropsT = {
    title?: string
    listData: ListDataItemType[]
    activeId?: string
}

export const TreeList = ({ title, listData, activeId }: TreeListPropsT) => {
    return (
        <TreeListContext.Provider value={{ activeId }}>
            <S.TreeList>
                {title && <p className="tree-list__title">{title}</p>}
                <RenderTreeList children={listData} />
            </S.TreeList>
        </TreeListContext.Provider>
    )
}
