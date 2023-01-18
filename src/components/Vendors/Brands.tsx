import FisherPaykal from "../../assets/images/vendors/fisher-and-paykel.png"
import Kego from "../../assets/images/vendors/kego.png"
import Phillips from "../../assets/images/vendors/phillips.png"
import ResMed from "../../assets/images/vendors/resmed.png"
import { Container, Row } from "../Layout/Grid"

import * as S from "./styles"

export const Vendors = () => {
    return (
        <S.BrandsContainer>
            <Container>
                <Row>
                    <S.Brands>
                        <img loading="lazy" src={FisherPaykal} alt="" />
                        <img loading="lazy" src={Kego} alt="" />
                        <img loading="lazy" src={Phillips} alt="" />
                        <img loading="lazy" src={ResMed} alt="" />
                    </S.Brands>
                </Row>
            </Container>
        </S.BrandsContainer>
    )
}
