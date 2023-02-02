import { Testimonial, TestimonialType } from "../Testimonial"

import { Swiper } from "../../../swiper"

import * as S from "./styles"

type TestimonialsType = {
    data: TestimonialType[]
    className: string
}

export const TestimonialsCarousel = ({ data, className }: TestimonialsType) => {
    return (
        <S.TestimonialSwiper
            settings={{
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                autoHeight: true,
                pagination: false,
                scrollbar: false
            }}
            className={className}
        >
            {data.map((t) => (
                <Swiper.Slide key={`testimonial-${t.author}`}>
                    <Testimonial {...t}>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </Testimonial>
                </Swiper.Slide>
            ))}
        </S.TestimonialSwiper>
    )
}
