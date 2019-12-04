import React from "react";
import useForm from "react-hook-form";
import * as yup from "yup";
import {FormText, FormTextArea} from "../../../commons/form/FormFields";

const StoreForm = () => {

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email(),
        description: yup.string().max(254)
    });

    const formProps = useForm({validationSchema: schema});

    const onSubmit = (formData) => {
        console.log(formData)
    };

    return (
        <form onSubmit={formProps.handleSubmit(onSubmit)}>

            <FormText label={'Name'} field={'name'} formProps={formProps}/>

            <FormText label={'E-mail'} field={'email'} formProps={formProps}/>

            <FormTextArea label={'Description'} field={'description'} formProps={formProps}/>

            <br/>
            <input type="submit"/>
        </form>
    );
};

export default React.memo(StoreForm);
