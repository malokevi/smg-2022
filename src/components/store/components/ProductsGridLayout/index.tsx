import { useQuery } from "@apollo/client"
import { GET_PRODUCTS } from "../../../../gql/queries"
import { ApolloResponseT } from "../../../../shared/types"
import { Loader } from "../../../Loader"
import { ProductsGrid } from "../ProductsGrid"

export const ProductsGridLayout = () => {
    const { loading, error, data }: ApolloResponseT = useQuery(GET_PRODUCTS)

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return <ProductsGrid products={data?.products?.data} />
}
