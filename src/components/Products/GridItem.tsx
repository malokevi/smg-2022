import styled from "styled-components"
import Button from "../Utilities/Button"
import ComingSoonImage from "../../assets/images/coming-soon.jpg"

type GridItemPropsType = {
    image?: any
    label: string
    price: number
    salePrice?: number
    brand?: string
}

const GridItem = ({
    image = ComingSoonImage,
    label,
    price,
    salePrice,
    brand
}: GridItemPropsType) => {
    const handleAddToCart = (e: any) => {
        console.log("add to cart event", e)
    }

    return (
        <StyledGridItem
            onClick={(e) => {
                console.log("click grid item event", e)
            }}
            image={image}
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
        </StyledGridItem>
    )
}

const StyledGridItem = styled.div<{ image: any }>`
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 2;
    flex-shrink: 0;
    border: 1px solid #eee;
    border-radius: ${({ theme }) => theme.borderRadius};
    overflow: hidden;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    width: 25%;

    &:hover {
        box-shadow: 0 0 20px rgb(0 0 0 / 10%);
    }

    .product-image {
        background-image: url(${({ image }) => image});
        height: 300px;
        background-size: cover;
        background-position: 50%;
    }

    .product-details {
        display: flex;
        flex-flow: column nowrap;
        padding: 12px;
        gap: 18px;

        & > div {
            display: flex;
            flex-flow: row nowrap;
            border-top: 1px solid ${({ theme }) => theme.colors.gray};
            padding-top: 18px;
            gap: 18px;

            button {
                padding: 17px 24px;
                color: #fff;
                background: #70cddd;
                font-size: 16px;
                line-height: unset;
                border-radius: 5px;
                border: none;
                transition: opacity 0.25s ease-in-out;

                &:hover {
                    opacity: 0.8;
                }
            }

            .price {
                margin-left: auto;

                p {
                    color: #c1282d;
                    font-size: ${({ theme }) => theme.fontSize.md};

                    &:nth-child(2) {
                        color: ${({ theme }) => theme.colors.text.dark};
                        opacity: 0.4;
                        text-decoration: line-through;
                        font-size: ${({ theme }) => theme.fontSize.xs};
                    }
                }
            }
        }
    }
`

export default GridItem
