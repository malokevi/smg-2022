import DoubleQuote from "../../../../assets/images/quotes.png"

import * as S from './styles'

export type TestimonialType = {
    text: string
    author: string
    regards: string
    children?: React.ReactNode
}

export const Testimonial = ({ children, text, regards, author }: TestimonialType) => {
    return (
        <S.StyledTestimonial>
            <img src={DoubleQuote} alt="" />
            <p>{text}</p>
            <div>
                <p className="regards">{regards}</p>
                <p>{author}</p>
            </div>
            {children}
        </S.StyledTestimonial>
    )
}
