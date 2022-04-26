export type RouteObject = {
    caseSensitive?: boolean
    children?: RouteObject[]
    skipChildren?: boolean
    element?: React.ReactNode
    index?: boolean
    path?: string
    label?: string
}

// Form Select Box - Option
export type SelectOptionType = {
    value: string | number
    label: string
    default?: boolean
}

//Pagination types
export type PaginationType = {
    skip: number
    take: number
}
