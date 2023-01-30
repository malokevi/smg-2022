import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import styled from "styled-components"
import {
    NavigationOptions,
    PaginationOptions,
    ScrollbarOptions,
    SwiperOptions
} from "swiper/types"

type NavSettings<T> = boolean | T | undefined

type SwiperContainerProps = {
    children: React.ReactNode
    className?: string
    settings?: {
        breakpoints?: {
            [width: number]: SwiperOptions
            [ratio: string]: SwiperOptions
        }
        slidesPerView?: number | "auto"
        autoHeight?: boolean
        navigation?: NavSettings<NavigationOptions>
        pagination?: NavSettings<PaginationOptions>
        scrollbar?: NavSettings<ScrollbarOptions>
    }
}

export const SwiperContainer = ({
    children,
    className,
    settings = {
        slidesPerView: 1
    }
}: SwiperContainerProps) => {
    return (
        <StyledSwiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            breakpoints={settings?.breakpoints}
            autoHeight={settings?.autoHeight}
            autoplay={{ delay: 5000 }}
            spaceBetween={0}
            slidesPerView={settings.slidesPerView}
            navigation={settings?.navigation}
            pagination={settings?.pagination}
            scrollbar={settings?.scrollbar}
            loop
            observer
            observeParents
            grabCursor
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
