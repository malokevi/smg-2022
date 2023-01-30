import { Swiper } from "../../../../swiper"
import { SlideOne, SlideTwo } from "./slides"

import * as S from "./styles"

export const Hero = () => {
    return (
        <S.Hero>
            <Swiper
                settings={{
                    pagination: {
                        el: ".hero__pagination",
                        clickable: true
                    }
                }}
            >
                <Swiper.Slide>
                    <div className="full-height">
                        <SlideOne />
                    </div>
                </Swiper.Slide>
                <Swiper.Slide>
                    <div className="full-height">
                        <SlideTwo />
                    </div>
                </Swiper.Slide>
            </Swiper>
            <div className="hero__pagination" />
        </S.Hero>
    )
}
