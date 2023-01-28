import styled from "styled-components"

import HeartIcon from "../../../../assets/images/ico-heart.svg"
import { buttonReset } from "../../../../theme/mixins/resets"

type FavoritesProps = {
    className?: string
}

export const Favorites = ({ className }: FavoritesProps) => {
    return (
        <StyledFavorites className={className}>
            <img src={HeartIcon} alt="" />
        </StyledFavorites>
    )
}

const StyledFavorites = styled.button`
    ${buttonReset}
    display: flex;
    margin: auto 0;

    img {
        height: 28px;
    }
`
