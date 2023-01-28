import { Testimonial, TestimonialType } from '../Testimonial'

import * as S from './styles'

type TestimonialsType = {
    data: TestimonialType[]
    className: string
}

export const Testimonials = ({ data, className }: TestimonialsType) => {
    return (
        <S.Testimonials className={className}>
            {data.map((t) => (
                <Testimonial key={`testimonial-${t.author}`} {...t} />
            ))}
        </S.Testimonials>
    )
}
