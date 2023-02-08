import { InfoCategory } from "../../../../gql/graphql"

import * as S from "./styles"

type KnowledgeCenterSectionPropsT = {
    data: InfoCategory
}

export const KnowledgeCenterSection = ({
    data: { infos, label, description, uid }
}: KnowledgeCenterSectionPropsT) => {
    return (
        <S.KnowledgeCenterSection id={uid || undefined}>
            <h2>{label}</h2>
            {!!description && <p>{description}</p>}
            {infos?.data.map(({ attributes }) => {
                const { label, description, uid: uuid } = attributes || {}

                return (
                    <div
                        className="info-block"
                        id={`kc-${uuid}` || undefined}
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
