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

type RenderFieldPropsT = {
    field: FormFieldType
    onChange?: (e: any) => void
}

const RenderField = ({ field, onChange }: RenderFieldPropsT) => {
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

type FormPropsT = {
    fields: FormFieldType[]
    onSubmit: (values: { [key: string]: any }, e: SubmitEvent) => void
}

const Form = ({ fields, onSubmit }: FormPropsT) => {
    const [values, setValues] = useState(() => {
        // initialize form field values to undefined.
        const initialValues: { [key: string]: any } = {}

        fields.forEach((field) => {
            initialValues[field.name] = undefined
        })

        return initialValues
    })

    const handleFieldChange = ({
        value,
        name
    }: {
        value: any // TODO - strict type
        name: string
    }) => {
        //reset as undefined when input is falsy
        setValues({ ...values, [name]: value || undefined })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        onSubmit(values, e)
    }

    return (
        <StyledForm name="register" onSubmit={handleSubmit}>
            {fields.map((field, i) => (
                <RenderField
                    key={`${field.name}-${i}`}
                    onChange={({ value }) =>
                        handleFieldChange({ value, name: field.name })
                    }
                    field={field}
                />
            ))}

            <Button version={ButtonVersionType.PRIMARY} type="submit">
                Submit
            </Button>
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
