export type RouteObject = {
    caseSensitive?: boolean
    children?: RouteObject[]
    skipChildren?: boolean
    element?: React.ReactNode
    index?: boolean
    path?: string
    label?: string
}
