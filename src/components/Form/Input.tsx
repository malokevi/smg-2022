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

const Input = ({
    name,
    label,
    type,
    value,
    onChange,
    placeholder,
    icon
}: InputType) => {
    const id = useId()

    return (
        <StyledInput>
            {label && <label htmlFor={id}></label>}
            <div className="input-container">
                <input
                    name={name}
                    id={id}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={({ target: { value: v } }) =>
                        onChange && onChange({ name, value: v })
                    }
                />
                {icon && (
                    <button>
                        <img alt="store search" src={icon} />
                    </button>
                )}
            </div>
        </StyledInput>
    )
}

const StyledInput = styled.div`
    display: flex;
    flex-flow: column nowrap;

    .input-container {
        display: flex;
        flex-flow: row nowrap;

        input {
            padding: 8px 14px;
        }

        button {
            padding: 4px 12px;
            width: 100px;
            background-color: ${({ theme }) => theme.colors.blue};

            img {
                height: 24px;
                margin: auto;
            }
        }
    }
`

export default Input
