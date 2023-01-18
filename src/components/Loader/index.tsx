import { LoaderPositionType } from "./styles"

import * as S from "./styles"

type LoaderPropsType = {
    visible?: boolean
    position?: LoaderPositionType
}

const Loader = ({
    position = LoaderPositionType.ABSOLUTE,
    visible = true
}: LoaderPropsType) => {
    return (
        <S.Loader position={position} animate={{ opacity: visible ? 1 : 0 }}>
            <div className="lds-grid">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </S.Loader>
    )
}

export default Loader
