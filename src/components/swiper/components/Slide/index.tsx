import { SwiperSlide } from "swiper/react"

type SlideProps = {
    children: React.ReactNode
    className?: string
}

export const Slide = ({ children, className }: SlideProps) => {
    return <SwiperSlide className={className}>{children}</SwiperSlide>
}
