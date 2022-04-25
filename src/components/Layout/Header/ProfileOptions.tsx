import styled from "styled-components"
import ProfileIcon from "../../../assets/images/ico-profile.svg"
import { Link } from "react-router-dom"

const ProfileOptions = () => {
    return (
        <StyledProfileOptions>
            <img alt="" src={ProfileIcon} />
            <div>
                <p>My account</p>
                <div>
                    <Link to="login">Sign In</Link>
                    {"/"}
                    <Link to="register">Create an Account</Link>
                </div>
            </div>
        </StyledProfileOptions>
    )
}

const StyledProfileOptions = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 12px;

    & > div {
        display: flex;
        flex-flow: column nowrap;

        p {
            color: ${({ theme }) => theme.colors.text.faded};
            font-size: ${({ theme }) => theme.fontSize.xs};
        }

        & > div {
            display: flex;
            flex-flow: row nowrap;
            gap: 8px;
        }
    }

    img {
        height: 28px;
        margin: auto 0;
    }
`

export default ProfileOptions
