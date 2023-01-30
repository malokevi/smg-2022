import { Link } from "react-router-dom"

import ProfileIcon from "../../../../../assets/images/ico-profile.svg"

import * as S from './styles'

export const Options = () => {
    return (
        <S.Options>
            <img alt="" src={ProfileIcon} />
            <div>
                <p>My account</p>
                <div>
                    <Link to="login">Sign In</Link>
                    {"/"}
                    <Link to="register">Create an Account</Link>
                </div>
            </div>
        </S.Options>
    )
}
