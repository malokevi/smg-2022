import { useId } from "react"
import styled from "styled-components"

type SelectType = {
    name: string
    label: string
    onChange: () => void
    options: {
        value: string | number
        label: string
        selected?: boolean
    }[]
}

const Select = ({ name, label, options, onChange }: SelectType) => {
    const id = useId()

    return (
        <StyledSelect>
            {label && <label htmlFor={id}></label>}
            <select name={name} id={id} onChange={onChange}>
                <option value="">Select an option</option>
                {options.map(({ value, label, selected }) => (
                    <option selected={selected} value={value}>
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
`

export default Select
