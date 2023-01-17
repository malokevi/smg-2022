import { useEffect, useId, useState } from "react"
import styled from "styled-components"

import { SelectOptionType } from "../../shared/types"
import { ProductsFilterDataType } from "../store/common/types.common"

export type SelectType = {
    name: string
    label?: string
    defaultValue?: ProductsFilterDataType
    onChange?: (e: ProductsFilterDataType) => void
    options?: SelectOptionType[]
}

const Select = ({
    name,
    label,
    options,
    defaultValue,
    onChange
}: SelectType) => {
    const id = useId()
    const [val, setVal] = useState<ProductsFilterDataType | undefined>(
        defaultValue
    )

    useEffect(() => {
        onChange && val && onChange(val)
    }, [val])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setVal({ name, value: e.target.value })
    }

    return (
        <StyledSelect>
            {label && <label htmlFor={id}></label>}
            <select
                value={val?.value}
                name={name}
                id={id}
                onChange={handleChange}
            >
                <option disabled value="-1">
                    Select an option
                </option>
                {options &&
                    options.map(({ label, value }, i) => (
                        <option
                            key={`select-${label || ""}-${i}`}
                            value={value}
                        >
                            {label}
                        </option>
                    ))}
            </select>
        </StyledSelect>
    )
}

const StyledSelect = styled.div`
    display: flex;
    flex-flow: column nowrap;

    select {
        border-color: ${({ theme }) => theme.colors.gray};
        padding: 6px;
        cursor: pointer;
    }
`

export default Select
