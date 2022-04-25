import styled from "styled-components"
import FisherPaykal from "../assets/images/vendors/fisher-and-paykel.png"
import Kego from "../assets/images/vendors/kego.png"
import Phillips from "../assets/images/vendors/phillips.png"
import ResMed from "../assets/images/vendors/resmed.png"

const Brands = () => {
    return (
        <StyledBrands>
            <img src={FisherPaykal} alt="" />
            <img src={Kego} alt="" />
            <img src={Phillips} alt="" />
            <img src={ResMed} alt="" />
        </StyledBrands>
    )
}

const StyledBrands = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: space-between;

    img {
        align-self: center;
    }
`

export default Brands
