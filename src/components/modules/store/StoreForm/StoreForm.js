import React from "react";
import useForm from "react-hook-form";
import {FormSelect, FormText, FormTextArea} from "../../../commons/form/FormFields";
import {useStoreForm} from "./useStoreForm";
import {Button} from "antd";

const StoreForm = () => {

    const {schema, onSubmit, storeTypes, defaultValues} = useStoreForm();

    const formProps = useForm({validationSchema: schema, defaultValues: defaultValues});

    return (
        <form onSubmit={formProps.handleSubmit(onSubmit)}>

            <FormText label={'Name'} field={'name'} formProps={formProps}/>

            <FormText label={'E-mail'} field={'email'} formProps={formProps}/>

            <FormTextArea label={'Description'} field={'description'} formProps={formProps}/>

            <FormSelect label={'Store Type'} field={'storeType'} options={storeTypes}
                        optionKey={'id'} optionLabel={'description'} formProps={formProps}
            />

            <br/>
            <Button htmlType={'submit'}>Save</Button>
            <Button onClick={() => formProps.reset(defaultValues)}>Clear</Button>
        </form>
    );
};

export default React.memo(StoreForm);
