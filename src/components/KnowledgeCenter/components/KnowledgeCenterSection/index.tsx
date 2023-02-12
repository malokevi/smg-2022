import { InfoCategory } from "../../../../gql/graphql"

import * as S from "./styles"

export const KC_ITEM_PREFIX = "kc-"

type KnowledgeCenterSectionPropsT = {
    data: InfoCategory
    currentTopic?: string
}

export const KnowledgeCenterSection = ({
    data: { infos, label, description, uid },
    currentTopic
}: KnowledgeCenterSectionPropsT) => {
    return (
        <S.KnowledgeCenterSection id={uid || undefined}>
            <h2>{label}</h2>
            {!!description && <p>{description}</p>}
            {infos?.data
                .filter(({ attributes }) => {
                    if (typeof currentTopic !== "undefined") {
                        return attributes?.uid === currentTopic
                    }

                    return true
                })
                .map(({ attributes }) => {
                    const { label, description, uid: uuid } = attributes || {}

                    return (
                        <div
                            className="info-block"
                            id={`${KC_ITEM_PREFIX}${uuid}` || undefined}
                            key={label}
                        >
                            <h3>{label}</h3>
                            <p>{description}</p>
                        </div>
                    )
                })}
        </S.KnowledgeCenterSection>
    )
}
