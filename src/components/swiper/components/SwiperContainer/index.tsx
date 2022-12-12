import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import styled from "styled-components"

type SwiperContainerProps = {
    children: React.ReactNode
    className?: string
    settings?: {
        navigation: any
    }
}

export const SwiperContainer = ({
    children,
    className,
    settings = {
        navigation: true
    }
}: SwiperContainerProps) => {
    return (
        <StyledSwiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={settings.navigation}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            observer
            observeParents
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
            className={className}
        >
            {children}
        </StyledSwiper>
    )
}

const StyledSwiper = styled(Swiper)`
    width: 100%;
    height: 100%;

    .swiper-slide {
        height: auto;
    }
`
