import React, {useEffect, useState} from "react";
import {Input, Tooltip} from "antd";
import {RHFInput} from "react-hook-form-input";
import "./FormFields.css"

const FormCommonField = ({field, label, formProps, component}) => {

    const [hasError, setHasError] = useState(!!formProps.errors[field]);

    useEffect(() => {
        setHasError(!!formProps.errors[field]);
    }, [formProps.errors[field]]); //eslint-disable-line

    return (
        <>
            <label>{label}</label>
            <Tooltip title={hasError && formProps.errors[field].message} placement={'top'}>
                <RHFInput as={component} name={field} register={formProps.register}
                          setValue={formProps.setValue} className={hasError && 'invalid-field'}
                          tooltip={hasError && formProps.errors[field].message}
                />
            </Tooltip>
        </>
    )
};

export const FormText = (props) => (
    <FormCommonField {...props} component={<Input/>}/>
);

export const FormTextArea = (props) => (
    <FormCommonField {...props} component={<Input.TextArea/>}/>
);
