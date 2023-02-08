import { fadeUp } from "../../../../shared/motion-variants"
import Button from "../../../Button"
import ComingSoonImage from "../../../../assets/images/coming-soon.jpg"
import { ButtonVersionType } from "../../../Button/styles"

import * as S from "./styles"

type GridItemPropsType = {
    id: string
    image?: any
    name: string
    price: number
    salePrice?: number
    vendor?: string
}

export const GridItem = ({
    image = ComingSoonImage,
    name,
    price,
    salePrice
}: GridItemPropsType) => {
    const handleAddToCart = (e: any) => {
        e.stopPropagation()
        console.log("add to cart event", e)
    }

    return (
        <S.GridItem
            onClick={(e) => {
                console.log("click grid item event", e)
            }}
            image={image}
            variants={fadeUp}
        >
            <div className="product-image"></div>
            <div className="product-details">
                <p>{name}</p>

                <div>
                    <div className="price">
                        {salePrice && <p>${salePrice.toFixed(2)}</p>}
                        <p>${price.toFixed(2)}</p>
                    </div>
                    <Button
                        onClick={handleAddToCart}
                        version={ButtonVersionType.PRIMARY}
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>
        </S.GridItem>
    )
}
