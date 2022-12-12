import styled from "styled-components"
import { SwiperSlide } from "swiper/react"

import DoubleQuote from "../assets/images/quotes.png"
import { Swiper } from "./swiper"

type TestimonialType = { text: string; author: string; regards: string }
type TestimonialsType = {
    data: TestimonialType[]
    className: string
}

export const Testimonials = ({ data, className }: TestimonialsType) => {
    return (
        <StyledTestimonials className={className}>
            {data.map((t) => (
                <Testimonial key={`testimonial-${t.author}`} {...t} />
            ))}
        </StyledTestimonials>
    )
}

export const TestimonialsCarousel = ({ data, className }: TestimonialsType) => {
    return (
        <Swiper className={className}>
            {data.map((t) => (
                <SwiperSlide key={`testimonial-${t.author}`}>
                    <Testimonial {...t} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

const Testimonial = ({ text, author, regards }: TestimonialType) => {
    return (
        <StyledTestimonial>
            <img src={DoubleQuote} alt="" />
            <p>{text}</p>
            <div>
                <p className="regards">{regards}</p>
                <p>{author}</p>
            </div>
        </StyledTestimonial>
    )
}

const StyledTestimonials = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
`

const StyledTestimonial = styled.div`
    display: flex;
    flex-flow: column;
    background-color: white;
    text-align: center;
    box-shadow: 0 8px 12px rgb(0 0 0 / 8%);
    padding: 48px 24px;
    width: 356px;
    margin: 0 auto;
    gap: 32px;

    p {
        font-size: ${({ theme }) => theme.fontSize.sm};
        line-height: 1.8;
    }

    & > div {
        p {
            &.regards {
                font-style: italic;
                font-size: ${({ theme }) => theme.fontSize.xs};
            }

            &:last-of-type {
                font-weight: bold;
                text-transform: capitalize;
            }
        }
    }

    img {
        opacity: 0.8;
        width: 40px;
        margin: 0 auto;
    }
`
