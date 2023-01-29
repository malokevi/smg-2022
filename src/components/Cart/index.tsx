import CartIcon from "../../assets/images/ico-cart.svg"

import * as S from "./styles"

type CartProps = {
    className?: string
}

export const Cart = ({ className }: CartProps) => {
    return (
        <S.Cart className={className}>
            <div className="cart">
                <img alt="" src={CartIcon} />

                <div className="cart-list">
                    <p>You have no items in your shopping cart</p>
                </div>
            </div>
        </S.Cart>
    )
}
