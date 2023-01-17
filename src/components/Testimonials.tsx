import styled from "styled-components"

import DoubleQuote from "../assets/images/quotes.png"
import { Swiper } from "./swiper"

type TestimonialType = {
    text: string
    author: string
    regards: string
    children?: React.ReactNode
}
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
        <StyledTestimonialSwiper
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
        </StyledTestimonialSwiper>
    )
}

const Testimonial = ({ text, author, regards, children }: TestimonialType) => {
    return (
        <StyledTestimonial>
            <img src={DoubleQuote} alt="" />
            <p>{text}</p>
            <div>
                <p className="regards">{regards}</p>
                <p>{author}</p>
            </div>
            {children}
        </StyledTestimonial>
    )
}

const StyledTestimonialSwiper = styled(Swiper)`
    & > .swiper-button-prev,
    & > .swiper-button-next {
        display: none;
    }
`

const StyledTestimonials = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
`

const StyledTestimonial = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    background-color: white;
    text-align: center;
    box-shadow: 0 0px 14px rgb(0 0 0 / 8%);
    padding: 48px 24px;
    margin: 18px auto;
    gap: 32px;
    width: auto;

    @media (min-width: 1300px) {
        width: 356px;
    }

    && {
        margin: 18px 24px;
    }

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

    .swiper-button-next,
    .swiper-button-prev {
        bottom: 6px;
        right: 6px;
        top: auto;
        color: ${({ theme }) => theme.colors.blue};

        &::after {
            font-weight: bold;
            font-size: 24px;
        }
    }
`
