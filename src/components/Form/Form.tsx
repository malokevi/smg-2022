import { useState } from "react"
import styled from "styled-components"

import Button from "../Button"
import { ButtonVersionType } from "../Button/styles"
import { Input, InputType } from "./Input"
import Select, { SelectType } from "./Select"

export enum InputTypes {
    TEXT = "text",
    PASSWORD = "password",
    SELECT = "select"
}

export interface FormFieldType extends InputType, SelectType {
    type: InputTypes
}

type FormPropsType = {
    fields: FormFieldType[]
}

const RenderField = ({
    field,
    onChange
}: {
    field: FormFieldType
    onChange: (e: any) => void
}) => {
    let elem = <></>

    switch (field.type) {
        case InputTypes.TEXT:
            elem = <Input onChange={onChange} {...field} />
            break
        case InputTypes.PASSWORD:
            elem = <Input onChange={onChange} {...field} />
            break
        case InputTypes.SELECT:
            elem = <Select onChange={onChange} {...field} />
            break
        default:
            console.log("no matching form field type")
    }

    return elem
}

const Form = ({ fields }: FormPropsType) => {
    const [values, setValues] = useState([])

    const handleFieldChange = ({
        event,
        name
    }: {
        event: any
        name: string
    }) => {
        setValues({ ...values, [name]: event.target.value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <StyledForm>
            {fields.map((field) => (
                <RenderField
                    onChange={(e) =>
                        handleFieldChange({ event: e, name: field.name })
                    }
                    field={field}
                />
            ))}

            <Button
                label="Submit"
                version={ButtonVersionType.PRIMARY}
                type="submit"
                onClick={handleSubmit}
            />
        </StyledForm>
    )
}

const StyledForm = styled.form`
    display: flex;
    flex-flow: column;
    gap: 24px;

    input,
    select {
        width: 100%;
    }
`
export default Form
