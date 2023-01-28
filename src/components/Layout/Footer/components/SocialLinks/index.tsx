import MetaIcon from "../assets/images/meta-icon.png"

import * as S from './styles'

export const SocialLinks = () => {
    return (
        <S.SocialLinks>
            <a href="https://facebook.com">
                <img src={MetaIcon} alt="Link to meta" />
            </a>
        </S.SocialLinks>
    )
}
