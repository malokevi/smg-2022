import axios from "axios"

export const getProductsService = async (): Promise<any> => {
    return await axios
        .get(`${process.env.REACT_APP_STRAPI_ENDPOINT}/api/products?populate=*`)
        .then(({ data }) => data.data)
}
