import React, {useState} from "react";
import {Input} from "antd";

const InputText = () => {
    const [value, setValue] =  useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return <Input value={value} onChange={handleChange} />
};

export default InputText;
