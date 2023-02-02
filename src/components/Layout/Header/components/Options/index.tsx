import { Link } from "react-router-dom"

import ProfileIcon from "../../../../../assets/images/ico-profile.svg"
import { useAuthContext } from "../../../../../auth/AuthenticationProvider"
import Button from "../../../../Button"
import { ButtonVersionType } from "../../../../Button/styles"

import * as S from "./styles"

export const Options = () => {
    const { user, logoutUser } = useAuthContext()

    return (
        <S.Options>
            <img alt="" src={ProfileIcon} />
            <div>
                <p>My account</p>
                <div>
                    {!user ? (
                        <>
                            <Link to="login">Sign In</Link>
                            {"/"}
                            <Link to="register">Create an Account</Link>
                        </>
                    ) : (
                        <>
                            <Button
                                version={ButtonVersionType.LINK}
                                label="Logout"
                                onClick={logoutUser}
                            />{" "}
                            / <Link to="profile">My Profile</Link>
                        </>
                    )}
                </div>
            </div>
        </S.Options>
    )
}
