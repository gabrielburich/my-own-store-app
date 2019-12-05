import React from "react";
import {useStoreForm} from "./useStoreForm";
import {Formik} from "formik";
import {Form, FormItem, Input, ResetButton, SubmitButton} from "formik-antd";
import {Button} from "antd";
import {FormSelect} from "../../../commons/form/FormFields";

const StoreForm = ({recordId, setCurrentContainer}) => {

    const {schema, formData, handleSubmit, storeTypeOptions, loading} = useStoreForm(recordId, setCurrentContainer);

    return (
        <>
            {!loading &&
                <Formik
                    validationSchema={schema}
                    initialValues={formData}
                    onSubmit={handleSubmit}
                    render={() => (
                        <Form>
                            <div className={"container"}>
                                <div className={"component-container"}>
                                    <FormItem name={"name"} label={"Name"}>
                                        <Input name={"name"} />
                                    </FormItem>

                                    <FormItem name={"storeType"} label={"Store Type"}>
                                        <FormSelect
                                            name={"storeType"}
                                            style={{ width: "100%" }}
                                            options={storeTypeOptions}
                                            optionKey={"id"}
                                            optionLabel={"description"}
                                        />
                                    </FormItem>

                                    <FormItem name={"email"} label={"E-Mail"}>
                                        <Input name={"email"} />
                                    </FormItem>

                                    <FormItem name={"description"} label={"Description"}>
                                        <Input.TextArea name={"description"} />
                                    </FormItem>

                                    <Button.Group size={"large"}>
                                        <ResetButton>Reset</ResetButton>
                                        <SubmitButton type={"primary"} disabled={false}>
                                            Save
                                        </SubmitButton>
                                        <Button onClick={() => setCurrentContainer('LIST')}>Cancel</Button>
                                    </Button.Group>
                                </div>
                            </div>
                        </Form>
                    )}
                />
            }
        </>
    );
};

export default React.memo(StoreForm);
