import { useQuery } from "@apollo/client"

import { PRODUCTS_GET } from "../../../../gql/queries"
import { ApolloResponseT } from "../../../../shared/types"
import { Loader } from "../../../Loader"
import { ProductsGrid } from "../ProductsGrid"

export const ProductsGridLayout = () => {
    const { loading, error, data }: ApolloResponseT = useQuery(PRODUCTS_GET)

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return <ProductsGrid products={data?.products?.data} />
}
