import { useId } from "react"
import styled from "styled-components"

import { ProductsFilterDataType } from "../store/common/types.common"

export type InputType = {
    name: string
    label?: string
    placeholder?: string
    onChange?: (e: ProductsFilterDataType) => void
    type: any
    value?: string | number
    icon?: any
}

export const Input = ({
    name,
    label,
    type,
    value,
    onChange,
    placeholder,
    icon
}: InputType) => {
    const id = useId()

    const handleInputTextChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        onChange && onChange({ name, value: target.value })
    }

    return (
        <StyledInput>
            {label && <label htmlFor={id}></label>}
            <input
                className="input-text"
                name={name}
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={handleInputTextChange}
            />
        </StyledInput>
    )
}

const StyledInput = styled.div`
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 2;

    .input-text {
        box-sizing: border-box; // todo - add to reset
        padding: 8px 14px;
    }
`
