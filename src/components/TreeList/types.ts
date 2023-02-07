export type TreeListItemDropdownPropsT = {
    index?: number
    openedDropdownIndex: number | null
    setOpenedDropdownIndex: (index: number | null) => void
}

export type ListItemT = {
    label: string
}

export interface ListItemWithLinkT extends ListItemT {
    uid: string
}

export interface ListItemWithChildrenT extends ListItemT {
    children: Array<ListDataItemType>
}

export type ListDataItemType = ListItemWithLinkT | ListItemWithChildrenT
