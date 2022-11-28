import styled from "styled-components"

import HeartIcon from "../assets/images/ico-heart.svg"

const Favourites = () => {
    return (
        <StyledFavourites className="button-reset">
            <img src={HeartIcon} alt="" />
        </StyledFavourites>
    )
}

const StyledFavourites = styled.button`
    display: flex;
    margin: auto 0;

    img {
        height: 28px;
    }
`

export default Favourites
