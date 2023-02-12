import { useParams } from "react-router"

import { InfoCategory } from "../../../../gql/graphql"

import * as S from "./styles"

type KnowledgeCenterSectionPropsT = {
    data: InfoCategory
}

export const KnowledgeCenterSection = ({
    data: { infos, label, description, uid }
}: KnowledgeCenterSectionPropsT) => {
    const { topic } = useParams()

    return (
        <S.KnowledgeCenterSection id={uid || undefined}>
            <h2>{label}</h2>
            {!!description && <p>{description}</p>}
            {infos?.data
                .filter(({ attributes }) => {
                    if (typeof topic !== "undefined") {
                        return attributes?.uid === topic
                    }

                    return true
                })
                .map(({ attributes }) => {
                    if (!!attributes) {
                        const { label, description, uid: uuid } = attributes

                        // todo - make this a reusable card? break out component into separate file?
                        return (
                            <div
                                className="info-block"
                                id={`${uuid}` || undefined}
                                key={label}
                            >
                                <h3>{label}</h3>
                                <p>{description}</p>
                            </div>
                        )
                    }

                    return null
                })}
        </S.KnowledgeCenterSection>
    )
}
