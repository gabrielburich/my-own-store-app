import React from "react";
import {Select} from "formik-antd";

export const FormSelect = (props) => {
    const selectOptions = props.options.map((option, index) => (
        <Select.Option key={index} value={option[props.optionKey]}>
            {option[props.optionLabel]}
        </Select.Option>
    ));

    return <Select {...props}>{selectOptions}</Select>;
};
