import HeartIcon from "../../../../../assets/images/ico-heart.svg"

import * as S from './styles'

type FavoritesProps = {
    className?: string
}

export const Favorites = ({ className }: FavoritesProps) => {
    return (
        <S.Favorites className={className}>
            <img src={HeartIcon} alt="" />
        </S.Favorites>
    )
}
