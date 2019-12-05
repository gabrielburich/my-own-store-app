import React, {useEffect, useState} from "react";
import {Input, Tooltip} from "antd";
import Select from "react-select";
import {RHFInput} from "react-hook-form-input";
import "./FormFields.css"


const FormCommonField = ({field, label, formProps, component, options, change}) => {

    const [hasError, setHasError] = useState(!!formProps.errors[field]);

    useEffect(() => {
        setHasError(!!formProps.errors[field]);
    }, [formProps.errors[field]]); //eslint-disable-line

    return (
        <>
            <label>{label}</label>
            <Tooltip title={hasError ? formProps.errors[field] && formProps.errors[field].message : ''} >
                <RHFInput as={component} name={field} register={formProps.register}
                          setValue={formProps.setValue} onChange={change} options={options}
                          className={hasError ? 'invalid-field' : ''}
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


export const FormSelect = (props) => {
    const {formProps, field, options, optionKey, optionLabel} = props;

    const changeOptions = (options) => {
        return options.map(option => ({value: option[optionKey], label: option[optionLabel]}));
    };

    const handleMultiChange = (selectedOption) => {
        formProps.setValue(field, selectedOption);
    };

   return (
       <FormCommonField
           {...props}
           options={changeOptions(options)}
           change={handleMultiChange}
           component={<Select/>}
       />
   )
};
