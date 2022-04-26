import { useEffect, useId, useState } from "react"
import styled from "styled-components"
import { SelectOptionType } from "../../shared/types"

type SelectType = {
    name: string
    label?: string
    value?: any
    onChange: (e: any) => void
    options: SelectOptionType[]
}

const Select = ({ name, label, options, value, onChange }: SelectType) => {
    const id = useId()
    const [val, setVal] = useState<number | undefined>()

    useEffect(() => {
        options.forEach((option, i) => {
            option.default && setVal(i)
        })
    }, [])

    const handleChange = (e: any) => {
        setVal(e.target.value)
        onChange(options[e.target.value])
    }

    return (
        <StyledSelect>
            {label && <label htmlFor={id}></label>}
            <select value={val} name={name} id={id} onChange={handleChange}>
                <option disabled value="-1">
                    Select an option
                </option>
                {options.map(({ label }, i) => (
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
