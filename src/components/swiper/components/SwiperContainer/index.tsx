import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

type SwiperContainerProps = {
    children: React.ReactNode
    className?: string
}

export const SwiperContainer = ({
    children,
    className
}: SwiperContainerProps) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
            className={className}
        >
            {children}
        </Swiper>
    )
}
