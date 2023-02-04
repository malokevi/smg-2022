import { InfoCategory } from "../../../../gql/graphql"

import * as S from "./styles"

type KnowledgeCenterSectionPropsT = {
    data: InfoCategory
}

export const KnowledgeCenterSection = ({
    data: { infos, label, description }
}: KnowledgeCenterSectionPropsT) => {
    return (
        <S.KnowledgeCenterSection>
            <h2>{label}</h2>
            {!!description && <p>{description}</p>}
            {infos?.data.map(({ attributes }) => {
                const { label, description } = attributes || {}

                return (
                    <div className="info-block" key={label}>
                        <h3>{label}</h3>
                        <p>{description}</p>
                    </div>
                )
            })}
        </S.KnowledgeCenterSection>
    )
}
