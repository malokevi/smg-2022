import { fadeUp } from "../../../../shared/motion-variants"
import Button from "../../../Utilities/Button"
import ComingSoonImage from "../../../../assets/images/coming-soon.jpg"

import * as S from "./styles"

type GridItemPropsType = {
    image?: any
    label: string
    price: number
    salePrice?: number
    brand?: string
}

export const GridItem = ({
    image = ComingSoonImage,
    label,
    price,
    salePrice,
    brand // TODO - unused var
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
                <p>{label}</p>

                <div>
                    <div className="price">
                        {salePrice && <p>${salePrice.toFixed(2)}</p>}
                        <p>${price.toFixed(2)}</p>
                    </div>
                    <Button
                        onClick={handleAddToCart}
                        version="primary"
                        label="Add to Cart"
                    />
                </div>
            </div>
        </S.GridItem>
    )
}
