import Button from "../../../Button"
import { fadeUp } from "../../../../shared/motion-variants"
import { ButtonVersionType } from "../../../Button/styles"

import * as S from "./styles"

type BlogEntryPropsType = {
    copy: string
    title: string
    image: string
    date: string
}

export const BlogPreview = ({
    copy,
    title,
    image,
    date
}: BlogEntryPropsType) => {
    return (
        <S.BlogEntry variants={fadeUp}>
            <img src={image} alt="" />
            <div className="preview-body">
                <p className="fade">{date}</p>
                <h2>{title}</h2>
                <p className="preview-copy">{copy}</p>
                <Button
                    onClick={(e: any) => {
                        console.log("read more click")
                    }}
                    version={ButtonVersionType.SECONDARY}
                >
                    Read More
                </Button>
            </div>
        </S.BlogEntry>
    )
}
