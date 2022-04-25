import styled from "styled-components"
import MetaIcon from "../assets/images/meta-icon.png"

const SocialLinks = () => {
    return (
        <StyledSocialLinks>
            <a href="https://facebook.com">
                <img src={MetaIcon} alt="Link to meta" />
            </a>
        </StyledSocialLinks>
    )
}

const StyledSocialLinks = styled.div`
    display: flex;
    flex-flow: row nowrap;

    a {
        transition: opacity 0.25s ease-in-out;
        &:hover {
            opacity: 0.8;
        }

        img {
            max-width: 42px;
            margin: 0;
        }
    }
`

export default SocialLinks
