import { useEffect, useId, useState } from "react"
import styled from "styled-components"
import { SelectOptionType } from "../../shared/types"

export type SelectType = {
    name: string
    label?: string
    value?: string | number
    onChange?: (e: any) => void
    options?: SelectOptionType[]
}

const Select = ({ name, label, options, value, onChange }: SelectType) => {
    const id = useId()
    const [val, setVal] = useState<number | undefined>()

    useEffect(() => {
        options &&
            options.forEach((option, i) => {
                option.default && setVal(i)
            })
    }, [])

    const handleChange = (e: any) => {
        setVal(e.target.value)
        onChange && onChange(options && options[e.target.value])
    }

    return (
        <StyledSelect>
            {label && <label htmlFor={id}></label>}
            <select value={val} name={name} id={id} onChange={handleChange}>
                <option disabled value="-1">
                    Select an option
                </option>
                {options &&
                    options.map(({ label }, i) => (
                        <option key={`select-${label || ""}-${i}`} value={i}>
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
