import styled from "styled-components"
import CartIcon from "../assets/images/ico-cart.svg"

const Cart = () => {
    return (
        <StyledCart className="button-reset">
            <img alt="" src={CartIcon} />
        </StyledCart>
    )
}

const StyledCart = styled.button`
    display: flex;
    margin: auto 0;

    img {
        height: 28px;
    }
`

export default Cart
