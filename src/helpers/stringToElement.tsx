import { HomePageCopyType } from "../@types/copy"

interface ConvertObjectType extends HomePageCopyType {
    index: number
}

export const objectToElem = ({
    type,
    weight,
    text,
    index
}: ConvertObjectType) => {
    const key = `text-${type}-${weight}-${index}`

    switch (type) {
        case "p":
            return (
                <p key={key} style={{ fontWeight: weight }}>
                    {text}
                </p>
            )
        case "h1":
            return (
                <h1 key={key} style={{ fontWeight: weight }}>
                    {text}
                </h1>
            )
        case "h2":
            return (
                <h2 key={key} style={{ fontWeight: weight }}>
                    {text}
                </h2>
            )
        case "h3":
            return (
                <h3 key={key} style={{ fontWeight: weight }}>
                    {text}
                </h3>
            )
        case "ul":
            return (
                <ul key={key} style={{ fontWeight: weight }}>
                    {Array.isArray(text) &&
                        text.map((t, i) => {
                            return <li key={`t-list-${index}-${i}`}>{t}</li>
                        })}
                </ul>
            )
    }
}
